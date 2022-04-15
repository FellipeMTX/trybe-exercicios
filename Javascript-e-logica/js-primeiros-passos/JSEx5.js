const angulo1 = 80;
const angulo2 = 40;
const angulo3 = 60;

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("ERRO, angulo invalido");
} else if(((angulo1 + angulo2) + angulo3) == 180){
    console.log("true")
}else { console.log("false")}