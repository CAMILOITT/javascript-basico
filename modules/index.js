// Crea un nuevo proyecto de Node

import chalk from 'chalk';
import { multiplicacion, suma } from './controllers.js';

// - Configura el proyecto para utilizar los módulos de ES6

// - Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)

// - En el entrypoint index.js, importa el módulo controller.js

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

// - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde

const configChalk = chalk.bold.bgBlue

const suma1 = suma(1, 2);
const suma2 = suma(4, 5);

const result = multiplicacion(suma1, suma2);

console.log(configChalk(result));
