export async function getProducts() {
  let items = [];
  let categories = [];

  const itemsEcoded = await fetch('http://prefastbites.daw.inspedralbes.cat/laravel/apiProductes/public/api/dishes');
  items = await itemsEcoded.json();
  const categoriesEcoded = await fetch('http://prefastbites.daw.inspedralbes.cat/laravel/apiProductes/public/api/categories');
  categories = await categoriesEcoded.json();

  return { items, categories };
}






