const products = [
  // Cement (Now 10 products)
  {
    id: "PPC-OPC-Cement",
    name: "PPC OPC Cement 50kg",
    image: "images/ppc_cement.jpg",
    price: 115.00,
    sku: "CEM001",
    description: "High-quality Portland cement ideal for general building and concrete work.",
    category: "Cement"
  },
  {
    id: "AfriSam-All-Purpose",
    name: "AfriSam All Purpose Cement 50kg",
    image: "images/Afrisam_cement.jpg",
    price: 118.00,
    sku: "CEM002",
    description: "Reliable and versatile cement designed for various building applications.",
    category: "Cement"
  },
  {
    id: "Lafarge-Cement",
    name: "Lafarge Sulf8-Cement 42.5N 50kg",
    image: "images/lafarge_cement.jpg",
    price: 120.00,
    sku: "CEM003",
    description: "Premium sulfate-resistant cement for demanding construction environments.",
    category: "Cement"
  },
  {
    id: "Sephaku-50kg",
    name: "Sephaku 32.5N Cement 50kg",
    image: "images/sephaku_cement.jpg",
    price: 112.00,
    sku: "CEM004",
    description: "General purpose cement for various construction needs.",
    category: "Cement"
  },
  {
    id: "NPC-Cement-50kg",
    name: "NPC Cement 42.5N 50kg",
    image: "images/npc_cement.jpg",
    price: 117.00,
    sku: "CEM005",
    description: "High-strength cement for robust construction projects.",
    category: "Cement"
  },
  {
    id: "Rhino-Lite-Cement-40kg",
    name: "RhinoLite Skimming Plaster 40kg",
    image: "images/rhinolite_cement.jpg",
    price: 180.00,
    sku: "CEM006",
    description: "Lightweight gypsum plaster for smooth wall and ceiling finishes.",
    category: "Cement"
  },
  {
    id: "Cemza-Rapid-Set-50kg",
    name: "Cemza Rapid Set Cement 50kg",
    image: "images/cemza_cement.jpg",
    price: 130.00,
    sku: "CEM007",
    description: "Fast-setting cement for quick repair and construction jobs.",
    category: "Cement"
  },
  {
    id: "Powercrete-325N-50kg",
    name: "Powercrete 32.5N Cement 50kg",
    image: "images/powercrete_cement.jpg",
    price: 110.00,
    sku: "CEM008",
    description: "Versatile cement for a wide range of building applications.",
    category: "Cement"
  },
  {
    id: "Surebuild-425N-50kg",
    name: "Surebuild 42.5N Cement 50kg",
    image: "images/surebuild_cement.jpg",
    price: 125.00,
    sku: "CEM009",
    description: "High-performance cement for demanding structural work.",
    category: "Cement"
  },
  {
    id: "Supra-Cement-50kg",
    name: "Supra Cement 32.5N 50kg",
    image: "images/supra_cement.jpg",
    price: 119.00,
    sku: "CEM010",
    description: "Standard cement for general concrete and masonry.",
    category: "Cement"
  },

  // Bricks (Now 15 products)
  {
    id: "Maxi-Brick",
    name: "Brick Cement Maxi Bophelong",
    image: "images/brick-cement-maxi-bophelong.jpg",
    price: 4.10,
    sku: "BRK001",
    description: "Durable maxi brick for residential and commercial building use.",
    category: "Bricks"
  },
  {
    id: "Stock-Brick",
    name: "Brick Cement Stock Bophelong",
    image: "images/brick-cement-stock-bophelong.jpg",
    price: 2.05,
    sku: "BRK002",
    description: "Affordable stock bricks ideal for general building work.",
    category: "Bricks"
  },
  {
    id: "Mottled-Rustic-Brick",
    name: "Brick Mottled Rustic",
    image: "images/mottled-rustic.jpg",
    price: 3.40,
    sku: "BRK003",
    description: "Rustic face brick with a textured, weathered look.",
    category: "Bricks"
  },
  {
    id: "Impala-Brick",
    name: "Champion Impala Brick",
    image: "images/cashbuild-impala-brick.jpg",
    price: 4.40,
    sku: "BRK004",
    description: "Quality face brick with excellent weather resistance and strength.",
    category: "Bricks"
  },
  {
    id: "Thaba-Brick",
    name: "Champion Thaba Brick",
    image: "images/cashbuild-thaba-brick.jpg",
    price: 4.60,
    sku: "BRK005",
    description: "Strong, weather-resistant brick ideal for outer walls.",
    category: "Bricks"
  },
  {
    id: "Marula-Brick",
    name: "Champion Marula Brick",
    image: "images/cashbuild-marula-brick.jpg",
    price: 4.60,
    sku: "BRK006",
    description: "Premium face brick with a rich marula tone.",
    category: "Bricks"
  },
  {
    id: "Nebraska-Light-Brick",
    name: "Face Brick Nebraska Light",
    image: "images/face-brick-nebraska-light.jpg",
    price: 4.20,
    sku: "BRK007",
    description: "Light-toned face brick perfect for contemporary designs.",
    category: "Bricks"
  },
  {
    id: "Clay-Stock-Brick",
    name: "Clay Stock Brick",
    image: "images/clay_bricks.jpg",
    price: 2.20,
    sku: "BRK008",
    description: "Traditional clay brick for general construction.",
    category: "Bricks"
  },
  {
    id: "Semi-Face-Brick-Red",
    name: "Semi-Face Brick Red",
    image: "images/semi_face_brick_red.jpg",
    price: 3.80,
    sku: "BRK009",
    description: "Red semi-face brick for aesthetic and structural use.",
    category: "Bricks"
  },
  {
    id: "Interlocking-Paver-Grey",
    name: "Interlocking Paver Grey",
    image: "images/interlocking_paver_grey.jpg",
    price: 5.50,
    sku: "BRK010",
    description: "Grey interlocking paver for driveways and pathways.",
    category: "Bricks"
  },
  {
    id: "Cement-Block-M6",
    name: "Cement Block M6",
    image: "images/cement_block_m6.jpg",
    price: 6.00,
    sku: "BRK011",
    description: "Concrete block for sturdy wall construction.",
    category: "Bricks"
  },
  {
    id: "Fired-Clay-Face-Brick",
    name: "Fired Clay Face Brick",
    image: "images/fired_clay_face_brick.jpg",
    price: 4.70,
    sku: "BRK012",
    description: "Classic fired clay face brick with natural variations.",
    category: "Bricks"
  },
  {
    id: "Bevelled-Paver-Charcoal",
    name: "Bevelled Paver Charcoal",
    image: "images/bevelled_paver_charcoal.jpg",
    price: 5.80,
    sku: "BRK013",
    description: "Charcoal bevelled paver for sophisticated paving designs.",
    category: "Bricks"
  },
  {
    id: "Maxi-Block-Hollow",
    name: "Maxi Block Hollow",
    image: "images/maxi_block_hollow.jpg",
    price: 6.50,
    sku: "BRK014",
    description: "Lightweight hollow maxi block for various building applications.",
    category: "Bricks"
  },
  {
    id: "Split-Block-Grey",
    name: "Split Block Grey",
    image: "images/split_block_grey.jpg",
    price: 7.20,
    sku: "BRK015",
    description: "Textured grey split block for decorative retaining walls.",
    category: "Bricks"
  },

  // Paint (Now 10 products)
  {
    id: "Plascon-Wall-Paint",
    name: "Plascon Wall & All Paint 20L",
    image: "images/plascon_paint.jpg",
    price: 550.00,
    sku: "PNT001",
    description: "Premium paint for walls and ceilings, offering great coverage and durability.",
    category: "Paint"
  },
  {
    id: "Duram-Wall-Paint",
    name: "Duram Wall & Ceiling Paint 20L",
    image: "images/duram_paint.jpg",
    price: 550.00,
    sku: "PNT002",
    description: "Cost-effective wall and ceiling paint with a smooth matte finish.",
    category: "Paint"
  },
  {
    id: "Dulux-Trade-White-20L",
    name: "Dulux Trade Matt White 20L",
    image: "images/dulux_trade_white.jpg",
    price: 620.00,
    sku: "PNT003",
    description: "Professional grade white matt paint for interior use.",
    category: "Paint"
  },
  {
    id: "Prominent-Sheen-5L",
    name: "Prominent Premium Sheen 5L",
    image: "images/prominent_sheen.jpg",
    price: 280.00,
    sku: "PNT004",
    description: "Durable sheen paint for interior and exterior surfaces.",
    category: "Paint"
  },
  {
    id: "Plascon-Velvaglo-5L",
    name: "Plascon Velvaglo Enamel 5L",
    image: "images/plascon_velvaglo.jpg",
    price: 450.00,
    sku: "PNT005",
    description: "High-quality enamel paint for doors, windows and trim.",
    category: "Paint"
  },
  {
    id: "Woodoc-30-Exterior-5L",
    name: "Woodoc 30 Exterior Sealer 5L",
    image: "images/woodoc_exterior.jpg",
    price: 720.00,
    sku: "PNT006",
    description: "Protective wood sealer for exterior wooden surfaces.",
    category: "Paint"
  },
  {
    id: "Fired-Earth-Chalk-Paint-1L",
    name: "Fired Earth Chalk Paint 1L",
    image: "images/fired_earth_chalk.jpg",
    price: 180.00,
    sku: "PNT007",
    description: "Matte chalk paint for furniture and decorative projects.",
    category: "Paint"
  },
  {
    id: "Rust-Oleum-Spray-Paint",
    name: "Rust-Oleum Universal Spray Paint",
    image: "images/rust_oleum_spray.jpg",
    price: 110.00,
    sku: "PNT008",
    description: "All-surface spray paint for various DIY and craft projects.",
    category: "Paint"
  },
  {
    id: "Sanding-Sealer-1L",
    name: "Wood Sanding Sealer 1L",
    image: "images/sanding_sealer.jpg",
    price: 95.00,
    sku: "PNT009",
    description: "Clear sealer for preparing wood surfaces before varnishing.",
    category: "Paint"
  },
  {
    id: "Acrylic-PVA-20L",
    name: "Acrylic PVA Super White 20L",
    image: "images/acrylic_pva.jpg",
    price: 480.00,
    sku: "PNT010",
    description: "Economical acrylic PVA paint for interior walls.",
    category: "Paint"
  },

  // Steel (Now 10 products)
  {
    id: "Angle-Iron-25x3mm",
    name: "Angle Iron 25x3mmx6m",
    image: "images/angle-iron.jpg",
    price: 129.95,
    sku: "STL001",
    description: "Steel angle iron suitable for welding, framing, and support structures.",
    category: "Steel"
  },
  {
    id: "Brick-Force-100mm",
    name: "Brick Force 100mm X 15m (Non-Nhbrc)",
    image: "images/brick-force-100mm-x-15m-non-nhbrc.jpg",
    price: 21.95,
    sku: "STL002",
    description: "Used to strengthen masonry walls. Ideal for low-rise construction.",
    category: "Steel"
  },
  {
    id: "Square-Tube-25x25x1.6mm",
    name: "Square Tube 25x25x1.6mmx6m",
    image: "images/square_tube.jpg",
    price: 180.00,
    sku: "STL003",
    description: "Versatile steel square tube for light fabrication.",
    category: "Steel"
  },
  {
    id: "Flat-Bar-50x5mm",
    name: "Flat Bar 50x5mmx6m",
    image: "images/flat_bar.jpg",
    price: 150.00,
    sku: "STL004",
    description: "General purpose flat steel bar for various applications.",
    category: "Steel"
  },
  {
    id: "Round-Bar-10mm",
    name: "Round Bar 10mmx6m",
    image: "images/round_bar.jpg",
    price: 90.00,
    sku: "STL005",
    description: "Solid round steel bar for structural and decorative use.",
    category: "Steel"
  },
  {
    id: "Reinforcing-Mesh-R8",
    name: "Reinforcing Mesh R8 6x2.4m",
    image: "images/reinforcing_mesh.jpg",
    price: 450.00,
    sku: "STL006",
    description: "Steel mesh for concrete reinforcement in slabs and foundations.",
    category: "Steel"
  },
  {
    id: "I-Beam-100mm",
    name: "I-Beam 100mmx6m",
    image: "images/i_beam.jpg",
    price: 850.00,
    sku: "STL007",
    description: "Structural steel I-beam for heavy-duty support.",
    category: "Steel"
  },
  {
    id: "Galvanized-Pipe-25mm",
    name: "Galvanized Pipe 25mmx6m",
    image: "images/galvanized_pipe.jpg",
    price: 220.00,
    sku: "STL008",
    description: "Corrosion-resistant galvanized steel pipe for water lines and frameworks.",
    category: "Steel"
  },
  {
    id: "Lip-Channel-75mm",
    name: "Lip Channel 75mmx6m",
    image: "images/lip_channel.jpg",
    price: 380.00,
    sku: "STL009",
    description: "Lightweight steel channel used in roofing and wall framing.",
    category: "Steel"
  },
  {
    id: "Expanded-Metal-Sheet",
    name: "Expanded Metal Sheet 1200x2400mm",
    image: "images/expanded_metal.jpg",
    price: 320.00,
    sku: "STL010",
    description: "Versatile expanded metal sheet for grates, security, and decorative use.",
    category: "Steel"
  },

  // Roofing (Now 10 products)
  {
    id: "Nutec-Barge-Board",
    name: "Nutec Barge Board 3.0m",
    image: "images/nutec-barge-board.jpg",
    price: 144.95,
    sku: "ROOF001",
    description: "Fiber cement board for fascia and barge applications.",
    category: "Roofing"
  },
  {
    id: "IBR-Sheeting-0.47mm",
    name: "IBR Sheeting 0.47mm x 3.6m",
    image: "images/ibr_sheeting.jpg",
    price: 210.00,
    sku: "ROOF002",
    description: "Galvanized IBR roofing sheets for residential and industrial buildings.",
    category: "Roofing"
  },
  {
    id: "Corrugated-Iron-0.5mm",
    name: "Corrugated Iron 0.5mm x 3.0m",
    image: "images/corrugated_iron.jpg",
    price: 180.00,
    sku: "ROOF003",
    description: "Classic corrugated iron sheets for roofing and cladding.",
    category: "Roofing"
  },
  {
    id: "Roof-Tile-Cement",
    name: "Cement Roof Tile Double Roman",
    image: "images/cement_roof_tile.jpg",
    price: 25.00,
    sku: "ROOF004",
    description: "Durable cement roof tile in a Double Roman profile.",
    category: "Roofing"
  },
  {
    id: "Polycarbonate-Sheet-Clear",
    name: "Polycarbonate Sheet Clear 1.8m",
    image: "images/polycarbonate_sheet.jpg",
    price: 350.00,
    sku: "ROOF005",
    description: "Clear polycarbonate sheet for skylights and covered patios.",
    category: "Roofing"
  },
  {
    id: "Roofing-Screws-100pack",
    name: "Roofing Screws Self Drilling 100pk",
    image: "images/roofing_screws.jpg",
    price: 120.00,
    sku: "ROOF006",
    description: "Self-drilling screws for fastening roofing sheets.",
    category: "Roofing"
  },
  {
    id: "Bargeboard-Fascia-3.6m",
    name: "Fiber Cement Fascia Board 3.6m",
    image: "images/fascia_board.jpg",
    price: 160.00,
    sku: "ROOF007",
    description: "Fiber cement fascia board for roof edges.",
    category: "Roofing"
  },
  {
    id: "Roof-Sealer-Liquid-5L",
    name: "Liquid Roof Sealer 5L Grey",
    image: "images/liquid_roof_sealer.jpg",
    price: 400.00,
    sku: "ROOF008",
    description: "Waterproof liquid sealer for roof repairs and protection.",
    category: "Roofing"
  },
  {
    id: "Bituminous-Waterproofing",
    name: "Bituminous Waterproofing Membrane 1mx10m",
    image: "images/bituminous_waterproofing.jpg",
    price: 600.00,
    sku: "ROOF009",
    description: "Flexible membrane for waterproofing flat roofs and foundations.",
    category: "Roofing"
  },
  {
    id: "Roof-Ventilator-Whirlybird",
    name: "Whirlybird Roof Ventilator",
    image: "images/roof_ventilator.jpg",
    price: 750.00,
    sku: "ROOF010",
    description: "Turbine ventilator for improving roof space ventilation.",
    category: "Roofing"
  },

  // Tools / Other
  {
    id: "Machette-Lasher",
    name: "Lasher Cutlass Machette",
    image: "images/lasher-cutlass-machette-poly-handle.jpg",
    price: 179.95,
    sku: "GT001",
    description: "Tough machette ideal for gardening and vegetation clearing.",
    category: "Garden Tools"
  },
  {
    id: "Trowel-Brick",
    name: "Trowel Brick 250mm Wooden Handle",
    image: "images/trowel-brick-250mm-wooden-handle.jpg",
    price: 87.95,
    sku: "BLD001",
    description: "Sturdy trowel perfect for precise bricklaying.",
    category: "Builders Tools"
  },
  {
    id: "Caulking-Gun",
    name: "Caulking Gun Heavy Duty",
    image: "images/caulking-gun-heavy-duty.jpg",
    price: 109.95,
    sku: "HT001", // Changed from BLD002 to HT001 for Hand Tools (new category)
    description: "Durable caulking gun for sealing joints and cracks.",
    category: "Hand Tools" // Changed category from Builders Tools to Hand Tools
  },
  {
    id: "Carbolineum-5L",
    name: "Carbolineum 5L",
    image: "images/carbolineum-5l.jpg",
    price: 297.95,
    sku: "DEC001",
    description: "Wood preservative for outdoor use. Helps protect against rot and insects.",
    category: "Decorative"
  },
  {
    id: "Glass-Cutter",
    name: "Glass Cutter Diameter",
    image: "images/glass-cutter-diamantor.jpg",
    price: 94.95,
    sku: "DEC002",
    description: "Precision glass cutter ideal for decorative glass work.",
    category: "Decorative"
  },

  // Garden Tools (Now 10 products)
  {
    id: "Garden-Fork",
    name: "Garden Fork Wooden Handle",
    image: "images/garden_fork.jpg",
    price: 210.00,
    sku: "GT002",
    description: "Robust garden fork for digging and turning soil.",
    category: "Garden Tools"
  },
  {
    id: "Spade-Round-Nose",
    name: "Spade Round Nose Fibreglass Handle",
    image: "images/spade_round_nose.jpg",
    price: 195.00,
    sku: "GT003",
    description: "Durable round nose spade for general digging.",
    category: "Garden Tools"
  },
  {
    id: "Rake-Steel",
    name: "Steel Garden Rake 16 Teeth",
    image: "images/steel_rake.jpg",
    price: 140.00,
    sku: "GT004",
    description: "Heavy-duty steel rake for clearing debris and leveling soil.",
    category: "Garden Tools"
  },
  {
    id: "Hedge-Shears",
    name: "Hedge Shears Wavy Blade",
    image: "images/hedge_shears.jpg",
    price: 280.00,
    sku: "GT005",
    description: "Sharp hedge shears for precise trimming of hedges and shrubs.",
    category: "Garden Tools"
  },
  {
    id: "Wheelbarrow-Plastic",
    name: "Plastic Wheelbarrow 65L",
    image: "images/wheelbarrow_plastic.jpg",
    price: 450.00,
    sku: "GT006",
    description: "Lightweight plastic wheelbarrow for garden use.",
    category: "Garden Tools"
  },
  {
    id: "Garden-Gloves-Leather",
    name: "Leather Garden Gloves Large",
    image: "images/garden_gloves.jpg",
    price: 75.00,
    sku: "GT007",
    description: "Durable leather gloves for protecting hands while gardening.",
    category: "Garden Tools"
  },
  {
    id: "Pruning-Shears",
    name: "Bypass Pruning Shears",
    image: "images/pruning_shears.jpg",
    price: 120.00,
    sku: "GT008",
    description: "Essential pruning shears for cutting branches and stems.",
    category: "Garden Tools"
  },
  {
    id: "Watering-Can-10L",
    name: "Plastic Watering Can 10L",
    image: "images/watering_can.jpg",
    price: 90.00,
    sku: "GT009",
    description: "Large capacity watering can for garden irrigation.",
    category: "Garden Tools"
  },
  {
    id: "Garden-Hose-20m",
    name: "Reinforced Garden Hose 20m",
    image: "images/garden_hose.jpg",
    price: 250.00,
    sku: "GT010",
    description: "Durable garden hose for all watering needs.",
    category: "Garden Tools"
  },

  // Builders Tools (Now 10 products)
  {
    id: "Spirit-Level-600mm",
    name: "Spirit Level 600mm",
    image: "images/spirit_level.jpg",
    price: 150.00,
    sku: "BLD002",
    description: "Accurate spirit level for ensuring straight and level surfaces.",
    category: "Builders Tools"
  },
  {
    id: "Measuring-Tape-5m",
    name: "Steel Measuring Tape 5m",
    image: "images/measuring_tape.jpg",
    price: 65.00,
    sku: "BLD003",
    description: "Compact and durable steel measuring tape for construction.",
    category: "Builders Tools"
  },
  {
    id: "Hammer-Claw",
    name: "Claw Hammer Fibreglass Handle",
    image: "images/claw_hammer.jpg",
    price: 110.00,
    sku: "BLD004",
    description: "Standard claw hammer for nailing and prying.",
    category: "Builders Tools"
  },
  {
    id: "Drill-Cordless-18V",
    name: "Cordless Drill 18V with Battery",
    image: "images/cordless_drill.jpg",
    price: 899.00,
    sku: "BLD005",
    description: "Powerful cordless drill for various drilling and screwdriving tasks.",
    category: "Builders Tools"
  },
  {
    id: "Safety-Boots-Size9",
    name: "Safety Boots Steel Toe Size 9",
    image: "images/safety_boots.jpg",
    price: 450.00,
    sku: "BLD006",
    description: "Protective safety boots with steel toe caps for construction sites.",
    category: "Builders Tools"
  },
  {
    id: "Cement-Mixer-140L",
    name: "Electric Cement Mixer 140L",
    image: "images/cement_mixer.jpg",
    price: 2500.00,
    sku: "BLD007",
    description: "Portable electric cement mixer for small to medium jobs.",
    category: "Builders Tools"
  },
  {
    id: "Hand-Saw-Wood",
    name: "Hand Saw for Wood 22 inch",
    image: "images/hand_saw.jpg",
    price: 130.00,
    sku: "BLD008",
    description: "Versatile hand saw for cutting timber and wood panels.",
    category: "Builders Tools"
  },
  {
    id: "Chisel-Set-Wood",
    name: "Wood Chisel Set 3pc",
    image: "images/chisel_set.jpg",
    price: 180.00,
    sku: "BLD009",
    description: "Set of essential wood chisels for carpentry and joinery.",
    category: "Builders Tools"
  },
  {
    id: "Safety-Glasses",
    name: "Clear Safety Glasses",
    image: "images/safety_glasses.jpg",
    price: 35.00,
    sku: "BLD010",
    description: "Lightweight safety glasses for eye protection.",
    category: "Builders Tools"
  },

  // Hand Tools (Now 10 products)
  {
    id: "Screwdriver-Set",
    name: "Screwdriver Set 6pc",
    image: "images/screwdriver_set.jpg",
    price: 120.00,
    sku: "HT002",
    description: "Basic screwdriver set for household and DIY tasks.",
    category: "Hand Tools"
  },
  {
    id: "Adjustable-Spanner",
    name: "Adjustable Spanner 200mm",
    image: "images/adjustable_spanner.jpg",
    price: 90.00,
    sku: "HT003",
    description: "Versatile adjustable spanner for various nut and bolt sizes.",
    category: "Hand Tools"
  },
  {
    id: "Pliers-Combination",
    name: "Combination Pliers 180mm",
    image: "images/combination_pliers.jpg",
    price: 85.00,
    sku: "HT004",
    description: "Multi-purpose combination pliers for gripping, bending, and cutting.",
    category: "Hand Tools"
  },
  {
    id: "Utility-Knife",
    name: "Heavy Duty Utility Knife",
    image: "images/utility_knife.jpg",
    price: 45.00,
    sku: "HT005",
    description: "Retractable utility knife for cutting various materials.",
    category: "Hand Tools"
  },
  {
    id: "Allen-Key-Set",
    name: "Allen Key Set Metric 9pc",
    image: "images/allen_key_set.jpg",
    price: 70.00,
    sku: "HT006",
    description: "Set of metric allen keys for hexagonal fasteners.",
    category: "Hand Tools"
  },
  {
    id: "Hacksaw-Junior",
    name: "Junior Hacksaw with Blade",
    image: "images/junior_hacksaw.jpg",
    price: 60.00,
    sku: "HT007",
    description: "Small hacksaw for cutting metal and plastic.",
    category: "Hand Tools"
  },
  {
    id: "Pipe-Wrench",
    name: "Pipe Wrench 300mm",
    image: "images/pipe_wrench.jpg",
    price: 280.00,
    sku: "HT008",
    description: "Heavy-duty pipe wrench for plumbing tasks.",
    category: "Hand Tools"
  },
  {
    id: "Pop-Rivet-Gun",
    name: "Pop Rivet Gun with Rivets",
    image: "images/pop_rivet_gun.jpg",
    price: 190.00,
    sku: "HT009",
    description: "Tool for fastening materials with pop rivets.",
    category: "Hand Tools"
  },
  {
    id: "Wire-Stripper",
    name: "Automatic Wire Stripper",
    image: "images/wire_stripper.jpg",
    price: 150.00,
    sku: "HT010",
    description: "Tool for quickly and cleanly stripping wire insulation.",
    category: "Hand Tools"
  },

  // Decorative (Now 10 products)
  {
    id: "Picture-Frame-A4",
    name: "Picture Frame A4 Black",
    image: "images/picture_frame.jpg",
    price: 85.00,
    sku: "DEC003",
    description: "Classic A4 size picture frame for photos and art.",
    category: "Decorative"
  },
  {
    id: "Mirror-Wall-Round",
    name: "Round Wall Mirror 60cm",
    image: "images/round_mirror.jpg",
    price: 320.00,
    sku: "DEC004",
    description: "Stylish round wall mirror for living spaces.",
    category: "Decorative"
  },
  {
    id: "Artificial-Plant-Potted",
    name: "Potted Artificial Fiddle Leaf Fig",
    image: "images/artificial_plant.jpg",
    price: 210.00,
    sku: "DEC005",
    description: "Realistic artificial plant for indoor decor with minimal maintenance.",
    category: "Decorative"
  },
  {
    id: "Vase-Ceramic-White",
    name: "Ceramic Vase White Tall",
    image: "images/ceramic_vase.jpg",
    price: 160.00,
    sku: "DEC006",
    description: "Elegant tall white ceramic vase for flowers or standalone decor.",
    category: "Decorative"
  },
  {
    id: "LED-Strip-Lights-5m",
    name: "LED Strip Lights Warm White 5m",
    image: "images/led_strip_lights.jpg",
    price: 190.00,
    sku: "DEC007",
    description: "Flexible LED strip lights for accent lighting and decor.",
    category: "Decorative"
  },
  {
    id: "Decorative-Cushion",
    name: "Decorative Cushion Geometric Pattern",
    image: "images/decorative_cushion.jpg",
    price: 110.00,
    sku: "DEC008",
    description: "Comfortable and stylish cushion to enhance your living space.",
    category: "Decorative"
  },
  {
    id: "Candle-Set-Scented",
    name: "Scented Candle Set Vanilla & Lavender",
    image: "images/scented_candles.jpg",
    price: 95.00,
    sku: "DEC009",
    description: "Set of scented candles for a relaxing ambiance.",
    category: "Decorative"
  },
  {
    id: "Wall-Art-Canvas",
    name: "Abstract Wall Art Canvas 50x70cm",
    image: "images/wall_art_canvas.jpg",
    price: 380.00,
    sku: "DEC010",
    description: "Modern abstract canvas art to elevate your interior design.",
    category: "Decorative"
  }
];