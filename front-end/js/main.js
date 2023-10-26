const { createApp } = Vue

import { getProducts } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            products: [],
            cart: [],
            cartPrice: 0,

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

            let objetoExistente = this.cart.find(item => item.id === this.products[index].id)
            if (objetoExistente) {
                
                
                if (objetoExistente.amount==0) {
                    this.cart.forEach(item => {
                        if (objetoExistente.id == item.id) {
                            let index = item.id;
                        }
                    })
                    this.cart.splice(index, 1);
                    this.cartPrice -= objetoExistente.price;
                } else{
                    objetoExistente.amount--;
                    this.cartPrice -= objetoExistente.price;
                }
            }

        },
        Quantity(index) {
            let objetoExistente = this.cart.find(item => item.id === this.products[index].id);
            if (objetoExistente) {
                return objetoExistente.amount
            }
            return 0;
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')