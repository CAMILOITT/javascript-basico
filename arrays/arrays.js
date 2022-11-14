// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const shoppingList = ['cebolla', 'carne', 'arroz', 'sal', 'azúcar'];

console.log(`lista de compras: ${shoppingList}`);

shoppingList.push('Aceite de Girasol');
console.log(`añadiendo "Aceite de Girasol": ${shoppingList}`);

shoppingList.pop('Aceite de Girasol');
console.log(`eliminando "Aceite de Girasol": ${shoppingList}`);

const movieList = [
  {
    title: 'Iron Man: el hombre de hierro',
    director: 'Jon Favreau',
    date: 2008,
  },
  {
    title: 'Avengers - End game',
    director: ['Anthony Russo', 'Joe Russo'],
    date: 2019,
  },
  {
    title: 'Thor: Ragnarok',
    director: 'Taika Waititi',
    date: 2017,
  },
];

console.log('array de películas:');
console.log(movieList);

const movie = movieList.filter((element) => element.date < 2010);

console.log('lista de películas antes del 2010:');
console.log(movie);

const directorList = movieList.map((element) => element.director);
console.log(`lista de directores de cada película: ${directorList}`);
const titleList = movieList.map((element) => element.title);
console.log(`lista de títulos de películas: ${titleList}`);
const directorTitleList = directorList.concat(titleList);
console.log(
  `uniendo la lista de directores y películas con .concat: ${directorTitleList}`
);
const directorTitleList2 = [...directorList, ...titleList];
console.log(
  `uniendo la lista de directores y películas con spread operator: ${directorTitleList2}`
);
