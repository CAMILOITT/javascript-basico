# Persistencia de datos en JS

- Local storage: esta disponible para todas las paginas

  - Crear y cambiar el valor de un item

  ```
    localStorage.setItem('key', 'vale') // Crear
    localStorage.setItem('key', 'vale') // modificar
  ```

  - Obtener valores

  ```
    localStorage.setItem('name', 'Camilo') // creo
    const name = localStorage.getItem('name') // obtengo el valor
    console.log(name) // 'Camilo'
  ```

  - Eliminar valores

    - Elimina todos los valores

    ```
      localStorage.clear()
    ```

    - Elimina solo un valor

    ```
      localStorage.removeItem('key')
    ```

- Session storage: esta disponible solo para la pagina la cual se ejecuta

  - Crear y cambiar el valor de un item

  ```
    SessionStorage.setItem('key', 'vale') // Crear
    SessionStorage.setItem('key', 'vale') // modificar
  ```

  - Obtener valores

  ```
    SessionStorage.setItem('name', 'Camilo') // creo
    const name = SessionStorage.getItem('name') // obtengo el valor
    console.log(name) // 'Camilo'
  ```

  - Eliminar valores

    - Elimina todos los valores

    ```
      SessionStorage.clear()
    ```

    - Elimina solo un valor

    ```
      SessionStorage.removeItem('key')
    ```

- Cookies

  - Crear y cambiar el valor de un item

  ```
    // crear una cookie sin caducidad
    document.cookie = 'nameCookie=value'
    // crear una cookie con caducidad
    document.cookie = 'nameCookie=value;expires=' + new Date(year, month, day).toUTCString()
  ```

  - Obtener valores

  ```
    console.log(document.cookie)
  ```

  - Eliminar una cookie

  ```
  ```