// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// - Una función generadora de índices pares automáticos

function returnTrue() {
  return true;
}
console.log(returnTrue);

const greeting = new Promise((resolve, reject) => {
  if (true) {
    resolve();
  } else {
    reject();
  }
});

greeting
  .then(() =>
    setTimeout(() => {
      console.log('soy una promesa');
    }, 5000)
  )
  .catch((error) => console.error(error));

function* pairGenerator() {
  let pair = 0;
  while (true) {
    pair += 2;
    yield pair;
    if (pair === 20) {
      return pair;
    }
  }
}

const pair = pairGenerator();

console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
console.log(pair.next().value);
