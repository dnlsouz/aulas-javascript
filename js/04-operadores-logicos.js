"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 3;
let resultado;

/* Operador lógico && (AND - E) */
// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = "aprovado";
// } else {
//     resultado = "reprovado";
// }


// if( mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = 'aprovado';
//     }
//     else if(faltas > limiteDeFaltas){
//         resultado = "reprovado por faltas";
//     }
//     else {
//         resultado = "reprovado"
//     }


if(faltas > limiteDeFaltas){
    resultado = "reprovado por faltas";

} else if (mediaFinal >= mediaMinima ){
    resultado = "aprovado";

} else { resultado = "Reprovado"}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);


console.log("---------------------------------");

/* Operador lógico ||  (OR - OU) */

let diaDaSemana = "domingo"

if(diaDaSemana =="sabado" || diaDaSemana == "domingo") {console.log( "Final de semana 😁");
} else {
    console.log("Vá trabalhar ...");
}

