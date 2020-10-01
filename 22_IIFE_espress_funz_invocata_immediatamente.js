
//IMMEDIATELY INVOKED FUNCTION EXPRESSION

// function iife() {
//     console.log('test');
// }

// console.log(typeof iife);   //*typeof function

//avvolgendo la funzione tra le tonde la trasformo in IIFE, una volta eseguita la funzione non esiste più, non è più visibile
(
    function iife() {
    console.log('test');
}

)();

//Questa sintassi si usa quando non si vuole contaminare l'oggetto window o creare effetti collaterali suil codice, creando un luogo privato dove creare variabili che non intacchino l'esterno

console.log(typeof iife);   //*typeof undefinied