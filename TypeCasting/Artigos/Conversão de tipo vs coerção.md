
# Conversão de tipo vs coerção

### O que é Coerção de Tipo?
Coerção de tipo refere-se à conversão automática de valores de um tipo de dado para outro, tipicamente realizada durante operações ou comparações envolvendo diferentes tipos de dados. Ao usar Coerção de Tipo, o JavaScript tenta tornar os tipos de dados compatíveis para completar a operação ou comparação.


###Coerção numérica para string:
```
var num = 42 ;
var str = "A resposta é " + num; // Coerção: número para string
console . log (str); // Saída: "A resposta é 42"
```
Neste caso, o número 42 é convertido em uma string e concatenado com a string, a resposta é.


### Coerção de string para numérica:
```
var str = "42" ;
var num = +str; // Coerção: string para número
console . log (num); // Saída: 42
```
Aqui, a string “ 42” é convertida em um valor numérico usando o operador unário mais.


### Comparação Coerção:
```
console . log ( 42 == "42" ); // Saída: true (coerção: string para número)
```
Nesse caso, o operador de igualdade flexível == transforma a string "42"em um número antes de compará-la com o número 42.


### Regra de Coerção de Tipo:

O JavaScript segue um conjunto de regras quando se trata de coerção de tipo. Elas ditam como valores de diferentes tipos de dados são convertidos automaticamente para torná-los compatíveis para operações ou comparações. 
Aqui estão as principais regras de coerção de tipo:

> Quando um valor numérico é concatenado com uma string usando o + operador, o JavaScript converte o número para uma string.

> Quando um valor de string está envolvido em uma operação aritmética, o JavaScript tenta convertê-lo em um valor numérico.

> Ao comparar valores usando os operadores == (igualdade flexível) ou !=(desigualdade flexível), o JavaScript executa coerção de tipo para tornar os valores comparáveis.

> JavaScript tem um conceito de valores verdadeiros e falsos, onde certos valores são forçados para true ou false em um contexto booleano.

> Valores falsos incluem false, 0, “”(string vazia), null, undefined, e NaN. Todos os outros valores são considerados verdadeiros quando forçados a um booleano.

Exemplo:
```
if ( "Olá" ) {
 console . log ( "Verdadeiro" ); // Saída: "Verdadeiro"
}
if ( "" ) {
 console . log ( "False" ); // Este bloco não será executado
}
```

Temos alguns convidados e alguns convites e para personalizar os convites, você precisa concatenar o nome com o número do convite.
Veja como a coerção de tipo funciona no exemplo acima:

```
var invitationNumber = Math . floor ( Math . random () * 100 ); //Gerar número aleatório entre 1-99
var name = "Meenal" ;
```
```
var invitationMessage = "Caro " + name + ", seu número de convite é " + invitationNumber + "." ;
console . log (invitationMessage);
```

Neste exemplo, temos um número ( invitationNumber) e uma string ( name). Ao usar o + operador para concatená-los com outras strings, o JavaScript automaticamente força o número para uma string, permitindo uma concatenação bem-sucedida. 

A saída será:
```
Caro Meenal, o número do seu convite é 83.
```

### O que é conversão de tipo?

Conversão de tipo, também conhecida como conversão de tipo, refere-se à transformação explícita de um valor de um tipo de dado para outro. Alterando o tipo de dado de um valor usando funções ou operadores internos fornecidos pela linguagem.

A conversão de tipo permite que os desenvolvedores adaptem valores ao tipo de dados esperado para operações específicas ou para garantir consistência no tratamento de dados. Ela fornece controle sobre a interpretação e representação de dados em programas.

### Convertendo uma string em um número:
```
var str = "42" ;
var num = Number (str); // Conversão: string para número
console . log (num); // Saída: 42
```
Neste exemplo, a Number() função converte explicitamente a string "42"em um valor numérico.

### Convertendo um número em uma string:
```
var num = 42 ;
var str = String (num); // Conversão: número para string
console . log (str); // Saída: "42"
```
Aqui, a String() função converte explicitamente o número 42 em uma string.


### Convertendo um booleano em uma string:
```
var bool = true ;
var str = String (bool); // Conversão: booleano para string
console . log (str); // Saída: "true"
```
A String() função é usada para converter o valor booleano true em uma string.

### Vamos ver mais um exemplo de conversão de tipo:

Imagine que você tem um formulário em um site onde os usuários inserem suas idades. A idade é capturada como uma string porque vem de um campo de entrada. No entanto, para alguns cálculos e validações, você precisa tratar a idade como um valor numérico.
Veja como a conversão de tipos funciona neste cenário:
```
var ageAsString = "25" ;
var age = Number (ageAsString);

var ageNextYear = age + 1 ;
console . log (ageNextYear); // Saída: 26
```

Neste exemplo, a Number() função é usada para converter explicitamente a string "25"em um valor numérico. Ao executar a conversão de tipo, podemos tratar a idade como um número e executar operações aritméticas nele. Neste caso, adicionamos 1 à idade para calcular a idade da pessoa no próximo ano.


### Resumo

A coerção de tipo acontece implicitamente durante operações ou comparações, onde JavaScript converte valores automaticamente para torná-los compatíveis. A conversão de tipo, por outro lado, envolve a conversão explícita de valores usando funções ou operadores fornecidos por JavaScript.

Concluindo, tanto a coerção de tipo quanto a conversão de tipo desempenham papéis importantes em JavaScript ao trabalhar com diferentes tipos de dados.


### Referencia:

[JavaScript type coercion and type conversion](https://medium.com/@atuljha2402/understanding-javascript-type-coercion-type-conversion-a2ce84c0033)
