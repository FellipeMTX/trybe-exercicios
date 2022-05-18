const fatorial = (numero) => {
    let resultado = 1;
    for (let index = 2; index <= numero; index += 1) {
        resultado *= index;        
    }
    return resultado;
}

console.log(fatorial(3));