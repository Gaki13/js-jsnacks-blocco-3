//1. Fai inserire un numero all'utente, che chiameremo N
number = Number(prompt("Inserisci il numero di array che vuoi creare"));

//2. Genera N array, ognuno composto da 10 numeri tra 1 e 100
for ( let i = 0; i < number; i++ ){
    const arr = [];
    for ( let i = 0; i < 10; i++ ){
        const number = Math.floor(Math.random() * 100) + 1;
        arr.push(number);
    }
}

//3. Ogni array creato, stampalo a schermo
