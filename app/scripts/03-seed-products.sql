-- Insert sample products
INSERT INTO products (
  name, slug, description, short_description, price, compare_price, 
  sku, category_id, brand, model, condition, warranty, status, featured
) VALUES
(
  'HAAS VF-2 CNC Machining Center',
  'haas-vf-2-cnc-machining-center',
  'The HAAS VF-2 is a high-performance vertical machining center designed for precision manufacturing. Features advanced control systems, automatic tool changer, and exceptional accuracy for complex machining operations.',
  'High-performance vertical machining center with advanced control systems',
  89999.00,
  95999.00,
  'HAAS-VF2-001',
  1,
  'HAAS',
  'VF-2',
  'new',
  '2 years',
  'active',
  true
),
(
  'Lincoln Electric Power MIG 350MP',
  'lincoln-electric-power-mig-350mp',
  'Professional multi-process welder capable of MIG, TIG, and Stick welding. Features advanced waveform control technology and digital display for precise welding control.',
  'Multi-process welder with advanced waveform control',
  4299.00,
  4799.00,
  'LIN-MIG350-001',
  2,
  'Lincoln Electric',
  'Power MIG 350MP',
  'new',
  '3 years',
  'active',
  true
),
(
  'Hydraulic Press 100 Ton Capacity',
  'hydraulic-press-100-ton-capacity',
  'Heavy-duty hydraulic press with 100-ton capacity. Ideal for forming, stamping, and pressing operations. Features precision controls and safety systems.',
  'Heavy-duty 100-ton hydraulic press for industrial operations',
  12999.00,
  14999.00,
  'HYD-100T-001',
  3,
  'Industrial Hydraulics',
  'HP-100',
  'new',
  '1 year',
  'active',
  true
),
(
  'CAT 320 Excavator',
  'cat-320-excavator',
  'Caterpillar 320 hydraulic excavator with advanced hydraulic system and fuel-efficient engine. Perfect for construction and earthmoving applications.',
  'Reliable hydraulic excavator for construction projects',
  125000.00,
  135000.00,
  'CAT-320-001',
  4,
  'Caterpillar',
  '320',
  'used',
  '6 months',
  'active',
  false
),
(
  'Miller Dynasty 350 TIG Welder',
  'miller-dynasty-350-tig-welder',
  'Advanced TIG welding system with AC/DC capabilities. Features precise arc control and advanced waveform technology for superior weld quality.',
  'Professional TIG welding system with AC/DC capabilities',
  8500.00,
  9200.00,
  'MIL-DYN350-001',
  2,
  'Miller',
  'Dynasty 350',
  'new',
  '3 years',
  'active',
  false
),
(
  'Generac 50kW Industrial Generator',
  'generac-50kw-industrial-generator',
  'Reliable 50kW industrial generator with automatic transfer switch. Natural gas or propane fuel options available. Perfect for backup power applications.',
  'Reliable 50kW backup power generator',
  15999.00,
  17500.00,
  'GEN-50KW-001',
  6,
  'Generac',
  'RG050',
  'new',
  '2 years',
  'active',
  false
)
ON CONFLICT (slug) DO NOTHING;

-- Insert product images
INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES
(1, '/modern-cnc-machine-industrial-equipment.jpg', 'HAAS VF-2 CNC Machining Center', 1),
(2, '/robotic-welding-arm-industrial-automation.jpg', 'Lincoln Electric Power MIG 350MP', 1),
(3, '/hydraulic-press-industrial-machinery.jpg', 'Hydraulic Press 100 Ton', 1),
(4, '/large-yellow-excavator.jpg', 'CAT 320 Excavator', 1),
(5, '/robotic-welding-arm-industrial-automation.jpg', 'Miller Dynasty 350 TIG Welder', 1),
(6, '/industrial-generator.jpg', 'Generac 50kW Generator', 1);

-- Insert product specifications
INSERT INTO product_specifications (product_id, spec_name, spec_value, sort_order) VALUES
-- HAAS VF-2 specs
(1, 'X-Axis Travel', '30 inches', 1),
(1, 'Y-Axis Travel', '16 inches', 2),
(1, 'Z-Axis Travel', '20 inches', 3),
(1, 'Spindle Speed', '8,100 RPM', 4),
(1, 'Tool Capacity', '20 tools', 5),

-- Lincoln MIG specs
(2, 'Output Range', '25-350 Amps', 1),
(2, 'Input Voltage', '208-575V', 2),
(2, 'Wire Diameter', '0.023-0.045 inches', 3),
(2, 'Duty Cycle', '60% at 350A', 4),

-- Hydraulic Press specs
(3, 'Maximum Force', '100 tons', 1),
(3, 'Bed Size', '24 x 36 inches', 2),
(3, 'Daylight Opening', '36 inches', 3),
(3, 'Ram Stroke', '12 inches', 4),

-- CAT 320 specs
(4, 'Operating Weight', '45,200 lbs', 1),
(4, 'Engine Power', '174 HP', 2),
(4, 'Bucket Capacity', '1.2 cubic yards', 3),
(4, 'Max Dig Depth', '21.3 feet', 4),

-- Miller Dynasty specs
(5, 'Output Range', '5-350 Amps', 1),
(5, 'Input Voltage', '208-575V', 2),
(5, 'Duty Cycle', '60% at 350A', 3),
(5, 'Process', 'TIG/Stick', 4),

-- Generator specs
(6, 'Power Output', '50 kW', 1),
(6, 'Fuel Type', 'Natural Gas/Propane', 2),
(6, 'Voltage', '120/240V', 3),
(6, 'Frequency', '60 Hz', 4);
