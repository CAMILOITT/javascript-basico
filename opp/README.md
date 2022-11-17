# Clases en Javascript

## Crear una clase

```
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    saludar() {
      return `bienvenido ${this.name}`;
    }
  }

  const client = new Person("Camilo", 19);

  console.log(client.name); // 'Camilo'
  console.log(client.age); // '19'
  console.log(client.saludar()); // 'bienvenido Camilo'
```

## Datos privados

- (#) datos privados: se puede acceder dentro de la clase

```
  class Person {
    // Protected
    #name;
    #age;
    constructor(name, age) {
      this.#name = name;
      this.age = age;
    }
    saludar() {
      return `bienvenido ${this.#name}`;
    }
  }

  const client = new Person("Camilo", 19);

  console.log(client.name); // undefined
  console.log(client.age); // 19
  console.log(client.saludar()); // 'bienvenido Camilo'
  console.log(client.#name); // SyntaxError


```

## getters y setters

- get getNameFunction(): Obtiene atributos privados o protegidos

```
  class Students {
    #name;
    #age;
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
    getName() {
      return this.#name;
    }
  }

  const person = new Students('Camilo', 19);

  console.log(person.name); // undefined
  console.log(person.age); // undefined

  person.getName(); // 'Camilo'
```

- set setNameFunction(): Nos permite cambiar el valor de un atributo privado

```
  class Students {
    #name;
    #age;
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
    setName(newName) {
      this.#name = newName;
    }
    getName() {
      return this.#name;
    }
  }

  const person = new Students('Camilo', 19);

  console.log(person.name); // undefined
  console.log(person.age); // undefined

  person.getName(); // 'Camilo'

  person.setName('hola');
  person.getName(); // 'hola'


  person.setName(20);
  person.getName(); // 20


```

## Herencia y Polimorfismo

- Herencia:

```
  class Character {
    #name;
    #life = 100;
    #power = 20;

    constructor(name) {
      this.#name = name;
    }
    showName() {
      return this.#name;
    }
    showLife() {
      return `${this.#life} hp`;
    }
    showPower() {
      return `${this.#power} power`;
    }
    Power() {
      return this.#power;
    }
  }

  class ClassCharacter extends Character {
    #ability;
    constructor(name, ability) {
      super(name);
      this.#ability = ability;
    }
    showAbility() {
      const powerCharacter = this.Power();
      return (
        `description: ${this.#ability}
        ${this.showPower()}
        total Power: ${powerCharacter * 2} power`
        );
    }
  }
  const taza = new ClassCharacter('CAMILOITT', 'double power');

  taza.showName();  // 'CAMILOITT'
  taza.showLife();  // '100hp'
  taza.showPower();  // '20 power'
  taza.showAbility(); /*
  'description: double power
  20 power
  total Power: 40 power'
  */

```

- Polimorfismo:

```
  class Character {
    #name;
    #life = 100;
    #power = 20;

    constructor(name) {
      this.#name = name;
    }
    greeting(){
      return `Bienvenido ${this.#name}`
    }
    showName() {
      return this.#name;
    }
    showLife() {
      return `${this.#life} hp`;
    }
    showPower() {
      return `${this.#power} power`;
    }
    Power() {
      return this.#power;
    }
  }
  class ClassCharacter extends Character {
    #ability;
    #presentation
    constructor(name, ability, presentation) {
      super(name);
      this.#ability = ability;
      this.#presentation = presentation;
    }
    greeting(){
      const name = super.greeting()
      return `${name}, ${this.#presentation}`
    }
    showAbility() {
      const powerCharacter = this.Power();
      return (
      `description: ${this.#ability}
  ${this.showPower()}
  total Power: ${powerCharacter * 2}`);
    }
  }
  const taza = new ClassCharacter('Camiloitt', 'double power','caballero dorado');

  taza.greeting()  //'Bienvenido Camiloitt, caballero dorado'
```
