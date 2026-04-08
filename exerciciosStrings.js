// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.
const ask = require('readline-sync');

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome
let name = ask.question("Digite seu nome completo: ");
console.log(name,":", "Seu nome tem", name.length, "caracteres");

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas
let askPhrase = ask.question("Digite uma frase falada: ");
console.log(askPhrase.toUpperCase(), "e ", askPhrase.toLowerCase());

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços
let store = "  Socorram-me! Subi no onibus em Marrocos!      ";
console.log(store);
console.log(store.trim());
console.log(store.length, store.trim().length);

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.
let fruits = ("Maça, Banana, Pessego, Manga e Abacaxi");
let userEnter = ask.question("Digite uma fruta qualquer: "); 
console.log(fruits.includes(userEnter));

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.
let phrase = ask.question("Digite outra frase: ");
let toReplace = ask.question("Digite uma palavra para substituir: ");
let toRepalce2 = ask.question("Digite uma nova palavra para substituicao: ");
console.log(phrase.replaceAll(toReplace, toRepalce2));

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string
let x = 10;
let y = 11;
console.log(`Eu tenho 10 reais, minha namorada tem mais 11. No total temos: ${x + y} `);

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof
let type = ask.question("Digite um valor qualquer: ");
console.log(`O valor digitado eh ${type} e o tipo desse valor eh um ${typeof(type)}`);

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase
let phrase1 = ask.question("Digite uma palavra: ");
let phrase2 = ask.question("Digite outra palavra: ");
console.log(`Sua palavra ${phrase1} junto com ${phrase2} fica ${phrase1 + phrase2}. O tamanho total da frase fica: ${phrase1.length + phrase2.length}`);

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.


