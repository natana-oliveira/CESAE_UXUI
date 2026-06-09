// EX.1 ___________________________________________________

// * ex. A ________________

// let nota = Number(prompt("Qual a sua nota?"));

// if (nota >= 10) {
//   alert("Aprovado!");
// } else if (nota < 10) {
//   alert("Reprovado");
// } else {
//   alert("Valor da nota inválido");
// }

// * ex. B ________________

// let nota = Number(prompt("Qual a sua nota?"));

// if (nota >= 16) {
//   alert("Excelente!");
// } else if (nota >= 10 && nota < 16) {
//   alert("Aprovado!");
// } else if (nota < 10) {
//   alert("Reprovado");
// } else {
//   alert("Valor da nota inválido");
// }

// EX.2 ___________________________________________________

// let option = Number(
//   prompt(
//     "1. Criar conta \n 2. Consultar saldo \n 3. Sair \n 4. Levantar dinheiro \n Qual opção deseja selecionar?",
//   ),
// );

// switch (option) {
//   case 1:
//     alert("Envie seus documentos para criar a conta");
//     break;
//   case 2:
//     alert("Seu saldo é de ... € ");
//     break;
//   case 3:
//     alert("Obrigada! Até a próxima.");
//     break;
//   case 4:
//     alert("Dinheiro levantado! Até a próxima.");
//     break;
//   default:
//     alert("Opção inválida");
// }

// EX.3 ___________________________________________________

// * ex. A ________________

// let password = prompt("Insira a palavra-passe:");

// while (password != "segredo123") {
//   password = prompt("Palavra-passe errada, tenta novamente");
// }

// alert("Acesso concedido");

// * ex. B ________________

// let password = prompt("Insira a palavra-passe:");

// let attempts = 1;

// while (password != "segredo123" && attempts < 3) {
//   password = prompt("Palavra-passe errada, tenta novamente");
//   attempts++;
// }

// if (password == "segredo123") {
//   alert("Acesso concedido");
// } else {
//   alert("Acesso bloqueado");
// }

// EX.4 ___________________________________________________

// * ex. A ________________

// let number = Number(prompt("Insira um número para saber sua tabuada"));

// for (let i = 1; i <= 10; i++) {
//   let result = number * i;
//   console.log(number + " x " + i + " = " + result);
// }

// * ex. B ________________

// let number = Number(prompt("Insira um número para saber sua tabuada"));
// let limit = Number(prompt("Até que número quer multiplicar?"));

// for (let i = 1; i <= limit; i++) {
//   let result = number * i;
//   console.log(number + " x " + i + " = " + result);
// }

// * ex. C ________________

// let number = Number(prompt("Insira um número para saber sua tabuada"));
// let first = Number(prompt("Insira o número que quer começar a tabuada"));
// let limit = Number(prompt("Insira o número final para a tabuada"));

// for (let i = first; i <= limit; i++) {
//   let result = number * i;
//   console.log(number + " x " + i + " = " + result);
// }

// EX.5 ___________________________________________________

// let option = 0;

// while (option != 3) {
//   option = Number(
//     prompt(
//       "1. Verificar aprovação de um aluno \n 2. Gerar tabuada de um número \n 3. Sair do programa \n Qual opção deseja selecionar?",
//     ),
//   );

//   switch (option) {
//     case 1:
//       let nota = Number(prompt("Qual a sua nota?"));

//       if (nota >= 16) {
//         alert("Excelente!");
//       } else if (nota >= 10 && nota < 16) {
//         alert("Aprovado!");
//       } else if (nota < 10) {
//         alert("Reprovado");
//       } else {
//         alert("Valor da nota inválido");
//       }
//       break;

//     case 2:
//       let number = prompt("Insira um número para saber sua tabuada");

//       for (let i = 1; i <= 10; i++) {
//         let result = number * i;
//         console.log(number + " x " + i + " = " + result);
//       }
//       alert("Resultado na consola");
//       break;

//     case 3:
//       alert("Obrigada! Até a próxima.");
//       break;

//     default:
//       alert("Opção inválida");
//   }
// }
