const grossSalary = 3000;
let inssTax = null;
let irTax = null;
let baseSalary = null;
let netSalary = null;

if(grossSalary < 0){
    console.log("ERRO, valor não suportado")
}else if(grossSalary <= 1566.94 && grossSalary >= 0){
    inssTax = grossSalary * 0.08;
}else if( grossSalary > 1566.94 && grossSalary <= 2594.92){
    inssTax = grossSalary * 0.09;
}else if( grossSalary > 2594.92 && grossSalary <= 5189.82){
    inssTax = grossSalary * 0.11;
}else{ inssTax = 570.88; }

baseSalary = grossSalary - inssTax;

if(baseSalary < 0){
    console.log("ERRO, valor não suportado")
}else if(baseSalary >= 0 && baseSalary <= 1903.98){
    irTax = 0;
}else if(baseSalary > 1903.99 && baseSalary <= 2826.65){
    irTax = (0.075 * baseSalary) - 142.8; 
}else if(baseSalary > 2826.65 && baseSalary <= 3751.05){
    irTax = (0.15 * baseSalary) - 354.8;
}else if(baseSalary > 3751.05 && baseSalary <= 4664.68){
    irTax = (0.225 * baseSalary) - 636.13;
}else { irTax = (0.275 * baseSalary) - 869.36; }

netSalary = baseSalary - irTax ;

console.log(netSalary)