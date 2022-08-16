let answer = prompt(`Deseja comer mais coxinhas? \n "S" para SIM \n "N" para NÃO`).toLowerCase()
let conta = 0;

while (answer=== 's') {
    conta=conta+2.5
    answer = prompt(`Deseja comer mais coxinhas? \n "S" para SIM \n "N" para NÃO`).toLowerCase()
}

console.log(`Total da Conta: R$ ${conta}`)
