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
            
        }
    },
    created(){
        getProducts().then(data => {
            this.products = data;
        });
    }
}).mount('#app')