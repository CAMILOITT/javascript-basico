// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function Fibonacci(limite) {
  let arrFibonacci = [0];
  let num = 0;
  for (let i = 0; i < limite; i++) {
    if (arrFibonacci[i] === 0) {
      num = 1;
      arrFibonacci = [...arrFibonacci, num];
    } else {
      num += arrFibonacci[i - 1];
      arrFibonacci = [...arrFibonacci, num];
    }
  }
  return arrFibonacci;
}

Fibonacci(5);

console.log(Fibonacci(5));
