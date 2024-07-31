
# Convertendo uma string para um número em JavaScript


> Métodos para Converter uma String em um Número em JavaScript.
> Métodos para Converter uma String em um Número em JavaScript: conheça o `Number()`, `parseInt()` e `parseFloat()`.

### Introdução
Ao lidar com programação em JavaScript, muitas vezes nos deparamos com a necessidade de converter uma string em um número. Felizmente, a linguagem possui diversos métodos para realizar essa conversão de forma simples e eficiente. Nesta seção, exploraremos alguns desses métodos e como utilizá-los em nosso código.


### O método Number()
O primeiro método que vamos discutir é o Number(). Essa função global do JavaScript permite converter uma string em um número. Ela pode ser usada de forma direta, apenas passando a string como argumento. Por exemplo:
```
let numeroString = "42";
let numero = Number(numeroString);
console.log(numero); // 42
```

### O método parseInt()
Outro método muito utilizado é o parseInt(). Ele é usado para converter uma string em um número inteiro. O parseInt() recebe dois argumentos principais: a string a ser convertida e a base numérica que deve ser considerada. Por exemplo:
```
let numeroString = "42";
let numero = parseInt(numeroString);
console.log(numero); // 42
```
Caso a string não seja um número válido, o parseInt() irá retornar NaN (Not-a-Number). É importante considerar esse caso ao utilizar esse método.


### O método parseFloat()
Já o método parseFloat() tem a finalidade de converter uma string em um número de ponto flutuante. Ele é especialmente útil quando precisamos lidar com valores decimais. Veja um exemplo:
```
let numeroString = "3.14";
let numero = parseFloat(numeroString);
console.log(numero); // 3.14
```
A função parseFloat() também pode ser usada para converter strings que contenham apenas números inteiros, retornando o número com um ponto decimal.

A Função parseFloat() em JavaScript e sua Utilidade para Conversão de String para Número
A função parseFloat() é extremamente útil para converter strings em números, especialmente quando se trata de operações matemáticas ou manipulação de valores decimais. Além disso, ela pode ser aplicada em diferentes contextos, como a conversão de entradas do usuário em formulários.

Uma das principais vantagens da parseFloat() é a sua capacidade de manipular números decimais. Por exemplo, se tivermos uma string contendo o valor “3.14”, a função irá converter corretamente para o número 3.14.

Outro ponto importante é que a parseFloat() ignora caracteres não numéricos após o primeiro ponto encontrado na string. Isso pode ser útil quando precisamos extrair valores de campos de texto que podem conter informações adicionais, como “R$ 10,00”. Nesse caso, a parseFloat() retornaria apenas o valor numérico relevante, desconsiderando o símbolo de moeda.

No entanto, é fundamental ter em mente que a função parseFloat() pode gerar resultados inesperados em alguns cenários. Por exemplo, se a string a ser convertida não iniciar com um número válido, a função irá retornar NaN. Portanto, sempre verifique se a string é uma entrada válida antes de realizar a conversão.


Considerações Importantes ao Converter uma String para um Número em JavaScript
Ao trabalhar com a conversão de strings em números em JavaScript, é relevante estar atento a algumas considerações importantes. Esses pontos ajudarão a garantir que o processo de conversão seja realizado de maneira adequada e eficiente.

Verifique se a string é um número válido antes de realizar a conversão. Utilize funções como isNaN() para validar a entrada, evitando assim resultados inesperados.

Considere utilizar as funções parseInt() ou parseFloat() de acordo com a necessidade do seu código. A escolha correta irá garantir a conversão adequada do tipo de número desejado.

Esteja atento a caracteres não numéricos e símbolos não relevantes que possam estar presentes na string. Eles podem interferir na conversão e gerar resultados indesejados.

Utilize as variáveis adequadas para armazenar o resultado da conversão. Por exemplo, se a string será convertida para um número inteiro, utilize uma variável do tipo int. Caso seja um número de ponto flutuante, prefira variáveis do tipo float ou double.

Evite concatenar números em formato de string e realizar operações matemáticas posteriormente. Isso pode levar a erros de cálculo devido às diferenças de comportamento entre strings e números.

