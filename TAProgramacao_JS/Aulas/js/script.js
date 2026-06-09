// primeiro algoritmo de js

//declaração de variáveis: indicamos ao código que tem uma caixa nova que pode utilizar
// let name = "Natana";

//mostra, através de um popup
// alert("Olá " + name + ". Boa sorte para o curso!");

// alert("Olá mundo!");

// ------------------------------------------------------------------

// perguntar ao user
// let name = prompt("Qual é o teu nome?");

// alert("Olá " + name);

// trabalhar a info dada pelo user (console no inspect)
// console.log("Nome: " + name);

// -----------------------------------------------------

// let number = 100;
// let string = "Curso UI/UX";

// console.log(typeof number);

// -----------------------------------------------------

// let email = prompt("Email");
// console.log(email.toLowerCase().trim());

// ----------------------------------------------------

// NUMBERS
//EX.1
// let num1 = 50;
// let num2 = 20;

//EX.2 - Transformar inputs (que são strings, em números)
// let num1 = Number(prompt("Indique o número 1"));
// let num2 = Number(prompt("Indique o número 2"));

// alert("A soma é " + (num1 + num2));

//EX.3
// let testNumber = 10;

// // alert(testNumber + 5); //Como é apenas número não precisa outro parentesis

// testNumber++;
// testNumber++; // Mostra 12 porque vai somando 1 cada vez que aparece

// alert(testNumber);

// ----------------------------------------------------

// COMPARAÇÕES
// alert(58 < 0); //mostra false

// ----------------------------------------------------

//PROCESSO DE DECISÃO
// let name = prompt("Qual seu nome?");

// console.log(name);

// if (name != "" && name) {
//   alert("Olá " + name);
// } else {
//   alert("olá USER. Por favor, coloque seu nome.");
// }

// let userAge = prompt("Qual a sua idade?");

// if (userAge >= 18) {
//   alert("Acesso permitido");
// } else {
//   alert("Acesso negado");
// }

// let num1 = Number(prompt("Numero 1:"));
// let num2 = Number(prompt("Numero 2:"));
// let op = prompt("Operação (+, -, * ou /):");

// if (op == "+") {
//   alert(num1 + num2);
// } else if (op == "-") {
//   alert(num1 - num2);
// } else if (op == "*") {
//   alert(num1 * num2);
// } else if (op == "/") {
//   alert(num1 / num2);
// } else {
//   alert("Essa operação não existe");
// }

// ----------------------------------------------------

//ciclos de repetição: while
// let userCode = prompt("qual é o código secreto?");

// while (userCode != "jsrocks") {
//   userCode = prompt("código errado. Qual é o código secreto?");
// }

// alert("parabéns!");

// let count = 0;

// // alert(count++);
// // alert(count++);
// // alert(count++);
// // alert(count++);
// // alert(count++);
// // alert(count++);

// while (count < 6) {
//   alert(count++);
// }

// let count = 0;
// let userCount = Number(
//   prompt("quantas vezes queres repetir? Insira um número de 1 a 10"),
// );

// if (userCount < 1 || userCount > 10) {
//   alert("número fora do permitido");
// } else {
//   while (count >= userCount) {
//     alert(count++);
//   }
// }

// //ciclo for para contar de 0 a 5
// for (let count = 0; count <= 5; count++) {
//   alert(count);
// }

// //ciclo for para contar de 0 a 25 de 5 em 5
// for (let count = 0; count <= 25; count = count + 5) {
//   alert(count);
// }

//  __________ DECLARAR FUNÇÕES __________
function sayHello() {
  alert("Hello Word!! 👋🏻");
}

//chamar a função
// sayHello();

function calculadora() {
  let num1 = Number(prompt("Numero 1:"));
  let num2 = Number(prompt("Numero 2:"));
  let op = prompt("Operação (+, -, * ou /):");

  if (op == "+") {
    alert(num1 + num2);
  } else if (op == "-") {
    alert(num1 - num2);
  } else if (op == "*") {
    alert(num1 * num2);
  } else if (op == "/") {
    alert(num1 / num2);
  } else {
    alert("Essa operação não existe");
  }
}

function greet(firstName, lastName) {
  alert(`Olá, ${firstName} ${lastName[0]}`);
}

//  __________ ARRAYS __________

let students = ["Karol", "Alessandra", "Marcos", "Natana", "Magali"]; //fora da função para várias funções poderem aceder

function getStudents() {
  // CICLO TRADICIONAL
  // for (let i = 0; i < students.length; i++) {
  //   console.log(i + " - " + students[i]);
  // }

  alert("Alunos na consola");
  for (let i = 0; i < students.length; i++) {
    console.log(i + 1 + " - " + students[i]);
  }

  //CICLO JS FOR
  // for (let item of students) {
  //   console.log("O aluno é " + item);
  // }
}

function avisos() {
  alert("A " + students[4] + " faltou.");
  alert("A turma tem " + students.length + " alunos.");
}

function manipularStudents() {
  //   students[2] = "Marcos Leal";

  // Tornar abstracto
  // let index = prompt("Qual o index a alterar?");
  // let nome = prompt("Qual o novo nome?");
  // students[index] = nome;

  // Adicionar ao Fim
  // let nome;

  // while (nome != "fim") {
  //   nome = prompt("Qual aluno quer adicionar?");
  //   if (nome != "fim") {
  //     students.push(nome);
  //   }
  // }

  //Remover do início
  students.pop();
}

//variáveis
let nomeVar = "teste";

//funções
function nomeFuncao() {
  ///...
}

//arrays
let nomeArray = ["teste", "teste 1"];

//objectos
let infoCurso = {
  name: "Desenvolvimento UI/UX",
  hours: 950,
};

function matObjectos() {
  let infoCurso = {
    name: "Desenvolvimento UI/UX",
    hours: 950,
    active: true,
    modules: ["Programação Web", "TAP", "Teoria de Design", "Inglês"],
  };

  //alterar o nome do curso
  //perguntar ao user
  let userNameCourse = prompt("Qual o nome o curso?");
  infoCurso.name = userNameCourse;

  //perguntar ao user o modulo a acrescentar
  let newModule = prompt("Qual é o nove modulo?");
  infoCurso.modules.push(newModule);

  alert(
    "o curso de " + infoCurso.name + " tem a duração de " + infoCurso.hours,
  );

  alert("O Diogo ensina " + infoCurso.modules[2]);
  console.log(infoCurso);
}
