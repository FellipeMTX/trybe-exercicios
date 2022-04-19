function largestValue(array) {
  var indiceDoMenor = 0;
  for(let key in array){
    if(array[key] < array[indiceDoMenor]){
      indiceDoMenor = key;
      } 
  }
  return indiceDoMenor;
};
console.log(largestValue([2, 4, 6, 7, -10, 0, -3]));