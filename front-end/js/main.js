const { createApp } = Vue

import { getProducts } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            products: [],
            cart: [],
            cartPrice: 0,
            cartString: ""

        }
    },
    methods: {
        changeScreen(active) {
            this.active = active;

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
        enviarForm() {
            const requestBody = {
                jsonOrder: this.cartString,
                totalPrice: this.calcularCartTotal()
              };
            fetch('http://127.0.0.1:8000/api/order', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/JSON'
                },
                body: requestBody,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                }).then(changeScreen(3))
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
            console.log(this.products);

        });
    }


}).mount('#app')