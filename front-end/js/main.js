const { createApp } = Vue

import { getProducts } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            products: [],
            categories: [],
            categoryActive: 18,
            productsFilter: [],
            cart: [],
            cartPrice: 0,
            statusId: "",
            cartString: "",
            yourOrder: "NoOrder",
            mail: "",
            searchId: "",
            searchResult: {},
            comandaItems: [],
            totalComanda: 0,
            errorMsg: "",
            status:"",
        }
    },
    methods: {
        changeScreen(active) {
            this.active = active;
            if (active == 0) {
                this.cart = [];
                this.yourOrder = "NoOrder";
                this.cartPrice = 0;
                this.comandaItems=[];
                getProducts().then(data => {

                    this.products = data.items; // Datos de la tabla "items"
                    this.productsFilter= this.products;
        
                });
            }

        },
        addToCart(index) {

            let objetoExistente = this.cart.find(item => item.id === this.productsFilter[index].id)
            if (objetoExistente) {
                if (this.productsFilter[index].stock > objetoExistente.amount) {
                    this.cartPrice += this.productsFilter[index].price;
                    objetoExistente.amount++;
                }

            } else {
                this.cart.push({
                    id: this.productsFilter[index].id,
                    itemName: this.productsFilter[index].itemName,
                    price: this.productsFilter[index].price,
                    amount: 1,
                });
                this.cartPrice += this.productsFilter[index].price;
            }
            this.cartString = JSON.stringify(this.cart);
        },
        calcularCartTotal() {
            var total = 0;
            this.cart.forEach(element => {
                total += element.amount;
            });
            return total;
        },
        deleteFromCart(index) {
            let eliminar = -1;
            let objetoExistente = this.cart.find(item => item.id === this.products[index].id)
            if (objetoExistente) {


                if (objetoExistente.amount == 1) {
                    for (let index = 0; index < this.cart.length; index++) {
                        if (objetoExistente.id == this.cart[index].id) {
                            eliminar = index;
                        }
                    }
                    if (eliminar != -1) {
                        this.cart.splice(eliminar, 1);
                        this.cartPrice -= objetoExistente.price;
                    }
                } else {
                    objetoExistente.amount--;
                    this.cartPrice -= objetoExistente.price;
                }
            }
            this.cartString = JSON.stringify(this.cart);

        },
        Quantity(index) {
            let objetoExistente = this.cart.find(item => item.id === this.productsFilter[index].id);
            if (objetoExistente) {
                return objetoExistente.amount
            }
            return 0;
        },

        async searchOrderStatus() {
            if (this.searchId) {
                const response = await fetch(`http://127.0.0.1:8000/api/order/${this.searchId}`);
                if (response.ok) {
                    const data = await response.json();
                    
                    this.searchResult = data;


                    // Parsea la cadena JSON en jsonOrder
                    const jsonOrder = JSON.parse(this.searchResult.jsonOrder);
                    let totalPreuComanda = 0
                    this.status=jsonOrder.status;
                    this.comandaItems = jsonOrder.order;

                    // Itera a través de los elementos y muestra los nombres
                    for (const item of jsonOrder.order) {
                        

                        // Calcula el precio total de este elemento
                        const precioItem = item.price * item.amount;

                        // Agrega el precio del elemento al precio total
                        totalPreuComanda += item.price * item.amount;
                        this.totalComanda = totalPreuComanda;
                    }
                }
            }

        },
        mostrarOrdre() {
            let object = this.products.find(item => item.id === this.statusId);
            return object.itemName;
        },
        enviarForm() {
            const requestBody = {
                jsonOrder: `{"order":` + this.cartString + `}`,

                totalPrice: parseFloat((this.cartPrice).toFixed(2)),
                mail: this.mail,
            };

            fetch('http://127.0.0.1:8000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            })
                .then(response => response.json())
                .then(data => {
                    this.yourOrder = data["id"];
                    this.errorMsg = data["errorMsg"];
                    this.changeScreen(data["errorCode"])

                })
        },
        changeCategory(id) {
            this.productsFilter=[];

            if (id == 0) {
                for (let i = 0; i < this.products.length; i++) {
                    this.productsFilter.push(this.products[i]);
                }
            } else {
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].itemCategory == id) {
                        this.productsFilter.push(this.products[i]);

                    }
                }
            }
        }
    },
    created() {
        getProducts().then(data => {

            this.products = data.items; // Datos de la tabla "items"
            this.categories = data.categories; // Datos de la tabla "categories"
            this.productsFilter= this.products;

        });
    }

   


}).mount('#app')