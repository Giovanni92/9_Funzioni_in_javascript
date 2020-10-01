
//Function expressions

//metodo classico
// function funcName(){

// }



//funcName();     //ATTENZIONE - Se chiamo una funzione dichiarata con una variabile, non sono soggetto all'HOISTING (fenomeno script di Js che da precedenza all'esecuzione di funzioni)
                //Mi darebbe errore 'funcName is not a function'
testFunctionHoisting();

//es. di dichiarazione funzione ''Anonima''
var funcName = function (){

    console.log('test function');
}

funcName();

//in questo caso testFunc è visibile SOLO all'interno della funzione testFunc e non richiamabile globalmente
var funcName = function testFunc() {

    console.log('testFunk!');
};

//devo utilizzare la variabile per richiamare la funzione testFunc
funcName();


function testFunctionHoisting () {
    console.log('Per effetto dell hoisting, a differenza delle variabili, le funzioni hanno la precedenza di esecuzione anche se sono chiamate nelle righe precedenti ad esse')
}






