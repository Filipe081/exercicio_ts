"use strict";
// Mutiplicações
const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
};
//saudações
const saudacao = (nome) => {
    return `Olá ${nome}`;
};
//usos
const resultadoMultiplicacao = multiplicar(45, 3);
const mensagemSaudacao = saudacao("Acerto");
console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
