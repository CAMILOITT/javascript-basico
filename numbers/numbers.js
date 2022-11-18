// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

const height = 1.7;
const weight = 50.7;

// altura
const heightCentimeter = 1.7 * 100;
const heightMeters = 1.7;
const heightMetersUp = Math.ceil(height);

//  peso
const weightKilograms = weight;
const weightKilogramsUp = Math.floor(weight);

const maxValueJs = Number.MAX_VALUE;
// altura
console.log(`altura: ${height}cm`);
console.log(`altura en centímetros: ${heightCentimeter}cm`);
console.log(`altura en metros: ${heightMeters}m`);
console.log(`altura en metros redondeada hacia arriba: ${heightMetersUp}m`);

// peso
console.log(`peso en kilogramos: ${weightKilograms}kg`);
console.log(`peso en kilogramos redondeado hacia bajo: ${weightKilogramsUp}kg`);

console.log(
  `el máximo valor que se puede obtener en Javascript + 1 = ${maxValueJs}`
);
