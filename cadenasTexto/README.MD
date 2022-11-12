# Métodos

## Longitud de la cadena de texto

- .length: indica la longitud de ka cadena de textos

```
const name = 'Camilo'
console.log(name.length) // 6
```

## Obtener una parte de la cadena de texto

- .slice: recibe la posición inicial y final de lo que va a retornar

```
              0 2 4 6 8 10
const text = 'cadena larga'
               1 3 5 7 9 11
console.log(text.slice(5,11)) // a larg
```

`NOTA: SI INDICAMOS LAS POSICIONES INICIAL Y FINAL IGUALES COMO RESULTADO OBTENEMOS: ''`

- .substring: funciona igual al método .slice

```
              0 2 4 6 8 10
const text = 'cadena corta'
               1 3 5 7 9 11
console.log(text.slice(5,11)) // a cort
```

`NOTA: SI INDICAMOS LAS POSICIONES INICIAL Y FINAL IGUALES COMO RESULTADO OBTENEMOS: ''`

- .substr: recibe como parámetro la posición de inicio y la longitud que va a recorrer

```
              0 2 4 6 8 10
const text = 'cadena corta'
               1 3 5 7 9 11       2
console.log(text.substr(5,3)) // a c
                                 1 3
```

`NOTA: ya no se utiliza!!`

## Remplazar parte de la cadena

- .replace: recibe dos parámetros `(busca la letra, letra que va a reemplazar)`

#### reemplaza solo la primera palabra que encuentra

```
const text = 'mi nombre es Tony'
console.log(text.replace('Tony', 'Iron-man')) //'mi nombre es Iron-man'
```

#### reemplazar todas las palabras que coincidan

```
const text = 'Había una conexión de corazón a corazón entre ellos'
console.log(text.replace(/corazón/g, 'maquina'))  // 'Había una conexión de maquina a maquina entre ellos'
```

## Convertir a MAYÚSCULAS y minúsculas

- toUpperCase: convierte en mayúsculas la letra

```
const text = 'teclado'
console.log(text.toUpperCase())// TECLADO
```

- toLowerCase: convierte en minúsculas la letra

```
const text = 'TECLADO'
console.log(text.toLowerCase()) // teclado
```

`toLocaleLowerCase y toLocaleUpperCase convierte el texto de acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas `

- toLocaleUpperCase: convierte en mayúsculas la letra

```
const text = 'teclado'
console.log(text.toLocaleUpperCase()) // TECLADO
```

- toLocaleLowerCase: convierte en minúsculas la letra

```
const text = 'TECLADO'
console.log(text.toLocaleLowerCase()) // teclado
```

## Eliminar espacios

- trim(): elimina los espacios del inicio

```
const text = '       frase'
console.log(text.length)  // 12
console.log(text.trim().length)  // 5
```

- trimStart(): elimina los espacios del inicio

```
const text = '       frase'
console.log(text.length)  // 12
console.log(text.trimStart().length) // 5
```

- trimEnd(): elimina los espacios del final

```
const text = 'frase       '
console.log(text.length) // 12
console.log(text.trimEnd().length) // 5
```

## Obtener carácter

- charAt(): indicamos el indice

```
const text = 'CAMILOITT'
console.log(text.charAt(3)) // I
```

- at(): indicamos el indice, si indicamos en positivo va a recorrer de derecha a izquierda pero si indicamos un negativo va a ir de izquierda a derecha

```
const text = 'CAMILOITT'
console.log(text.at(2)) // M
console.log(text.at(-2)) // T
```

- []: indicamos la posición del carácter que queremos obtener

```
const text = 'CAMILOITT'
console.log(text[2]) // M
```

## Obtener la posición de una palabra

- indexOf(): obtiene la primera posición en la que se encuentra la palabra indicada

```
const text = 'Había una conexión de corazón a corazón entre ellos'
console.log(text.indexOf('corazón')) // 22
```

- lastIndexOf(): obtiene la ultima posición en la que se encuentra la palabra indicada

```
const text = 'Había una conexión de corazón a corazón entre ellos'
console.log(text.lastIndexOf('corazón')) //32
```

## saber si una palabra esta en la cadena de texto

- match(): Se usa para obtener todas las ocurrencias de una expresión regular

```
const text = '¡La música es felicidad! ¡La música es relajante!'

console.log(text.match('La')) // [ 'La', index: 1, input: '¡La música es felicidad! ¡La música es relajante!', groups: undefined ]

console.log(text.match(/La/g)) // ['La', 'La']
```
- includes(): Busca si la matriz tiene determinado elemento

```
const text = '¡La música es felicidad! ¡La música es relajante!'
console.log(text.includes('La')) //
```

- startsWith(): indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, podemos indicar la palabra que deseamos buscar y la posición de inicio.

```
const text = '¡La música es felicidad! ¡La música es relajante!'
console.log(text.startsWith('La')) // false
console.log(text.startsWith('La',1)) // true
```

- endsWith(): determina si una cadena de texto termina con los caracteres de una cadena indicada, podemos indicar la palabra que deseamos buscar y la posición que vamos a evaluar

```
const text = '¡La música es felicidad! ¡La música es relajante!'

console.log(text.endsWith('La')) // false
console.log(text.endsWith('La', 28)) // true

```
