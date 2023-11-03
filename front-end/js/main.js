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
            searchResult: null,
            comandaItems: [],
            totalComanda: 0,
        }
    },
    methods: {
        changeScreen(active) {
            this.active = active;
            if(active==0){
                this.cart=[];
                this.yourOrder="NoOrder";
                this.cartPrice= 0;

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
                    this.searchResult = data;
                    console.log(this.searchResult);

                    console.log(this.searchResult[0].jsonOrder);

                    // Parsea la cadena JSON en jsonOrder
                    const jsonOrder = JSON.parse(this.searchResult[0].jsonOrder);
                    let totalPreuComanda = 0;

                    this.comandaItems = jsonOrder;

                    // Itera a través de los elementos y muestra los nombres
                    for (const item of jsonOrder) {
                        console.log(item.itemName);
                        console.log(item.amount);
                        console.log(item.price);
                        
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
            console.log(object);
            return object.itemName;
        },

        enviarForm() {
            const requestBody = {
                jsonOrder: `{"order":` + this.cartString + `}`,

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
                    this.yourOrder=data.id;
                }).then(this.changeScreen(3))
        },
        changeCategory(id){
            this.productsFilter.splice(0, this.productsFilter.length);

            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].itemCategory == id) {
                    this.productsFilter.push(this.products[i]);

                }
            } else {
                this.searchResult = null;
                this.totalCost = 0;
            }
        }
    },
    created() {
        getProducts().then(data => {

            this.products = data.items; // Datos de la tabla "items"
            this.categories = data.categories; // Datos de la tabla "categories"
            console.log(this.items);
            console.log(this.categories);

        });
    }


}).mount('#app')