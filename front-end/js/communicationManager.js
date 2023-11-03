export async function getProducts() {
  let items = [];
  let categories = [];

  const itemsEcoded = await fetch('http://127.0.0.1:8000/api/dishes');
  items = await itemsEcoded.json();

  const categoriesEcoded = await fetch('http://127.0.0.1:8000/api/categories');
  categories = await categoriesEcoded.json();

  return { items, categories };
}






