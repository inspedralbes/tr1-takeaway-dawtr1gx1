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
            this.cart.push(this.products[index]);
            console.log(this.cart);

            this.cartPrice += this.products[index].price;
            console.log(this.cartPrice);

            let objetoExistente = this.cart.find(item =>item.id === this.productes[index].id)
            if (objetoExistente) {
                this.cartPrice += this.products[index].price;
                this.cart[index].amount++;
            } else {
              this.cart[this.comprat.length] = {
                id: this.products[index].id,
                Title: this.products[index].Title,
                preu: this.products[index].preu,
                amount: 1,
               };
               this.totalCompra+=this.productes[index].preu;
            }
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')