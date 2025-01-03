let nota1 = 9;
let nota2 = 8;
let nota3 = 8;
let media = (nota1 + nota2 + nota3)/3;

// Utilizando a lógica da nota maior da aprovação; depois a nota menor da recuperação e depois a nota de reprovação
if(media> 6.9){
    console.log("Aluno(a) APROVADO(A)!!!  :) ");
} else if (media >= 5){
    console.log("Aluno(a) em RECUPERAÇÃO  :| ");
    
}else{
    console.log("Aluno(a) REPROVADO(A)!  :( ");
}