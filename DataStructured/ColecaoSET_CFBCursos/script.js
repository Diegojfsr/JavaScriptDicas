
//enquanto o map trabalha com chave e valor
//o set trabalha apenas com valor
//o set nao adiciona valores repetidos

let meuSet = new Set([1, 2, 3])
let meuMap = new Map()

// adicionando valores

meuSet.add(4)
meuSet.add(1) //valor repetido
meuSet.add(2) //valor repetido



console.log("O tamanho do array é: " + meuSet.size) //mostra o tamanho do array

// ======================================================
console.log("========================================")
// ======================================================

console.log("Os valores do array sao: ")

for(numero of meuSet){
console.log(numero)
}
