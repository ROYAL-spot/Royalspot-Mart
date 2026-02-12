<?php
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Dotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

return [
    // Database configuration
    'db_host'     => $_ENV['DB_HOST'] ?? 'localhost',
    'db_name'     => $_ENV['DB_NAME'] ?? 'royalmart_db',  
    'db_user'     => $_ENV['DB_USER'] ?? 'root',                 
    'db_pass'     => $_ENV['DB_PASS'] ?? '',                     

    // SMTP (Email) configuration
    'smtp_host'   => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
    'smtp_port'   => $_ENV['SMTP_PORT'] ?? 465,
    'smtp_user'   => $_ENV['SMTP_USER'],
    'smtp_pass'   => $_ENV['SMTP_PASS'],
    'admin_email' => $_ENV['ADMIN_EMAIL'],
];