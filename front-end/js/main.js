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
        addToCart(id) {
            this.cart.push(this.products[id]);
            console.log(this.cart);

            this.cartPrice += this.products[id].price;
            console.log(this.cartPrice);
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')