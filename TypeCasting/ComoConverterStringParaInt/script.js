
// Como converter uma string para int em JavaScript

// temos um numero porem no tipo string
var numero = "10";
console.log(numero);
console.log("Numero: " + numero + " do tipo: "+ typeof numero) //aqui verificamos q de fato o numero e do tipo string

// agora vamos converter esse numero para o tipo number
// vamos usar o parseInt para fazer essa conversao
var x = parseInt(numero);
console.log(x);

console.log("Numero: " + x + " do tipo: " + typeof x) //aqui verificamos q o numero agora e de fato do tipo number



// Tambem podemos converter um float para int
// porem numeros float, ja sao considerados tipo Number
// entao o que acontecera na conversao e apenas o arredondamento do numero.

var float = 12.8;
console.log(float);
console.log("O Numero: " + float + " do tipo: "+ typeof float)

var y = parseInt(float);
console.log(y);
console.log("Numero: " + y + " do tipo: " + typeof y)
// console.log(`Numero: ${y} do tipo: ${typeof y}`) // template string



// e por fim e possivel utilizar o parseInt em strings nao numericas
// porem o resultado sera um NaN, pois nao se trata de um valor numerico

var nome = "Diego";
console.log(nome);
console.log("O Valor: " + nome + " do tipo: "+ typeof nome)
// console.log(`O Valor: ${nome} do tipo: ${typeof nome}`) // template string

var z = parseInt(nome);
console.log(z);

console.log("O Valor: " + nome + " do tipo: " + typeof z);
