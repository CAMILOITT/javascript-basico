# Métodos

## trabajar con decimales

- round(value): redondear hacia bajo sin decimales, recibe como parámetro los números que quieres modificar

  -round(value: valor de tipo numérico )

```
const a = 1.4;
const b = 0.4;
const result = a + b;

console.log(result); // 1.7999999999999998

console.log(Math.round(result)); // 2

console.log(Math.round(result*100)/100); // 1.8
```

- toFixed(value): formatea un número usando notación de punto fijo, y lo devuelve de un dato tipo string.

  - toFixed(value: 'cuantos números decimales deseas mostrar' )

  ```
  const a = 134.2;
  const b = 12.1;
  const result = a + b;

  console.log(result) //  146.29999999999998
  console.log(typeof result)  // 'number'

  console.log(result.toFixed(3))  // '146.300'
  console.log(typeof result.toFixed(3))  // 'string'
  ```

- toPrecision(value): devuelve una cadena que representa un objeto Number según la precisión especificada.

  - toPrecision(value: 'cuantos números va a devolver' )

  ```
  const a = 134.2;
  const b = 12.1;
  const result = a + b;

  console.log(result); // 146.29999999999998
  console.log(typeof result);  // 'number'

  console.log(result.toPrecision(6));  // '146.300'
  console.log(typeof result.toPrecision(3));  // 'string'

  console.log(result.toPrecision(2));  // '1.5e+2'
  console.log(typeof result.toPrecision(3));  // 'string'
  ```

## convertir un carácter numérico a decimal

- new Number(value: devuelve un valor de tipo object

  - new Number(value: valor numérico en texto o números )

```
const number = new Number('3');
const number1 = new Number(7);
const number2 = new Number(7.5);
const result = number + number1 + number2 ;

console.log(typeof number);  // object
console.log(typeof number1);  // object
console.log(typeof number2); // object

console.log(number); // [Number:3] {__proto__: {<->} }
console.log(number1); // [Number1:7] {__proto__: {<->} }
console.log(number2); // [Number2:7.5] {__proto__: {<->} }

console.log(typeof result); //  number
console.log(result); //  17.5
```

- Number(value): devuelve un valor de tipo number

  - Number(value: valor numérico en texto o números)

```
  const number = Number(12);
  const number1 = Number('12');
  const result = number + number1;

  console.log(typeof number); // number
  console.log(typeof result); // number
  console.log(result); // 24
```

- parseInt(string, base) :Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada

  - parseInt(
    string: valor en string,
    base: valor en numero del tipo de base (6:hex, 2:bin, 10:dec, 8:octal)
    )
```
const number = "32";
const number1 = "12";
const result = parseInt(number) + parseInt(number1);

console.log(typeof result); // number
console.log(result);  // 54

console.log(parseInt(result, 6));  // 28
```

- parseFloat(string): analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante

  - parseFloat(string: valor en tipo string)
```
  const number = 12.43;
  const string = "12.43";
  const numberString = "14e-2";
  const numberString2 = "14e+2";
  const numberString3 = "14easdf+2";
  const stringNumber = "asdf12.43";

  console.log(parseFloat(number));  // 12.43
  console.log(parseFloat(string));  // 12.43
  console.log(parseFloat(numberString));  // 0.14
  console.log(parseFloat(numberString2)); // 1400
  console.log(parseFloat(numberString3)); // 14
  console.log(parseFloat(stringNumber));  // NaN
```
