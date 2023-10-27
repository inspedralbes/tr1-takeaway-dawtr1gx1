    INSERT INTO `categories` (`description`) VALUES
    ('Electrónica'),
    ('Ropa'),
    ('Alimentos'),
    ('Hogar');

    INSERT INTO `items` (`itemName`, `description`, `imageRoute`, `price`, `stock`, `sale`) VALUES
    ('Smartphone', 'Teléfono inteligente', 'images/smartphone.jpg', 499, 50, 1),
    ('Camiseta', 'Camiseta de algodón', 'images/camiseta.jpg', 19, 100, 0),
    ('Manzanas', 'Manzanas frescas', 'images/apples.jpg', 1, 200, 1),
    ('Sofá', 'Sofá de cuero', 'images/sofa.jpg', 799, 10, 0);


    INSERT INTO `orders` (`id`, `jsonOrder`, `status`) VALUES
    (1, '[{"id": 1, "itemName": "Hamburguesa", "price": 7.99, "amount": 2}, {"id": 3, "itemName": "Arros treDelicias", "price": 9.99, "amount": 1}]', 'rebut'),
    (2, '[{"id": 2, "itemName": "Sopa", "price": 12.34, "amount": 4}, {"id": 4, "itemName": "Yakisoba", "price": 5.67, "amount": 3}]', 'preparacio'),
    (3, '[{"id": 1, "itemName": "Hamburguesa", "price": 7.99, "amount": 1}, {"id": 2, "itemName": "Pizza", "price": 9.99, "amount": 1}, {"id": 3, "itemName": "Sashimi", "price": 45.34, "amount": 2}]', 'recollir en botiga');

