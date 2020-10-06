
// default arguments rest parameters

function isGreater(param1, param2) {
    param1 = param1 || 0;
      param2 = param2 || 0;
    return param1>param2;
};

console.log(isGreater(10,3));


//in ES6 possiamo usare un altra dicitura
function isGreater2(param1 = 0, param2 = 0) {   //* gli diamo questo parametro di default = 0, cosi da non dover ricorrere agli OR nelle righe successive
      console.log(param1, param2)
    return param1>param2;
};

console.log(isGreater(1,3));

//nel caso un parametro di default non gli viene assegnato un valore, questo risulta undefined




//Definizione di Rest

//per fare una funzione che ricevesse più parametri avrei potuto fare così
function calcola(operation) {

    var a = Array.prototype.slice.call(arguments, 1);
    console.log(a);

}

//Usando Rest . . .
// il resto dei parametri mettilo qua che verrebbero passati come array
function calcola2(operation, ...a) {

    console.log(a);

}

calcola('+', 2,3,4,5,6,7,8,9);
calcola2('+', 2,3,4,5,6,7,8,9); //usando rest da lo stesso output, prendendomi in ingresso n argomenti






//usando rest per più param
function calcola3(operation, ...a) {

    return a.reduce(function (x, y){    //per ogni param eseguimi questa funzione
              return eval(x + operation + y);   //eval esegue codice js
    });
}

var res = calcola3('+',10,20,30,40);
console.log(res);