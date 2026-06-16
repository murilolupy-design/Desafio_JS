// Desafio 02 - Média da turma

/* 
    Crie um array com 5 notas
    - utulize um loop para
        - Somar todas as Notas
        - Calcular Média
    
    Mostrar no console/output o seguinte:
    Média da turma:  10.0
*/

const notas = [ 8, 9, 8, 10, 7];

let soma = 0;

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Média da turma: ", media);