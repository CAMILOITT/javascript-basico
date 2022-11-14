// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const nameFamily = ['Ciro', 'Elvira', 'Johana', 'Camilo'];

const Family = new Set(nameFamily);

Family.add('Camilo');

console.log(Family);

Family.add('Javascript');

console.log(Family);
