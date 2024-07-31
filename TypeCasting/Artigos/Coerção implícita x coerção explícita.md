
# Coerção implícita x coerção explícita

A coerção de tipo pode ser explícita ou implícita.
Como o JavaScript é uma linguagem fracamente tipada, valores também podem ser convertidos entre tipos diferentes automaticamente, o que é chamado de coerção de tipo implícita.
Quando um desenvolvedor expressa a intenção de converter entre tipos escrevendo o código apropriado, como Number(valor), isso é chamado de coerção de tipo explícita

Um operador que não provoca a coerção de tipo implícita é ===, que é chamado de operador de igualdade estrita. O operador de igualdade fraco == por outro lado, realiza tanto a comparação como a coerção de tipo, se necessário.


> Conversão de tipo em JavaScript:
### Conversão em strings
Para converter explicitamente valores para uma string, aplique a função String(). A coerção implícita é provocada pelo operador binário +, quando qualquer operando é uma string:
```
String(123) // explícita
123 + ''    // implícita
```
Todos os valores primitivos são convertidos para strings naturalmente.
```
String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'
```
A conversão de symbol é um pouco complicada, porque ele somente pode ser convertido explicitamente,mas não implicitamente.
```
String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // TypeError
```

### Conversão em booleano
Para explicitamente converter um valor para booleano, aplique a função Boolean(). A conversão implícita acontece em um contexto lógico, ou é causada pelos operadores lógicos ( || && !) .
```
Boolean(2)          // explicita
if (2) { ... }      // implícita devido ao contexto lógico
!!2                 // implícita devido ao operador lógico
2 || 'hello'        // implícita devido ao operador lógico
```
Os operadores lógicos, como  || e &&, realizam a conversão em booleano internamente, mas, na verdade,  retornam o valor dos operandos originais.
```
// retorna o número 123, em vez de retornar true
// 'hello' e 123 ainda são coagidos à booleano internamente para calcular a expressão
let x = 'hello' && 123;   // x === 123
```
Assim, existem apenas 2 resultados possíveis de conversão para booleano: true ou false.
```
Boolean(' ')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```
Qualquer valor que não está na lista é convertido para true, incluindo objetos, funções, Array, Date, tipos definidos pelo usuário, entre outros. Símbolos são valores verdadeiros. Objetos vazios e arrays são valores verdadeiros também.
```
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true
```

Conversão em números
Para uma conversão explícita, basta aplicar a função Number(), da mesma maneira que você fez com Boolean() e String() .

A conversão implícita é complicada, pois ocorre em mais casos:
 1. operadores de comparação (>, <, <=,>=)  
 2. operadores bitwise ( | & ^ ~)  
 3. operadores aritméticos (- + * / % ). Observe que o binário + não causa a conversão numérica, quando qualquer operando é uma string.  
 4. operador + unário  
 5. operador de igualdade == (incluindo !=). Observe que == não causa conversão numérica quando ambos os operandos são strings.

```
Number('123')   // conversão explícita
+'123'          // conversão implícita
123 != '456'    // conversão implícita
4 > '5'         // conversão implícita
5/null          // conversão implícita
true | 0        // conversão implícita
```


