// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const information = {
  name: 'Camilo',
  lastName: 'Torres',
  age: 19,
  height: 170,
  isDev: true,
};
console.log(information);

const { age } = information;
console.log(age);

const bestFriend = {
  name: 'Kevin',
  lastName: 'Cuzco',
  age: 20,
  height: 170,
  isDev: false,
};
console.log(bestFriend);

const bestFriend2 = {
  name: 'Bryan',
  lastName: 'Veintimilla',
  age: 21,
  height: 180,
  isDev: false,
};
console.log(bestFriend2);

const listInformation = [bestFriend2, bestFriend, information];
console.log(listInformation);

listInformation.sort((a, b) => a.age - b.age);
console.log(listInformation);
