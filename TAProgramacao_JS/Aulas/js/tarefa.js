// EX.1 ____________________________________________________________________

let userName = prompt("Qual é o teu nome?");

alert("Olá " + userName + "!");

// EX.2 ____________________________________________________________________

let userName = prompt("Nome:");
let userLastName = prompt("Apelido:");

alert(userName + " " + userLastName);

// EX.3 ____________________________________________________________________

let name = "Ana";
let lastName = "Oliveira";
let age = 33;
let email = "ana.oliveira@mail.com";

console.log("Nome: " + name);
console.log("Sobrenome: " + lastName);
console.log("Idade: " + age);
console.log("Email: " + email);

// * ex. 3.1

console.log(
  "Primeira letra do Nome: " +
    name[0] +
    "\nPrimeira letra do Sobrenome: " +
    lastName[0] +
    "\nPrimeiro número da idade: " +
    age.toString()[0],
);

// * ex. 3.2

console.log(
  "Nome: " +
    name +
    " (" +
    name.length +
    ")" +
    "\n" +
    "Sobrenome: " +
    lastName +
    " (" +
    lastName.length +
    ")",
);

// * ex. 3.3

console.log(name.toUpperCase() + " " + lastName.toLowerCase());

// EX.4 ____________________________________________________________________

let n1 = 50;
let n2 = 10;

console.log("Soma = " + (n1 + n2));
console.log("Subtração = " + (n1 - n2));
console.log("Multiplicação = " + n1 * n2);
console.log("Divisão inteira = " + n1 / n2);

// EX.5 ____________________________________________________________________

console.log(Math.random());

// Esse comando gera um número aleatório toda vez que a página é atualizada. É um número entre 0 e 1, e mostra mostra 16 casa decimais depois do "0.".

// EX.6 ____________________________________________________________________

let message = prompt("Escreva um frase:");

console.log(message);

// * ex. 6.1
console.log(message.length);

// * ex. 6.2
console.log(message.toUpperCase());

// * ex. 6.3
console.log(message[message.length - 1]);

// EX.7 ____________________________________________________________________

let price = Number(prompt("Insira o preço do produto: (apenas números)"));
let percentageDiscount = Number(
  prompt("Percentagem de desconto: (apenas números)"),
);

let discount = percentageDiscount / 100;
let discountValue = price * discount;

// * ex. 7.1
console.log("Valor do desconto: " + discountValue);

// * ex. 7.1
console.log("Preço final: " + (price - discountValue));
