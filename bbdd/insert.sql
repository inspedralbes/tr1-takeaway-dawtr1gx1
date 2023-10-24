
INSERT INTO `category` (`categoryId`, `description`)
VALUES
  (1, 'Electrónica'),
  (2, 'Ropa'),
  (3, 'Hogar'),
  (4, 'Deportes');


INSERT INTO `comands` (`IDcomands`)
VALUES
  (101),
  (102),
  (103);


INSERT INTO `products` (`IDProduct`, `NameProduct`, `Price`, `Stock`)
VALUES
  (201, 'Teléfono móvil', 500, 10),
  (202, 'Camiseta', 20, 100),
  (203, 'Sofá', 400, 5),
  (204, 'Balón de fútbol', 15, 50);

COMMIT;
