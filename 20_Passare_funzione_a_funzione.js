
//Funzioni come parametro

//valore di tipo oggetto
//una funzione quando viene passata a un altra dfunzione viene passata per riferimento
//se modifico la funzione all'interno della fuinzione chiamante, questa funzone viene modificata

//riceve un oggetto e lo cicla
function outputObject(obj) {

    for ( var i in obj) {
        console.log(obj[i]);
    }
}

//riceve un oggetto da processare e riceve una funzione di 'callback'
function processObject(myObject, callback) {

    callback(myObject); //* chiama callback e le passa l'oggetto
}

//dichiariamo un oggetto
var objTest = { name:'Crash', surname:'Bandicoot', age: 20};

//chiamiamo processObject, che riceverà come primo parametro l'oggetto objTest e come secondo parametro una funzione di 'callback', una funzione che processObject chiamerà
processObject(objTest, outputObject);



//Function Scope explained

/* Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. 
However, a function can access all variables and functions defined inside the scope in which it is defined.
In other words, a function defined in the global scope can access all variables defined in the global scope.
 A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
// The following variables are defined in the global scope */


// var num1 = 20,
//     num2 = 3,
//     name = 'Chamahk';


// // This function is defined in the global scope
// function multiply() {
//     return num1 * num2;
//   }

//   multiply(); // Returns 60


// // A nested function example
// function getScore() {
//     var num1 = 2,
//         num2 = 3;

//         function add() {
//             return name + ' scored ' + (num1 + num2);
//         }
    
//         return add();
// }

// getScore(); // Returns "Chamahk scored 5"
  



