const { createApp } = Vue

import { getProducts } from "./communicationManager.js";

createApp({
    data() {
        return {
            active: 0,
            products: [],
            carrito: [],
            precioCarrito: 0,
        }
    },
    methods: {
        changeScreen(active){
            this.active = active;
            
        },
        añadirCarrito(id){
            this.carrito.push(this.products[id]);
            console.log(this.carrito);

            this.precioCarrito += this.products[id].price;
            console.log(this.precioCarrito);
        }
    },
    created(){
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')