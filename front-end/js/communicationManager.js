export async function getProducts() {
    let datosEncoded = [
        {
            "id": 1,
            "itemName": "Hamburguesa Clásica",
            "description": "Una deliciosa hamburguesa clásica con carne de res, lechuga, tomate y salsa especial.",
            "price": 7.99,
            "stock": 5,
            "category": "Comida Rápida",
            "img": "./img/products/hamburguesaClasica.webp"
        },
        {
            "id": 2,
            "itemName": "Pizza Pepperoni",
            "description": "Pizza con pepperoni, queso mozzarella y salsa de tomate.",
            "price": 8.99,
            "stock": 30,
            "category": "Comida Rápida",
            "img": "./img/products/pizzaPeperoni.webp"
        },
        {
            "id": 3,
            "itemName": "Pollo Frito",
            "description": "Crujiente pollo frito con papas fritas y salsa de mostaza.",
            "price": 6.49,
            "stock": 40,
            "category": "Comida Rápida",
            "img": "./img/products/polloFrito.jpg"
        },
        {
            "id": 4,
            "itemName": "Ensalada César",
            "description": "Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.",
            "price": 4.99,
            "stock": 20,
            "category": "Ensaladas",
            "img": "./img/products/ensaladaCesar.jpg"
        },
        {
            "id": 5,
            "itemName": "Tacos de Carne Asada",
            "price": 7.99,
            "stock": 25,
            "description": "Tacos rellenos de carne asada, cebolla, cilantro y salsa.",
            "category": "Comida Mexicana",
            "img": "./img/products/tacosCarneAsada.jpg"
        },
        {
            "id": 6,
            "itemName": "Sushi Variado",
            "price": 12.99,
            "stock": 15,
            "description": "Una variedad de sushi fresco, incluyendo nigiri, sashimi y rollos.",
            "category": "Sushi",
            "img": "./img/products/sushi.jpg"
        },
        {
            "id": 7,
            "itemName": "Alitas de Pollo Picantes",
            "price": 9.49,
            "stock": 30,
            "description": "Alitas de pollo picantes con salsa de barbacoa.",
            "category": "Aperitivos",
            "img": "./img/products/alitasPicantes.jpg"
        },
        {
            "id": 8,
            "itemName": "Pasta Alfredo",
            "price": 6.99,
            "stock": 25,
            "description": "Pasta con salsa Alfredo, pollo a la parrilla y queso parmesano.",
            "category": "Pasta",
            "img": "./img/products/pastaAlfredo.webp"
        },
        {
            "id": 9,
            "itemName": "Burrito de Pollo",
            "price": 8.49,
            "stock": 20,
            "description": "Burrito grande relleno de pollo, frijoles, arroz y salsa.",
            "category": "Comida Mexicana",
            "img": "./img/products/burritoPollo.jpg"
        },
        {
            "id": 10,
            "itemName": "Ensalada de Frutas",
            "price": 3.99,
            "stock": 30,
            "description": "Ensalada fresca de frutas variadas con miel y yogur.",
            "category": "Ensaladas",
            "img": "./img/products/ensaladaFrutas.jpg"
        },
        {
            "id": 11,
            "itemName": "Tarta de Chocolate",
            "price": 4.99,
            "stock": 15,
            "description": "Deliciosa tarta de chocolate con crema batida y salsa de caramelo.",
            "category": "Postres",
            "img": "./img/products/tartaChocolate.jpg"
        },
        {
            "id": 12,
            "itemName": "Sándwich de Pavo",
            "price": 5.49,
            "stock": 35,
            "description": "Sándwich de pavo con lechuga, tomate y mostaza.",
            "category": "Sándwiches",
            "img": "./img/products/sandwichPavo.jpg"
        },
        {
            "id": 13,
            "itemName": "Arroz Frito con Vegetales",
            "price": 7.99,
            "stock": 20,
            "description": "Arroz frito con vegetales y tu elección de pollo, cerdo o camarones.",
            "category": "Comida Asiática",
            "img": "./img/products/ArrozFrito.jpg"
        },
        {
            "id": 14,
            "itemName": "Batido de Fresa",
            "price": 3.49,
            "stock": 40,
            "description": "Batido refrescante de fresas con crema batida.",
            "category": "Bebidas",
            "img": "./img/products/batidoFresas.jpg"
        },
        {
            "id": 15,
            "itemName": "Hot Dog Clásico",
            "price": 4.29,
            "stock": 30,
            "description": "Un hot dog clásico con mostaza, ketchup y cebolla.",
            "category": "Comida Rápida",
            "img": "./img/products/hotDog.jpg"
        },
        {
            "id": 16,
            "itemName": "Ensalada Griega",
            "price": 5.99,
            "stock": 25,
            "description": "Ensalada con pepino, tomate, aceitunas, queso feta y aderezo griego.",
            "category": "Ensaladas",
            "img": "./img/products/ensaladaGriega.jpg"
        },
        {
            "id": 17,
            "itemName": "Tortilla de Patata",
            "price": 6.99,
            "stock": 20,
            "description": "Tortilla de patata española con cebolla y papas.",
            "category": "Comida Española",
            "img": "./img/products/tortillaPatataEspañola.jpg"
        },
        {
            "id": 18,
            "itemName": "Pollo Teriyaki",
            "price": 7.99,
            "stock": 20,
            "description": "Pollo glaseado con salsa teriyaki, servido con arroz y vegetales.",
            "category": "Comida Asiática",
            "img": "./img/products/polloTeriyaki.webp"
        },
        {
            "id": 19,
            "itemName": "Nachos con Queso",
            "price": 4.99,
            "stock": 30,
            "description": "Nachos con queso fundido y jalapeños.",
            "category": "Aperitivos",
            "img": "./img/products/nachosConQueso.webp"
        },
        {
            "id": 20,
            "itemName": "Té Helado de Durazno",
            "price": 2.99,
            "stock": 40,
            "description": "Té helado refrescante con sabor a durazno.",
            "category": "Bebidas",
            "img": "./img/products/téHelado.webp"
        }
    ]  
    
  
    let response = await datosEncoded;
      return response;
  }
  