
//objeto literal

const pessoa={
    nome:"Diego",
    canal:"DJFSR",
    curso:"JavaScript",
    aulas:{
    aula01:"Introducao",
    aula02:"Variaveis",
    aula03:"Condicional"
    }
}
    
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.aulas);
console.log(pessoa.aulas.aula01);

console.log("================================");


//convertendo o objeto em um json
const string_json_pessoa = JSON.stringify(pessoa)
console.log("convertendo o objeto em um json:")
console.log(string_json_pessoa);

console.log("================================");


//convertendo o json em um objeto
const string_pessoa = '{"nome":"Diego","canal":"DJFSR","curso":"JavaScript","aulas":{"aula01":"Introducao","aula02":"Variaveis","aula03":"Condicional"}}'

const objeto_json_pessoa = JSON.parse(string_pessoa);
console.log("convertendo o json em um objeto:")
console.log(objeto_json_pessoa)
