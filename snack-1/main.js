//1. Creo un'array vuoto
const numbers = [];
//2. Chiedi all'utente un numero da inserire nell'array
let somma = 0;
do {
    let userNumbers = Number(prompt("Inserisci un numero"));
    console.log (userNumbers);
    let somma = userNumbers + userNumbers;
    numbers.push (somma)
} while (numbers < 50);

console.log (numbers);


//3. Continua a chiedere FINTANTOCHé la somma dei numeri all'interno è minore di 50