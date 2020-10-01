//PREMESSA: Descriviamo la funzionalità di LET, che permette alla variabile doi vivere solo all'interno del blocco [ l'insieme delle cose racchiuse tra le parentesi] 
//in cui vi9ene definita



var variable = 2;

function test(){
//  console.log(variable);
 var variable = 22;
}

// console.log(variable);
test();

{
    var test2 = 'tes';
}

//let permette di dichiarare variabili che esistono SOLO all'interno del blocco
for( let i=0; i<4; i++) {
    console.log(i);
}

//se proviamo a chiamare la variabile del blocco di sopra non riusciamo ad accederci (essendoci LET), quindi ci da errore
//  console.log('fuori= ' +i);

{
    let varTest = 5;
    console.log(varTest);
}

// console.log(varTest);   //*non posso accedere alla variabile essendo tipo let dentro al blocco