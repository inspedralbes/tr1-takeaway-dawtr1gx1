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
           
            let objetoExistente = this.cart.find(item =>item.id === this.products[index].id)
            if (objetoExistente) {
                this.cartPrice += this.products[index].price;
                objetoExistente.amount++;
            } else {
              this.cart.push({
                id: this.products[index].id,
                itemName: this.products[index].itemName,
                price: this.products[index].price,
                amount: 1,
               });
               this.cartPrice+=this.products[index].price;
            }
            console.log(this.cart);
        },
        calcularCartTotal(){
            var total=0;
            this.cart.forEach(element => {
                total+=element.amount;
            });
            return total;
        }
    },
    created() {
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')