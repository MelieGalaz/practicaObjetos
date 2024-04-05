// Ejercicios de map:
// Duplicar elementos:
// Dado un array de números, usa map para duplicar cada número en el array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersDuplicados = numbers.map((numero) => numero * 2);
console.log(numbersDuplicados);

// Convertir a mayúsculas:
// Dado un array de strings, utiliza map para convertir cada string a mayúsculas.

const strings = [
  "hola",
  "adios",
  "bienvenido",
  "chao",
  "hasta luego",
  "qué tal",
  "cómo estás",
  "adiós",
  "hasta pronto",
  "nos vemos",
];

const stringMayusculas = strings.map((string) => string.toUpperCase());
console.log(stringMayusculas);

// Obtener longitudes:
// Dado un array de strings, usa map para crear un nuevo array que contenga las longitudes de cada string.
const words = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "sandía",
  "cereza",
  "melón",
  "limón",
  "piña",
];

const words1 = words.map((fruta) => fruta.length);

console.log(words1);

// Convertir de Fahrenheit a Celsius:
// Dado un array de temperaturas en Fahrenheit, usa map para convertirlas a Celsius. La fórmula es: (Fahrenheit - 32) * 5/9.
const fahrenheitTemperatures = [32, 68, 86, 104, 122, 140, 158, 176, 194, 212];

const Celsius = fahrenheitTemperatures.map((grados) => ((grados - 32) * 5) / 9);
console.log(Celsius);

// Multiplicar elementos por su índice:
// Dado un array de números, usa map para multiplicar cada número por su índice en el array.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = numbers1.map((factor, index) => factor * index);

console.log(numbers2);

// Ejercicios de find:
// Encontrar números pares:
// Dado un array de números, utiliza find para encontrar el primer número par en el array.
const numbers3 = [1, 3, 5, 7, 8, 10, 12, 14, 16, 18];

const numbers4 = numbers3.find((num) => num % 2 === 0);
console.log(numbers4);

// Encontrar strings que contienen una letra específica:
// Dado un array de strings, utiliza find para encontrar el primer string que contenga una letra específica.
const strings1 = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "sandía",
  "cereza",
  "melón",
  "limón",
  "piña",
];
const letter = "a";

const stringFrutas = strings1.find((stringFruta) =>
  stringFruta.includes(letter)
);

console.log(stringFrutas);

// Encontrar el primer número divisible por 5:
// Dado un array de números, utiliza find para encontrar el primer número que sea divisible por 5.
const numbers5 = [2, 4, 6, 8, 10, 12, 15, 18, 20, 22];

const divisible5 = numbers5.find((num) => num % 5 === 0);

console.log(divisible5);

// Encontrar usuarios con edad mayor a 18:
// Dado un array de objetos que representan usuarios (cada objeto tiene propiedades como nombre y edad), utiliza find para encontrar el primer usuario que tenga una edad mayor a 18.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eva", age: 20 },
  { name: "Frank", age: 22 },
  { name: "Grace", age: 19 },
  { name: "Henry", age: 21 },
  { name: "Irene", age: 24 },
  { name: "Jack", age: 29 },
];
const user18 = users.find((user) => user.age >= 18);
console.log(user18);

// Encontrar el primer elemento que cumpla una condición personalizada:
// Dado un array de elementos, utiliza find para encontrar el primer elemento que cumpla una condición personalizada que definas.

const stringsFrutas = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "sandía",
  "cereza",
  "melón",
  "limón",
  "piña",
];
const letra = "e";
const frutas = stringsFrutas.find((fruta) => fruta.includes(letra));

console.log(frutas);

// Ejercicios de filter:
// Filtrar números pares:
// Dado un array de números, utiliza filter para crear un nuevo array que contenga solo los números pares.
const numberS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtroDePares = numberS.filter((par) => par % 2 === 0);
console.log(filtroDePares);

// Filtrar strings que contienen una letra específica:
// Dado un array de strings, utiliza filter para crear un nuevo array que contenga solo los strings que contienen una letra específica.
const stringsF = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "sandía",
  "cereza",
  "melón",
  "limón",
  "piña",
];
const letterA = "a";

const stringA = stringsF.filter((letra) => letra.includes(letterA));
console.log(stringA);

// Filtrar números mayores a 10:
// Dado un array de números, utiliza filter para crear un nuevo array que contenga solo los números mayores a 25..
const numbersMay25 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const numMay25 = numbersMay25.filter((num) => num > 25);
console.log(numMay25);

// Filtrar usuarios menores de 25 años:
// Dado un array de objetos que representan usuarios (cada objeto tiene propiedades como nombre y edad), utiliza filter para crear un nuevo array que contenga solo los usuarios menores de 25 años.
const userS = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 18 },
  { name: "Eva", age: 22 },
  { name: "Frank", age: 24 },
  { name: "Grace", age: 19 },
  { name: "Henry", age: 21 },
  { name: "Irene", age: 23 },
  { name: "Jack", age: 29 },
];

