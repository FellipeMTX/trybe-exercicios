let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNubers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if((numbers[index] % 2) > 0 ){
        oddNubers += 1;
    }
}
if(oddNubers === 0){
    console.log("Nenhum numero impar encontrado")
}else {console.log(oddNubers)}