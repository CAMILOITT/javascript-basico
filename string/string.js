/** @type {string} */

const name = 'Camilo';

/** @type {string} */
const lastName = 'Torres';

const student = `${name} ${lastName}`;
const studentUpperCase = student.toUpperCase();
const studentLowerCase = student.toLowerCase();

const longStudent = student.length;

const firstLetterName = name.charAt(0);
const lastLetterLastName = lastName.at(-1);

const students = name + lastName;
const BooleanEstudiante = student.includes(name);

console.log(`nombre: ${name}`);
console.log(`apellido: ${lastName}`);
console.log(`nombre y apellido con espacios: ${student}`);
console.log(`nombre y apellido en mayúscula: ${studentUpperCase}`);
console.log(`nombre y apellido en minúscula: ${studentLowerCase}`);
console.log(`longitud de caracteres de estudiante: ${longStudent}`);
console.log(`primera letra de nombre: ${firstLetterName}`);
console.log(`ultima letra de apellido: ${lastLetterLastName}`);
console.log(`nombre y apellido sin espacios: ${students}`);
console.log(
  `existe esta palabra en el nombre o apellido:  ${BooleanEstudiante}`
);
