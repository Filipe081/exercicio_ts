// Mutiplicações
const multiplicar = (numero1: number, numero2: number): number => {
    return  numero1 * numero2
};

//saudações
const saudacao = (nome: string): string => {
    return `Olá ${nome}`;
}

//usos
const resultadoMultiplicacao = multiplicar(45, 3);
const mensagemSaudacao = saudacao("Acerto");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);