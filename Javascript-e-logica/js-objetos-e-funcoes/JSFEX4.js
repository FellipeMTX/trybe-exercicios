function maiorNome(array) {
  var maisCaract = array[0];
  for(let index in array) {
    if(array[index].length > maisCaract.length){
      maisCaract = array[index];
    }
  }
  return maisCaract;
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'epipobaquigrafo', 'Fernanda', 'Cairo', 'Joana']));
