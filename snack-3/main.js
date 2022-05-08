// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

/*---------------------------
    FUNCTIONS
----------------------------*/
/*
    restituisce vero se il numero passato per argomento è pari
    restituisce false se il numero passato per argomento è dispari
*/
function isEven(num) {
    if( num % 2 === 0 ) {
        return true;
    }
    return false;
}
/*
    restituisce un numero random in un range min e max
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*
    restituisce una lista di numeri random
*/
function getRandomNumbersList(nElements, min, max) {
    const numbers = [];
    for(let i = 0; i < nElements; i++) {
        numbers.push(getRandomNumber(min, max));
    }
    return numbers;
}