const user25 = userS.filter((user) => user.age < 25);
console.log(user25);

// Filtrar elementos que cumplan una condición personalizada:
// Dado un array de elementos, utiliza filter para crear un nuevo array que contenga solo los elementos que cumplan una condición personalizada que definas.
const letraG = "G";
const userD = userS.filter((user) => user.name.includes(letraG));
console.log(userD);

// Ejercicios de every:
// Verificar si todos los números son positivos:
// Dado un array de números, utiliza every para verificar si todos los números son positivos.
const numbersPositivos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const positivos = numbersPositivos.every((num) => num > 0);
console.log(positivos);

// Verificar si todos los strings son de longitud mayor a 3:
// Dado un array de strings, utiliza every para verificar si todos los strings tienen una longitud mayor a 3 caracteres.
const stringsF1 = [
  "manzana",
  "banana",
  "naranja",
  "uva",
  "pera",
  "sandía",
  "cereza",
  "melón",
  "limón",
  "piña",
];

const frutasLogitud = strings1.every((fruta) => fruta.length > 3);
console.log(frutasLogitud);

// Verificar si todos los usuarios son mayores de edad:
// Dado un array de objetos que representan usuarios (cada objeto tiene propiedades como nombre y edad), utiliza every para verificar si todos los usuarios son mayores de edad.
const usersEdad = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 18 },
  { name: "Eva", age: 21 },
  { name: "Frank", age: 24 },
  { name: "Grace", age: 19 },
  { name: "Henry", age: 23 },
  { name: "Irene", age: 27 },
  { name: "Jack", age: 29 },
];

const nombreEdad = usersEdad.every((user) => user.age >= 18);
console.log(nombreEdad);

// Verificar si todos los números son pares:
// Dado un array de números, utiliza every para verificar si todos los números son pares.
const numbersPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const pares = numbersPares.every((num) => num % 2 === 0);
console.log(pares);

// Verificar si todos los elementos cumplen una condición personalizada:
// Dado un array de elementos, utiliza every para verificar si todos los elementos cumplen una condición personalizada que definas.
const num1 = 1;
const numConUno = numbersPares.every((num) => num == num1);

console.log(numConUno);

// Ejercicios de some:
// Verificar si algún número es negativo:
// Dado un array de números, utiliza some para verificar si algún número es negativo.
const numbersNegativo = [1, 2, 3, -4, 5, -6, 7, 8, -9, 10];

const negativo = numbersNegativo.some((num) => num < 0);
console.log(negativo);

// Verificar si algún string contiene la letra 'a':
// Dado un array de strings, utiliza some para verificar si algún string contiene la letra 'a'.
// const strings = ["manzana", "banana", "naranja", "uva", "pera", "sandía", "cereza", "melón", "limón", "piña"];
// Verificar si algún usuario es mayor de 60 años:
// Dado un array de objetos que representan usuarios (cada objeto tiene propiedades como nombre y edad), utiliza some para verificar si algún usuario es mayor de 60 años.
// const users = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 65 },
//   { name: "David", age: 18 },
//   { name: "Eva", age: 21 },
//   { name: "Frank", age: 24 },
//   { name: "Grace", age: 19 },
//   { name: "Henry", age: 23 },
//   { name: "Irene", age: 27 },
//   { name: "Jack", age: 29 }
// ];
// Verificar si algún número es múltiplo de 5:
// Dado un array de números, utiliza some para verificar si algún número es múltiplo de 5.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Verificar si algún elemento cumple una condición personalizada:
// Dado un array de elementos, utiliza some para verificar si algún elemento cumple una condición personalizada que definas.

// Ejercicios de forEach:
// Imprimir el cuadrado de cada número:
// Dado un array de números, utiliza forEach para imprimir el cuadrado de cada número.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Imprimir cada string en mayúsculas:
// Dado un array de strings, utiliza forEach para imprimir cada string en mayúsculas.
// const strings = ["hola", "adios", "bienvenido", "chao", "hasta luego", "qué tal", "cómo estás", "adiós", "hasta pronto", "nos vemos"];
// Imprimir el nombre de cada usuario:
// Dado un array de objetos que representan usuarios (cada objeto tiene propiedades como nombre y edad), utiliza forEach para imprimir el nombre de cada usuario.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 16 },
//   { name: "Eva", age: 20 },
//   { name: "Frank", age: 22 },
//   { name: "Grace", age: 19 },
//   { name: "Henry", age: 21 },
//   { name: "Irene", age: 24 },
//   { name: "Jack", age: 29 }
// ];

// Imprimir cada elemento junto con su índice:
// Dado un array de elementos, utiliza forEach para imprimir cada elemento junto con su índice en el array.
// const elements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// Imprimir elementos que cumplen una condición personalizada:
// Dado un array de elementos, utiliza forEach para imprimir solo los elementos que cumplen una condición personalizada que d
