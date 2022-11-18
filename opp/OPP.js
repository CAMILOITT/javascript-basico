// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Students {
  #name;
  #course;
  constructor(name, course) {
    this.#name = name;
    this.#course = course;
  }

  set setName(newName) {
    this.#name = newName;
  }

  get setName() {
    return this.#name;
  }

  getData() {
    return `name student: ${this.#name}, course: ${this.#course}`;
  }
}

const student = new Students('Camilo', ['Javascript', 'HTML', 'CSS']);

student.getData();

console.log(student.getData());
