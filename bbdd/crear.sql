/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `fastbite`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de la taula `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageRoute` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `itemCategory` int (11) DEFAULT NULL,	
  `sale` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`) -- Definir `id` como clave primaria
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de la taula `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jsonOrder` varchar(1000) DEFAULT NULL,
  `totalprice` int(255) DEFAULT NULL, 
  `status` enum('rebut','preparacio','recollir en botiga') DEFAULT 'rebut',
  PRIMARY KEY (`id`) -- Definir `id` como clave primaria
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

COMMIT;
