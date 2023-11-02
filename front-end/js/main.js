const { createApp } = Vue

import { getProducts } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            products: [],
            cart: [],
            cartPrice: 0,
            statusId: "",
            cartString: "",
            yourOrder: "NoOrder",
            mail: "",
            searchId: "",
            searchResult: null,
        }
    },
    methods: {
        changeScreen(active) {
            this.active = active;
            if (active == 0) {
                this.cart = [];
                this.yourOrder = "NoOrder";
                this.cartPrice = 0;
            }

        },
        addToCart(index) {

            let objetoExistente = this.cart.find(item => item.id === this.products[index].id)
            if (objetoExistente) {
                if (this.products[index].stock > objetoExistente.amount) {
                    console.log(this.products[index].stock);
                    this.cartPrice += this.products[index].price;
                    objetoExistente.amount++;
                }

            } else {
                this.cart.push({
                    id: this.products[index].id,
                    itemName: this.products[index].itemName,
                    price: this.products[index].price,
                    amount: 1,
                });
                this.cartPrice += this.products[index].price;
            }
            this.cartString = JSON.stringify(this.cart);
            console.log(this.cart);
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
                        console.log(index)
                        if (objetoExistente.id == this.cart[index].id) {
                            eliminar = index;
                            console.log(eliminar)
                        }
                    }
                    console.log(eliminar);
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
            let objetoExistente = this.cart.find(item => item.id === this.products[index].id);
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

                    // Asignar la respuesta de la API a searchResult
                    this.searchResult = data;

                    // Calcular el costo total de la comanda sin usar reduce
                    let totalCost = 0;

                    if (Array.isArray(this.searchResult.order)) {
                        for (const item of this.searchResult.order) {
                            if (item.price && item.amount) {
                                totalCost += item.price * item.amount;
                            }
                        }
                    }

                    this.totalCost = totalCost;
                    console.log(this.totalCost);
                    console.log(this.searchResult);

                } else {
                    console.error('Error al obtener datos');
                    this.searchResult = null;
                    this.totalCost = 0;
                }
            } else {
                this.searchResult = null;
                this.totalCost = 0;
            }
        },
        mostrarOrdre() {
            let object = this.products.find(item => item.id === this.statusId);
            console.log(object);
            return object.itemName;
        },
        enviarForm() {

            const requestBody = {
                jsonOrder: `{"order":`+this.cartString+`}`,
                totalPrice: parseFloat((this.cartPrice).toFixed(2)),
                mail: this.mail,
            };
            console.log(requestBody);
            fetch('http://127.0.0.1:8000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.yourOrder = data.id;
                }).then(this.changeScreen(3))
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
            console.log(this.products);

        });
    }


}).mount('#app')