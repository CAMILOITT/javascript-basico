## lanzar un error

- throw new Error: lanza un error

  - throw: lanza
  - new Error: hace una instancia del constructor Error

```
  function numbers(val) {
    if (typeof val === 'number') {
      return val * 2
    }
    throw new Error('val no es un numero')
  }

  numbers(20) // 40
  numbers("asd"); // "val is not number"
```

- tryCatch

```
  function numbers(val) {
  if (typeof val === "number") {
      return val * 2;
    }
    throw new Error("el valor ingresado no es un numero");
  }

  try {
    numbers('20');
  } catch (e) {
    console.error(e); // Error: 'el valor ingresado no es un numero'
  }

    try {
    numbers(20); // 40
  } catch (e) {
    console.error(e);
  }
```

## Errores mas comunes

- InternalError: problemas internos
- SyntaxError: error en la sintaxis del código
- TypeError: cuando los no coinciden
- ReferenceError: referencia no encontrada
