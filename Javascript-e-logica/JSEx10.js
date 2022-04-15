const custoP = 20;
const valorV = 30;
const quantidadeVendida = 1000;

const custoT = custoP * 1.2 
const lucro = valorV - custoT

if(custoP < 0 && valorV < 0){
   console.log("Erro, valor de entrada não aceito")
}else {console.log(lucro * quantidadeVendida)}