Aqui vemos como os valores primitivos são convertidos para números:
```
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

Quando uma string está sendo convertida para um número, a engine primeiro remove espaços em branco no começo e final, caracteres \n, \t, retornando NaN se a string aparada não representar um número válido. Se a string estiver vazia, ela retorna 0.
null e undefined são tratados de maneira diferente: null se torna 0 e undefined se torna NaN.
Símbolos não podem ser convertidos em números, seja explicitamente, seja implicitamente. Além disso, TypeError é lançado, em vez de converter silenciosamente para NaN, como acontece com undefined.
```
Number(Symbol('my symbol'))    // TypeError
+Symbol('123')                 // TypeError
```
Quando == está sendo aplicado a null ou undefined, a conversão numérica não acontece. null se iguala somente a null ou undefined e nada mais.
```
null == 0               // false, null não é convertido em 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
```
NaN não se iguala a nada, nem a si mesmo.

if (valor !== valor) { console.log("Nós estamos lidando com NaN aqui") }

### Coerção de tipo para objetos

Quando se trata de objetos e quando encontramos expressões como [1] + [2,3], primeiro é preciso converter um objeto para um valor primitivo, que então é convertido para o tipo final. Ainda são apenas três os tipos de conversão: em números, em strings e em booleanos.

O caso mais simples é a conversão em booleano: qualquer valor não primitivo é sempre coagido a true, não importando se um objeto ou array é vazio ou não.

Objetos são convertidos para números primitivos através do método interno [[ToPrimitive]], que é responsável tanto pela conversão em números como em strings.

[[ToPrimitive]] é passado com um valor de entrada e com uma preferência de tipo de conversão: Number ou String. O preferredType (tipo preferido, em português) é opcional.

As conversões em números e em strings fazem uso de dois métodos do objeto de entrada: valueOf e toString . Ambos os métodos são declarados em Object.prototype e, assim, estão disponíveis para qualquer método derivado, como Date, Array etc.

1. Se a entrada já é um valor primitivo, não faça nada e retorne-a.
2. Chame input.toString() e, se o resultado for de um tipo primitivo, retorne-o.
3. Chame input.valueOf() e, se o resultado for de um tipo primitivo, retorne-o.
4. Se nem input.toString() nem input.valueOf() resultam em um tipo primitivo, lance TypeError.

As conversões em números primeiro chamam valueOf (3) indo depois para toString (2). A conversão em strings faz o oposto: toString (2) seguido de valueOf (3).

A maior parte dos tipos integrados não possui valueOf, nem tem valueOf retornando o próprio objeto this, que, então, é ignorado porque não é de um tipo primitivo. Por isso, conversões em números e em strings podem funcionar do mesmo jeito — ambas acabam chamando toString().

Operadores diferentes podem ocasionar conversões em números ou em strings com a ajuda do parâmetro preferredType. Existem, contudo, duas exceções: o operador de igualdade == e o operador binário +, que acarretam modos de conversão padrão (preferredType não é especificado, ou é iguala ao default). Nesse caso, a maior parte dos tipos integrados assume uma conversão em número por padrão, com exceção de Date, que faz a conversão em string.


Você pode sobrescrever os métodos padrão toString() e valueOf() para associar a conversão lógica de objeto para tipo primitivo.

Perceba como bj + '' retorna'101' como string. O operador + ocasiona um método de conversão padrão e, como dito antes, Object assume uma conversão em número como padrão, usando, assim, o método valueOf() primeiro, em vez de toString().

### Método Symbol.toPrimitive

É possível substituir completamente a rotina interna [[ToPrimitive]], implementando o método [Symbol.toPrimtive] em um objeto.

Exemplos
```
true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true 
[] + null + 1            // 'null1'
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
```


O operador binário + causa a conversão para números para true e false:
```
true + false
==> 1 + 0
==> 1
```

O operador aritmético de divisão / causa a conversão em número para a string '6' :
```
12 / '6'
==> 12 / 6
==>> 2
```

Abaixo, vemos que o operador + tem associatividade da esquerda para a direita. Assim, a expressão "number" + 15 roda primeiro. Como um dos operandos é uma string, o operador + ocasiona a conversão em string para o número 15. No segundo passo, a expressão "number15" + 3 é avaliada de maneira similar.
```
“number” + 15 + 3 
==> "number15" + 3 
==> "number153"
```

Aqui, vemos que a expressão 15 + 3 é avaliada primeiro. Não há necessidade nenhuma de coerção, já que ambos os operandos são números. No segundo passo, a expressão 18 + 'number' é avaliada e, como um dos operandos é uma string, isso causa a conversão em string.
```
15 + 3 + "number" 
==> 18 + "number" 
==> "18number"
```
Neste exemplo, o operador de comparação &gt; ("maior que") ocasiona em conversão para números de [1] e null .
```
[1] > null
==> '1' > 0
==> 1 > 0
==> true
```

Aqui, vemos que o operador unário + tem maior precedência sobre operador binário +. Assim, a expressão +'bar' é avaliada primeiro. O sinal positivo unário acarreta em conversão em números para a string 'bar'. Como a string não representa um número válido, o resultado é NaN. No segundo passo, a expressão 'foo' + NaN é avaliada.
```
"foo" + + "bar" 
==> "foo" + (+"bar") 
==> "foo" + NaN 
==> "fooNaN"
```

Neste exemplo, o operador == acarreta em uma conversão para números, a string 'true' é convertida em NaN e o booleano true é convertido em 1.
```
'true' == true
==> NaN == 1
==> false

