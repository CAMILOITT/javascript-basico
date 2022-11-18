# Eslint

Es una librería que tiene una serie de Estándares predefinidos para tener un indentado de código igual y asi evitar los cambios fantasmas y consistencias en el código.

## Extensiones

- Eslint

## Instalación

- npm install eslint -D: se instala los archivos necesarios

- npx eslint --init: para iniciar la configuración del eslint

## Configuración del archivo eslint

```
  module.exports = {
    // variables para eslint
    env: {
      node: true,
      es2021: true
    },
    // configuraciones de eslint
    extends: 'standard',
    overrides: [
    ],
    // version y algunas configuraciones de eslint para Javascript
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    // reglas que va a tener el eslint
    rules: {
    // "nombreDeLaPropiedad": [ "TipoDeAviso", "ConfiguraciónDeLaPropiedad" ]

    // tipo de Aviso:
    // never = no da Aviso
    // warning = señala con una linea amarilla
    // error = señala con una linea roja

    // Configuración De La Propiedad: Depende de la Propiedad

    "quotes": [ "error", "never" ],
    "..."
    }
  }
```

## Reglas temporales

- deshabilitar reglas de eslint

  - comentario en bloque

  ```
  /* eslint-disable */
  // el código entre estas comentario no sera evaluado por eslint
  /* eslint-enable */
  ```

  - deshabilitar solo una linea

  ```
   /* eslint-disable-next-line ident */
   código.... // no evalúa errores

   código.... //  si evalúa los errores

  ```

  - comentario en linea

  ```
  // eslint solo elimina la evaluación de la regla dicha
  código... // eslint-disable-line regla
  // eslint no evalúa la linea de codigo
  código... // eslint-disable-line
  ```

- scripts

  - analizar todas las carpetas y nos indica los errores

  ```
    "eslint": "eslint ."
  ```

  - Arreglar los errores que nos lanza eslint

  ```
    "lint": "eslint --fix ."
  ```
