var userName ='Test';

//una funzione dicvhiarata all'interno di una altra dfunzione è visibile SOLO all'interno della fuinzione in cui è dichiarata
function testVar(){

    var userName= 'Prova';

        function internalFunc() {
            var internVar ='2';
            console.log(userName);
            console.log(internVar);
        }
        
        return internalFunc; 
}

//assegno alla variabile la funzione interna a testVar();
var func = testVar();
console.log(func);  //* mi darà in output il corpo della funzione interna di testVar(), internalFunc();

func(); //Anche se testVar() è stata eseguita, func avrà sempre accesso alle sue variabili, questa viene definita come CLOSURE in javascript
        //La funzione internalFunc, che ora ho nella mia variabile ha sempre accesso alle variabili interne di testVar