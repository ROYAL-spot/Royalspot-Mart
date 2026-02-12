<?php
// Show errors for debugging (remove on production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require __DIR__ . '/vendor/autoload.php';

// Load config (SMTP and DB)
$config = include(__DIR__ . '/config.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 1. Connect to MySQL
$conn = new mysqli($config['db_host'], $config['db_user'], $config['db_pass'], $config['db_name']);
if ($conn->connect_error) {
    die("DB connection failed: " . $conn->connect_error);
}

// 2. Sanitize inputs
function clean_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

$name = clean_input($_POST['fullname'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = clean_input($_POST['phone'] ?? '');
$address = clean_input($_POST['address'] ?? '');
$notes = clean_input($_POST['notes'] ?? '');
$orderJson = $_POST['order'] ?? ''; 

// 3. Validation
if (!$name || !$email || !$phone || !$address || !$orderJson) {
    die("Error: Please complete all required fields and ensure your cart is not empty.");
}

$orderItems = json_decode($orderJson, true);
if (!$orderItems || !is_array($orderItems) || empty($orderItems)) {
    die("Error: Invalid or empty order data.");
}

// 4. Calculate Total and Create Email Summary
$orderSummaryText = "";
$totalAmount = 0;
foreach ($orderItems as $item) {
    if (!isset($item['name'], $item['price'], $item['qty'])) continue;
    
    $lineTotal = $item['price'] * $item['qty'];
    $orderSummaryText .= "{$item['name']} - R " . number_format($item['price'], 2) . " x {$item['qty']} = R " . number_format($lineTotal, 2) . "<br>";
    $totalAmount += $lineTotal;
}

// 5. Save to Database using Prepared Statements (Security)
// Note the '?' placeholders - this prevents SQL Injection!
$sql = "INSERT INTO orders (fullname, email, phone, address, notes, order_details, total_amount) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("DB error: " . $conn->error);
}

// "ssssssd" means: string, string, string, string, string, string, double (number)
$stmt->bind_param("ssssssd", $name, $email, $phone, $address, $notes, $orderJson, $totalAmount);

if ($stmt->execute()) {
    // 6. Send notification email via PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $config['smtp_host'] ?? 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['smtp_user']; 
        $mail->Password   = $config['smtp_pass']; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port       = $config['smtp_port'] ?? 465;

        $mail->setFrom($config['smtp_user'], 'RoyalSpot Mart Orders');
        $mail->addAddress($config['admin_email']); 

        $mail->isHTML(true);
        $mail->Subject = "New Delivery Order from $name";
        $mail->Body = "
            <h2>New Delivery Order</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Address:</strong> $address</p>
            <p><strong>Notes:</strong> $notes</p>
            <h3>Order Details:</h3>
            <p>$orderSummaryText</p>
            <p><strong>Total Amount:</strong> R " . number_format($totalAmount, 2) . "</p>
        ";

        $mail->send();

        // Success! Go to thank you page
        header("Location: thankyou.html");
        exit;
        
    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $e->getMessage());
        echo "Order saved, but email failed. (Error: " . $mail->ErrorInfo . ")";
    }
} else {
    echo "Error saving delivery: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>