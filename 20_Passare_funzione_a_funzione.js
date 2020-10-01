
//Funzioni come parametro

//valore di tipo oggetto
//una funzione quando viene passata a un altra dfunzione viene passata per riferimento
//se modifico la funzione all'interno della fuinzione chiamante, questa funzone viene modificata


// function outPutObject (obj) {

//     for(var i in obj) {
//         console.log(i+'='+obj[i]);
//     }
// }

// function processObject(myObject, callback) {

//     callback(myObject);
//         callback.testFunction = function() {
//             console.log('Chiamato testFunction');
//         }
// }

// var objTest = { name:'Test', lastName:'Test', age:44 } ;

// processObject(objTest, outPutObject);


// outPutObject.testFunction();





function square( value){

    return Math.sqrt( value);
}


console.log(square(5));