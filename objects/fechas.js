// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const dateNow = new Date();
console.log(dateNow.toLocaleDateString());

const DateOfdBirth = new Date(2002, 10, 19);
console.log(DateOfdBirth.toLocaleDateString());

const comparisonDate = dateNow.getTime() > DateOfdBirth.getTime();
console.log(comparisonDate);

const dayDateOfdBirth = DateOfdBirth.getDate();
console.log(dayDateOfdBirth);

const monthDateOfdBirth = DateOfdBirth.getMonth() + 1;
console.log(monthDateOfdBirth);

const yearDateOfdBirth = DateOfdBirth.getFullYear();
console.log(yearDateOfdBirth);
