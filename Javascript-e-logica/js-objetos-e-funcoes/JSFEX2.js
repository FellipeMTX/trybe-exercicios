function largestValue(array) {
  var indiceDoMaior = 0;
  for(let key in array){
    if(array[key] > array[indiceDoMaior]){
      indiceDoMaior = key;
      } 
  }
  return indiceDoMaior;
};
console.log(largestValue([522, 3, 6, 1776, 98, 110, 267]));