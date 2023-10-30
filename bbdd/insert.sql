INSERT INTO `categories` (`id`, `description`) VALUES
(1, 'Electrónica'),
(2, 'Ropa'),
(3, 'Alimentos'),
(4, 'Hogar');

INSERT INTO `items` (`id`, `itemName`, `description`, `imageRoute`, `price`, `stock`, `sale`) VALUES
(1, 'Smartphone', 'Teléfono inteligente', 'images/smartphone.jpg', 499, 50, 1),
(2, 'Camiseta', 'Camiseta de algodón', 'images/camiseta.jpg', 19, 100, 0),
(3, 'Manzanas', 'Manzanas frescas', 'images/apples.jpg', 1, 200, 1),
(4, 'Sofá', 'Sofá de cuero', 'images/sofa.jpg', 799, 10, 0);


INSERT INTO `orders` (`id`, `jsonOrder`, `status`) VALUES
(1, '{"items": [1, 3], "total": 500}', 'rebut'),
(2, '{"items": [2, 4], "total": 818}', 'preparacio'),
(3, '{"items": [1, 2, 3], "total": 519}', 'recollir en botiga');