-- Insert categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('CNC Machines', 'cnc-machines', 'Computer Numerical Control machines for precision manufacturing', '/modern-cnc-machine-industrial-equipment.jpg'),
('Welding Equipment', 'welding-equipment', 'Professional welding tools and equipment', '/robotic-welding-arm-industrial-automation.jpg'),
('Hydraulic Systems', 'hydraulic-systems', 'Hydraulic presses and power systems', '/hydraulic-press-industrial-machinery.jpg'),
('Construction Equipment', 'construction-equipment', 'Heavy machinery for construction projects', '/large-yellow-excavator.jpg'),
('Industrial Tools', 'industrial-tools', 'Professional grade industrial tools and equipment', '/modern-industrial-machinery-factory-floor-with-adv.jpg'),
('Power Generation', 'power-generation', 'Generators and power equipment', '/industrial-generator.jpg')
ON CONFLICT (slug) DO NOTHING;
