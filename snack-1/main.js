//1. Creo un'array vuoto
const numbers = [];
//2. Chiedi all'utente un numero da inserire nell'array
//3. Continua a chiedere FINTANTOCHé la somma dei numeri all'interno è minore di 50
let somma = 0;
do {
    let userNumbers = Number(prompt("Inserisci un numero"));
    console.log (userNumbers);
    numbers.push (userNumbers);
    somma += userNumbers 
} while (somma < 50);

console.log (numbers);
console.log (somma);


