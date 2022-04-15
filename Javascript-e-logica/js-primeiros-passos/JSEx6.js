let pecaDeXadrez = "cavaleiro";

switch(pecaDeXadrez.toLowerCase()){
    case "cavalo":
        console.log("Anda em L");
        break;
    case "peao":
        console.log("So pra frente e diagonal em caso de matar");
        break;
    case "bispo":
        console.log("Diagonais");
        break;
    case "torre":
        console.log("so reto");
        break;
    case "rei":
        console.log("para todas as direçoes mas somente uma casa");
        break;
    case "rainha":
        console.log("Movimento livre, todos os movimentos das outras peças");
        break;
    default:
        console.log("nao é um peça de xadrez")
}