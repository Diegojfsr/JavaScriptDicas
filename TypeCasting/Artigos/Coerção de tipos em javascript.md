
# Coerção de tipos em javascript

> Coerção? Explícita e Implícita?

Coerção, no javascript, se refere ao ato de converter tipos de valores, como converter a string “42” para o number 42. No javascript temos dois tipos de coerção:

### Coerção explícita: 
Quando usamos algum artifício da linguagem para forçar uma coerção. Um exemplo é o uso do parseInt(“42”), que resulta no number 42.

### Coerção implícita: 
Essa coerção acontece nos bastidores, sendo fruto de alguma operação, como a de comparação.
```
42 == "42" // true
```

### Comparações

Fazer comparações no javascript é algo que aprendemos logo ao iniciarmos com a linguagem,porém precisamos ficar atentos ao que acontece quando comparamos dois valores.
Temos 4 operadores para fazer comparações: igual (==) , diferente (!=), estritamente igual (===) e estritamente diferente (!==).
```
// Caso 1
42 == "42" // true 
// Caso 2
42 === "42" // false
```

A primeira coisa que pensamos é que no caso 1, usando (==), é testado apenas o valor e no caso dois , usando (===), é testado o valor e depois o tipo. Mas na verdade não é isso que realmente acontece… O que realmente acontece é a permissão ou não da coerção de tipos. No primeiro caso, o operador de igualdade permite a coerção, então nos bastidores teremos uma comparação assim:
```
// Nossa comparação ->  42 == "42"
// Nos bastidores -> 42 == 42
```

No segundo caso, quando usamos o operador estritamente igual (===), não acontece a coerção, logo teremos uma comparação entre um number e uma string, que retorna falso.
```
// Nossa comparação ->  42 === "42"
// Nos bastidores -> 42 === "42"
```
OBS: Tudo dito anteriormente também se aplica aos operadores de diferença != e !==.


### Comparações relacionais
Também possuímos os operadores relacionais, são eles: menor que (<), maior que (>), menor ou igual que (<=) e maior ou igual que (>=). Eles podem ser utilizados para numbers ou strings, no segundo caso usando regras alfabéticas.
```
3 < 4 // true
"bar" < "foo" // true
```

### E a coerção?
Ela acontece com todos os operadores relacionais, pois não existe nenhum operador relacional estrito, <== não existe.
```
let a = 41, b = "42", c = "43";
// Caso 1 
a < b // true 
// Caso 2 
a < c // true 
// Caso 3 
b < c // true
```
No caso 3 ambos são comparados de forma alfabética, pois são strings. Já no caso 1 e 2, quando temos um número e um texto, existe uma coerção de string para number.

Tipos que viram números
E a comparação entre tipos que não podem virar números?
```
let a = 42, b = "foo";
// Caso 1
a > b // false 
// Caso 2
a < b // false 
// Caso 3
a == b // false
```
Não, não tem nada errado! 
Mas essa é uma grande pegadinha!!
Lembra que eu falei que as comparações relacionais permitem coerção? Logo nos 3 casos o javascript tenta converter “foo” para um número e o que recebemos não é um número (NaN).
A especificação diz que o NaN não pode ser maior, menor ou igual a um número. Na verdade,um NaN não é maior, menor ou igual nem a outro NaN.

O que acontece nos bastidores é algo assim:
```
// Caso 1
42 > NaN // false
// Caso 2
42 < NaN // false
// Caso 3
42 == NaN // false
```

### Concluindo…
Até aqui aprendemos um pouco sobre a importância de entender como o javascript se comporta quando executamos algum tipo de comparação. Ter um entendimento não superficial sobre a linguagem pode ser o que vai impedir que fiquemos horas e horas presos em pequenos problemas que são simples, mas que podem ser uma pedra no sapato de quem não faz ideia do que esteja acontecendo.

### Referências:
[Coersao de tipos](https://crisgon.github.io/posts/Coercao-de-tipos-javascript/)


