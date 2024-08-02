
//aplicando operacao de raiz quadrada em valores de um array

let num = [1, 4, 9, 16, 25]
let raiz = num.map(Math.sqrt)

for(let i = 0; i < 5; i++)
console.log("Numero: " + num[i] + " - Raiz: " + raiz[i])

// =====================================================================
console.log("=========================================================")
// =====================================================================

//mutiplicando os valores de um array 
// mutiplicando os valores por 2

let num2 = [1, 4, 9, 16, 25]

let dobro = num2.map((numero) => {
    return numero*2;
})

for(let i = 0; i < 5; i++)
    console.log("Numero: " + num2[i] + " - Dobro: " + dobro[i])
