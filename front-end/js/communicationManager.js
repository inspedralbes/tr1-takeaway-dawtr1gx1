export async function getProducts() {
    let response= await fetch("http://127.0.0.1:8000/api/dishes");
    let productes = await response.json();
    console.log(productes);
    return productes;
};
