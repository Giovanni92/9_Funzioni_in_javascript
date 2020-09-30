
//Come creare una funzione

//In modo dichiarativo
// function MyFunc(argomenti) { //istruzione;  return valore};

//Come espressione
// var myFunc = function(MyFunc(argomenti) { istruzione; return valore;}

//Con la funxzione Function (SCONSIGLIATO)
// Function : Function(argomenti, 'Corpo della funzione');




//Dichiarare una funzione

// function test(){

// }

// //invochiamo la funzione
// console.log(test());    //* ritorna undefined


function saluto(){
    console.log('heilà');

    return 'Ciao Mondo';
}

// saluto();   //*heilà

// console.log(saluto());  //* heilà Ciao Mondo


var result = saluto();
console.log(result);    //*heilà Ciao Mondo