false == 'false'   
==> 0 == NaN
==> false
```

Aqui, temos que o operador == geralmente causa a conversão em número, mas esse não é o caso com null. null iguala somente a null ou a undefined e mais nada.
```
null == ''
==> false
```

O operador !! converte ambas as strings, 'true' e'false', em booleano, já que elas não são strings vazias. Então, == apenas verifica a igualdade de dois booleanos true sem nenhuma coerção.
```
!!"false" == !!"true"  
==> true == true
==> true
```


O operador == ocasiona em uma conversão em número para um array. O método de arrays valueOf() retorna o próprio array, sendo ignorado porque não é um tipo primitivo. O método de array toString() converte ['x'] na string 'x'.
```
['x'] == 'x'  
==> 'x' == 'x'
==>  true
```

O operador + acarreta a conversão em número para []. O método de array valueOf() é ignorado, porque retorna o próprio array, o qual é não primitivo. O método de array toString retorna uma string vazia.
No segundo passo, a expressão '' + null + 1 é avaliada.
```
[] + null + 1  
==>  '' + null + 1  
==>  'null' + 1  
==> 'null1'
```

Os operadores lógicos || e && coagem os operandos para booelano, mas retornam os operandos originais (não booleanos). 0 é falso, enquanto '0' é verdadeiro, porque é uma string não vazia. O objeto vazio {} é também verdadeiro.
```
0 || "0" && {}  
==>  (0 || "0") && {}
==> (false || true) && true  // internamente
==> "0" && {}
==> true && true             // internamente
==> {}
```

Nenhuma coerção é necessária, pois ambos os operandos têm o mesmo tipo. Como == verifica a identidade do objeto (e não sua igualdade) e como os dois arrays são instâncias diferentes, o resultado é false.
```
[1,2,3] == [1,2,3]
==>  false
```

Todos os operandos são valores não primitivos. Assim, + começa pela esquerda, desencadeando a conversão em número. O método valueOf de Object e de Array retorna o próprio objeto, sendo, então, ignorado. toString() é usado como substituto. O truque aqui é que, primeiro, {} não é considerado um objeto literal, mas uma declaração em bloco, sendo ignorado. A avaliação começa com a próxima expressão +[], que é convertida em uma string vazia através do método toString() e, então, para 0 .
```
{}+[]+{}+[1]
==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1'
```

Este exemplo abaixo é melhor explicado passo a passo de acordo com a precedência de operador.
```
!+[]+[]+![]  
==> (!+[]) + [] + (![])
==> !0 + [] + false
==> true + [] + false
==> true + '' + false
==> 'truefalse'
```

O operador - acarreta em conversão em números para Date. Date.valueOf() retornando o número de milissegundos desde a epoch do Unix.
```
new Date(0) - 0
==> 0 - 0
==> 0
```

O operador + acarreta em um conversão padrão. Date assume a conversão em string como padrão. Então, o método toString() é usado em vez de valueOf().
```
new Date(0) + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'
```

### Referência:
[Coercao de tipos em JavaScript](https://www.freecodecamp.org/portuguese/news/coercao-de-tipo-em-javascript-explicada/)
