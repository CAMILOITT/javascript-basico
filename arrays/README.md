# métodos

## Añadir elementos aun array

- push(value): inserta un valor al final del array. `muta el array`.

  - push(value: puede aceptar cualquier tipo de dato)

```
  const array = [1, 2, 3, 'datos']
  const greeting = function () {
  console.log('hola')
  }
  console.log(array) // [1, 2, 3, 'datos']
  array.push()
  console.log(array) // [ 1, 2, 3, ƒ greeting() ]
```

- unshift(value): inserta un valor al inicio de un array. `muta el array`.

  - unshift(value: puede aceptar cualquier tipo de dato.)

```
  const array = [1, 2, 3, 'datos']
  const greeting = function (){
  console.log('hola')
  }
  console.log(array) // [1, 2, 3, 'datos']
  array.push(greeting)
  console.log(array) // [ƒ greeting(), 1, 2, 3, 'datos']
```

## eliminar elementos de un array

- pop(): elimina valores al final de un array.
  - pop()

```
  const array = [1, 2, 3, 'datos']
  const greeting = function (){
  console.log('hola')
  }
  console.log(array) // [1, 2, 3, 'datos']
  array.pop()
  console.log(array) // [ 1, 2, 3]
```

- shift(): elimina valores al inicio de un array.
  - shift()

```
  const array = [1, 2, 3, 'datos']

  console.log(array) // [1, 2, 3, 'datos']
  array.shift()
  console.log(array) // [ 2, 3, 'datos']
```

## modificar array

- splice(inicio, eliminar, añadir...): este método puede eliminar y añadir valores.

- splice(
  inicio: solo muestra los primeros valores hasta el indice dado.
  )

```
  const array = [1, 2, 3, "datos"];

  console.log(array); // [1, 2, 3, 'datos']
  array.splice(1); // [ 3, 'datos']
  console.log(array); // [ 1, 2 ]
```

- splice(
  inicio: indica el inicio de los elementos que se van a eliminar.
  eliminar: valor entero de cuantos elementos de van a eliminar.
  )

```
  const array = [1, 2, 3, "datos"];

  console.log(array); // [1, 2, 3, 'datos']
  array.splice(1, 2); // [ 2, 3 ]
  console.log(array); // [ 1, 'datos' ]

```

- splice(
  inicio: indice en el cual se va a hacer cambios.
  eliminar: valor entero de cuantos elementos de van a eliminar.
  añadir: elementos que se va a insertar en el arreglo.
  )

```
  const array = [1, 2, 3, "datos"];

```

- splice(
  inicio: indice en el cual se va a hacer cambios.
  eliminar: valor entero de cuantos elementos de van a eliminar.
  añadir: elementos que se va a insertar en el arreglo.
  ...añadir: elementos que se va a insertar en el arreglo.
  )

```
  const array = [1, 2, 3, "datos"];

  console.log(array); // [1, 2, 3, 'datos']
  array.splice(1, 2, 34, 234 ,23); // [ 3 ]
  console.log(array); // [ 1, 34, 234, 23, 'datos' ]

```

## unir listas

- .concat(array): concatena o une dos listas. `no muta`
- .concat(array: Arreglo que deseas concatenar)

```
  const food = ["pollo", "arroz", "salchicha", "carne"];
  const beverage = [
    "limonada",
    "jugo de maracuyá",
    "jugo de mora",
    "jugo de naranjilla",
  ];

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]
  console.log(beverage); //  [ 'limonada', 'jugo de maracuyá', 'jugo de mora', 'jugo de naranjilla' ]

  console.log(food.concat(beverage)); //  [ 'pollo', 'arroz', 'salchicha', 'carne', 'limonada', 'jugo de maracuyá', 'jugo de mora', 'jugo de naranjilla' ]
```

- spread operator: operador de propagación.

