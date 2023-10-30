INSERT INTO `categories` (`description`) VALUES
('Pasta'),
('Arros'),
('Sushi'),
('Amanides');

INSERT INTO `items` (`itemName`, `description`, `price`, `stock`, `sale`, `itemCategory`)
VALUES
('Hamburguesa', 'Pasta', 7.99, 50, 1, '1'),
('Arros tres Delicies', 'Arros', 9.99, 100, 0, '5'),
('Sopa', 'Sushi', 12.34, 50, 0, '7'),
('Yakisoba', 'Amanides', 5.67, 30, 1, '2');

INSERT INTO `orders` (`id`, `jsonOrder`, `status`) VALUES
(1, '[{"id": 1, "itemName": "Hamburguesa", "price": 7.99, "amount": 2}, {"id": 3, "itemName": "Arros treDelicies", "price": 9.99, "amount": 1}]', 'rebut'),
(2, '[{"id": 2, "itemName": "Sopa", "price": 12.34, "amount": 4}, {"id": 4, "itemName": "Yakisoba", "price": 5.67, "amount": 3}]', 'preparacio'),
(3, '[{"id": 1, "itemName": "Hamburguesa", "price": 7.99, "amount": 1}, {"id": 2, "itemName": "Pizza", "price": 9.99, "amount": 1}, {"id": 3, "itemName": "Sashimi", "price": 45.34, "amount": 2}]', 'recollir en botiga');
