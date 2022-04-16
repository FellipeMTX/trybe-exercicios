let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplicado = [];

for (let index = 0; index < array.length; index += 1) {
  if (index + 1 < array.length) {
    arrayMultiplicado.push(array[index] * array[index + 1]);
  } else {
    arrayMultiplicado.push(array[index] * 2);
  }
}
  console.log(arrayMultiplicado)

