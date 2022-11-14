# Métodos

## no tener valores repetidos

- new Set(array): crea un objeto el cual no guarda valores repetidos.

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  // Set {1,  3,  4,  5,  6,  2,  41}
```

## insertar, eliminar valores de un objeto

- add(value): inserta valores al final de objeto.

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  // Set {1,  3,  4,  5,  6,  2,  41}

  setList.add(12)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41, 12}
```

- delete(value): elimina valores indicados.

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41}

  setList.delete(1)
  console.log(setList)  //  Set { 3,  4,  5,  6,  2,  41}
```

- clear(): limpia el objeto.

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41}

  setList.clear()
  console.log(setList) // Set {}
```

## buscar si un valor existe

- .has(value): busca un valor, si existe devuelve un true sino false

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41}

  console.log(setList.has(5))  // true
  console.log(setList.has(99)) // false
```

## obtener la longitud

- .size: devuelve la longitud del objeto

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41}

  console.log(setList.size)  // 7
```

## convertir a un array

- spread operator: convierte en un array

```
  const list = [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];
  console.log(list); // [1, 3, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 41, 6, 2, 1];

  const setList = new Set(list)
  console.log(setList)  //  Set {1,  3,  4,  5,  6,  2,  41}

  const arraySetList = [...setList]

  console.log(arraySetList) // [1,  3,  4,  5,  6,  2,  41]

```

## como clonar un objeto

- spread operator

```
const obj = {
	name: "camilo",
	lastName: "torres",
	age: 19,
};

// muta el objeto original
const obj2 = obj;
obj2.age = 20;

// no muta el objeto original
const obj3 = { ...obj };
obj3.age = 15;

console.log(obj); //  { name: 'camilo', lastName: 'torres', age: 20 }
console.log(obj3); //  { name: 'camilo', lastName: 'torres', age: 20 }
console.log(obj2); //  { name: 'camilo', lastName: 'torres', age: 15 }

```

## ordenar un objeto

- .sort(callback(value)): ordena una array `muta`

```
  const students = [
    { name: "Camilo", age: 19 },
    { name: "Braman", age: 21 },
    { name: "Kevin", age: 20 },
    { name: "Luciana", age: 17 },
  ];

  students.sort((a, b) => a.age - b.age);

  console.log(students)
  // [
  //   { name: 'Luciana', age: 17 },
  //   { name: 'Camilo', age: 19 },
  //   { name: 'Kevin', age: 20 },
  //   { name: 'Bryan', age: 21 }
  // ]

```
