// - Crea un fichero index.js
// - Integra el fichero index.js en el html
// - En el fichero index.js:
// - Crea una variable con tu nombre
// - Crea una variable con tu apellido
// - Crea un objeto con tu nombre y tu apellido
// - Almacena el objeto anterior en la SessionStorage

// - Almacena el objeto anterior en la LocalStorage

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

// data
const name = 'Camilo';
const lastName = 'Torres';

const dev = { name: name, lastName: lastName };

const devObj = JSON.stringify(dev);

//! sessionStorage
sessionStorage.setItem('user', devObj);
const session = JSON.parse(sessionStorage.getItem('user'));
console.log(session);

//! localStorage
localStorage.setItem('superUser', devObj);
const local = JSON.parse(localStorage.getItem('superUser'));

console.log(local);

//! cookie
const expireTime = new Date().getMinutes();
if (expireTime > 58) {
  expireTime = 2;
}

console.log((document.cookie = `client=${devObj};expires= ${expireTime + 2} `));

