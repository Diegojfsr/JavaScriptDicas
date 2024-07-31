// desafio
// fazer uma lista de tags de linguagens de programacao
// como evitar que o usuario informe tags repetidas

const tags = [];

tags.push("javascript");
tags.push("java");
tags.push("python");
tags.push("javascript");

const result = tags;
console.log(result);



// agora de uma forma mais rapida para evitar a repeticao de tags podemos usar o set.
//Set é um objeto que permite armazenar coleções de valores únicos em JavaScript.

const tags2 = new Set([]);

tags2.add("javascript");
tags2.add("java");
tags2.add("python");
tags2.add("javascript");

//como podemos ver abaixo, o set nao deixa passar 
//valores repetido para o array
const result2 = tags2;
console.log(result2);


// tambem podemos converter o resultado direto para um array
const result3 = Array.from(tags2);
console.log(result3);



