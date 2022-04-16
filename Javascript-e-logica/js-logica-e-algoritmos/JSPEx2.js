let word = "paralelepipedo";
let inverseWord = [];

for (let index = word.length - 1; index >= 0; index -= 1) {
    inverseWord += word[index];   
}
console.log(inverseWord);