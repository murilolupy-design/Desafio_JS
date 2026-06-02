// Desafio 02 - Média da turma

/* 
    Crie um array com 5 notas
    - utulize um loop para
        - Somar todas as Notas
        - Calcular Média
    
    Mostrar no console/output o seguinte:
    Média da turma:  10.0
*/

let notas = [ 8.5, 9.0, 8.5, 10.0, 7.0];

let somar = 0;

for(resultado = 0; resultado <= notas.length; resultado++) {
    somar =+ notas[resultado];
}