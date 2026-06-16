/*
Desafio 03 - Sistema de aprovação

Crie uma função chamada de verificarAluno() que receba:
- nome
- nota

regras:
- Nota maior ou igual a 7 = aprovado
- nota maior ou igual a 5 e menor que 7 = recuperação
- Nota menor que 5 = Reprovado

Exiba uma mensagem informado a situação do aluno.
*/

function verificarAluno(nome, nota) {

if (nota >= 7) {
    console.log(nome + " Aprovado!" );
} else if ( nota >= 5) {
    console.log(nome + " Está em segunda chamada!");
} else ( nota < 5) {
    console.log(nome + " Reprovado!");
}
}
const Murilo = verificarAluno("Murilo", 8);
console.log(Murilo);