### Em resumo, 
a conversão de strings para números em JavaScript é uma tarefa comum e fundamental em muitos cenários de programação. Apostar nos métodos Number(), parseInt() e parseFloat() é uma maneira eficiente de realizar essa conversão de forma precisa e confiável. No entanto, é importante estar atento a considerações específicas para garantir resultados corretos e evitar problemas no código.
#

## Utilizando a Função parseInt() para Converter uma String em um Número Inteiro em JavaScript

A função parseInt() é amplamente utilizada em JavaScript para converter uma string em um número inteiro. Ela permite extrair apenas a parte inteira de uma string, ignorando qualquer informação após o ponto decimal ou quaisquer caracteres não numéricos. A seguir, exploraremos como utilizar essa função de forma eficiente e algumas considerações importantes.
Para utilizar a função parseInt(), basta passar a string que se deseja converter como argumento. Por exemplo:
```
let numeroString = "42";
let numero = parseInt(numeroString);
console.log(numero); // 42
```

No exemplo acima, a string “42” é convertida para o número 42 utilizando a função parseInt(). É importante destacar que, por padrão, a função parseInt() considera a base 10 para a conversão.
No entanto, é possível especificar a base numérica desejada utilizando o segundo argumento da função. Por exemplo:
```
let hexaString = "A";
let numeroHexa = parseInt(hexaString, 16);
console.log(numeroHexa); // 10
```
Nesse caso, a string “A”, que representa o número na base hexadecimal, é convertida para o número 10.

É importante salientar que ao utilizar a função parseInt(), devemos estar atentos a possíveis erros de conversão. Se a string não contiver um número válido, a função irá retornar NaN, que significa “Não é um número” em inglês. Portanto, é recomendado realizar uma verificação utilizando a função isNaN() para garantir que a string seja um número válido antes de efetuar a conversão

#
## Considerações Importantes ao Converter uma String para um Número em JavaScript
Ao lidar com a conversão de uma string para um número em JavaScript, existem algumas considerações importantes a serem levadas em conta. É essencial entender essas considerações para evitar erros ou resultados indesejados em seu código. A seguir, apresentamos alguns pontos relevantes a serem lembrados:

Valide a string antes da conversão: Antes de aplicar a conversão, verifique se a string contém um número válido. Isso pode ser feito utilizando a função isNaN() para garantir que a string seja numérica antes de iniciar o processo de conversão. Dessa forma, você evita erros e resultados inesperados.

Entenda a diferença entre os métodos parseInt() e parseFloat(): É crucial entender a diferença entre essas duas funções. parseInt() é usado para converter uma string em um número inteiro, enquanto parseFloat() lida com números de ponto flutuante. Certifique-se de selecionar o método apropriado, dependendo do tipo de número que você deseja obter.

Considere a base numérica: Ao usar a função parseInt(), lembre-se de que ela permite especificar a base numérica na qual a string está escrita. A base padrão é 10, mas você pode passar um segundo argumento para definir a base desejada. Certifique-se de escolher a base correta para evitar resultados inesperados.

Cuidado com caracteres não numéricos: É recomendado cuidado ao lidar com strings que possam conter caracteres não numéricos. Esses caracteres podem interferir na conversão e resultar em NaN. Utilize funções de validação e limpeza de dados para garantir que a string esteja em um formato adequado antes de realizar a conversão.

Armazene o resultado em variáveis adequadas: Ao converter uma string para um número, certifique-se de armazenar o resultado em uma variável apropriada. Por exemplo, se a string será convertida para um número inteiro, utilize uma variável do tipo int. Se for um número de ponto flutuante, prefira variáveis do tipo float ou double. Utilizar as variáveis corretas irá garantir que você possa manipular o número adequadamente em seu código.

### Em resumo…
 A conversão de uma string para um número em JavaScript é um procedimento comum e útil em muitos cenários. Utilizando as funções parseInt() e parseFloat(), é possível realizar essa conversão com facilidade. No entanto, é essencial estar atento às considerações mencionadas acima para garantir resultados corretos e evitar erros em seu código JavaScript. Lembre-se de validar a string antes da conversão, entender a diferença entre os métodos parseInt() e parseFloat(), considerar a base numérica e lidar adequadamente com caracteres não numéricos. Com essas práticas, você estará preparado para realizar conversões precisas e confiáveis em seu código.



### Referência
[Convertendo uma String em Numero](https://awari.com.br/javascript-convert-string-to-number-convertendo-uma-string-para-um-numero-em-javascript/)
