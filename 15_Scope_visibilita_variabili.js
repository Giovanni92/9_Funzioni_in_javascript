
//PREMESSA: Testa queste funzioni su chrome dev tools o Js Bin

//Variable scope
var userName ='Test primo';
console.log(window.userName);
console.log(userName);  //*sono variabili globali

//Le variabiili dichiarate all'interno della funzione sono viste SOLO all'interno della funzione
function testVar(){
    userName = 'Test2' ;    //dichiaro la var globale userName con il valore test2, che sovrascriverà per reference la prima userName dichiarata di valore 'Test'
    console.log('UserName nella funzione:'+userName);
    console.log('UsernName della variabile globale: ' +window.userName);
}

testVar();