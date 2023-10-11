/* Comandos de Repetição 
Instruções para realiozar ações  por uma quantidade especifica de vezes.

Comandos tradicionais:
-while                       -> ENQUANTO 
-do/while                    -> FAÇA ENQUANTO
-for                         -> PARA

Obs: normalmente o loop é controlado através de uma variavel contadora.*/


// let contador = 1;
// while( contador <= 5) {
//     console.log (`Valor de contador: ${contador}`);
//     contador++; // ++ incremento
// }



//EXEMPLO DO /WHILE  (FAÇA/ENQUANTO)
let contador = 10;
do {
    console.log(`Contador vale: ${contador}`);
    contador++;

} while (contador <=3 )


/* obs: normalmente variaveis de controle de repetição são chamadas de i,j ou k */

//EXEMPLO FOR (PARA)
/* for(let i= 1; i <= 10; i++){
    console.log(`i vale ${i}`);
} */

/* Loop com array */
let clientes = [
    "Ozzy",
    "Dio",
    "Gillan",
    "Martin",
    "Hughes",
    "Fulano",
    "Beltrano"

];

//"Cache/Memoria" da quantidade de elementos do array
let quantidade = clientes.length


for(let i = 0; i < clientes.length; i++ ) {
    console.log(`Cliente ${clientes[i]}`);

}

