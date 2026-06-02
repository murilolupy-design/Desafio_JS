// Desafio 011 - Cadastro de Pessoas

/* 
  Crie um objeto chamado pessoa contendo:
  - nome;
  - idade:
  - cidade;

  Após a criação:
  - Altere a idade;
  - adicione uma profissão
  - remova a cidade

  No fim, exiba o objeto final.
  
*/

const perfil ={
    Nome: "Joair",
    idade: 100,
    Municipio: "Guaraniaçu"

}

perfil.idade = 43;
perfil.profissão = "mecânico";

delete perfil.Municipio;

frase = `Perfil:
Nome do usuário: ${perfil.Nome}.
Idade do usuário: ${perfil.idade}.
Profissão de usuário: ${perfil.profissão}.`;

console.log(frase);