```
  const food = ["pollo", "arroz", "salchicha", "carne"];
  const beverage = [
    "limonada",
    "jugo de maracuyá",
    "jugo de mora",
    "jugo de naranjilla",
  ];
  const listFoodBeverage = [...food, ...beverage]

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]
  console.log(beverage); //  [ 'limonada', 'jugo de maracuyá', 'jugo de mora', 'jugo de naranjilla' ]

  console.log(listFoodBeverage); //  [ 'pollo', 'arroz', 'salchicha', 'carne', 'limonada', 'jugo de maracuyá', 'jugo de mora', 'jugo de naranjilla' ]
```

## obtener una listas

- splice(inicio, final): crea una lista con la parte seleccionada. `no muta`

- splice(
  inicio: indice donde comienza.
  final: indice donde termina.
  )

```
    const food = ["pollo", "arroz", "salchicha", "carne"];

    console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]
    console.log(food.splice(1,2)) // [ 'arroz', 'salchicha' ]
```

## buscar un elementos

- .find(callback(valor)): busca el elemento en el array
  -.find(
  callback: recibe una función(
  valor: valor del elemento de cada indice `obligatorio`
  )
  )

```
  const food = ["pollo", "arroz", "salchicha", "carne"];
  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]

  food.find(element => element === 'carne') // 'carne'
  food.find(element => element === 'huevos') //
```

### métodos mas avanzados

- .map(callback(valor, indice)): realiza una iteración por cada elemento
  - .map(
    callback: recibe una función(
    valor: valor del indice `obligatorio`
    indice: valor del indice del elemento que se va ejecutando
    )
    )

```
  const food = ["pollo", "arroz", "salchicha", "carne"];

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]

  food.map((element, indice) => `${indice + 1}.- ${element}`) //[ '1.- pollo', '2.- arroz', '3.- salchicha', '4.- carne' ]

```

- .filter(callback(valor)): filtra los elementos de un array con los parámetros dado.
  - .filter(
    callback: recibe una función(
    valor: valor del indice
    )
    )

```
  const beverage = [
    "limonada",
    "jugo de maracuya",
    "jugo de mora",
    "jugo de narangilla",
  ];

  console.log(beverage) // [ 'limonada', 'jugo de maracuya', 'jugo de mora', 'jugo de narangilla' ]

  beverage.filter(element => elemento !== 'jugo de mora') //[ 'limonada', 'jugo de maracuya', 'jugo de narangilla' ]
```

- .reduce(callback(valorAnterior, valorPresente, indice, arrayOriginal)):
  - .reduce(
    callback: recibe una función(
    valorAnterior: valor anterior `obligatorio`
    valorPresente: valor siguiente `obligatorio`
    indice: indice del array
    arrayOriginal: array original
    )
    )

```
  const precie = [12, 43, 53, 2, 12, 43, 23];

  console.log(precie)

  const total =precie.reduce((prev,next,indice,array)=>{
    console.log(prev) // 12, indifinide, indidinide, indidinide,
    console.log(next) // 43, 53, 2, 12, 43, 23
    console.log(indice) // 1, 2, 3, 4, 5, 6
    console.log(array) // [ 12, 43, 53, 2, 12, 43, 23 ], [ 12, 43, 53, 2, 12, 43, 23 ] ...
    return prev + next
  })

  console.log(`precio: ${total}`) // 'precio: 188'
```

## identificar si un element existe

- .some(callback(valor)): devuelve true si existe y false si el elemento no existe.
  - callback(
    valor: valor del elemento
    )

```
  const food = ["pollo", "arroz", "salchicha", "carne"];

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]

  food.some(element => element === 'pollo') // true
  food.some(element => element === 'huevo') // false
```

## obtener una lista de un objeto iterable

- Array.from(array): devuelve un array de elementos.

```
  const food = ["pollo", "arroz", "salchicha", "carne"];

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]

  console.log(Array.from(food[1])) // [ 'a', 'r', 'r', 'o', 'z' ]
```

```
  const food = ["pollo", "arroz", "salchicha", "carne"];

  console.log(food); //  [ 'pollo', 'arroz', 'salchicha', 'carne' ]

  const foodSet = new Set(food)
  console.log(foodSet) // set(4) {'pollo','arroz','salchicha','carne', __proto__:{} }

  console.log(Array.from(foodSet)) //[ 'pollo', 'arroz', 'salchicha', 'carne' ]
```