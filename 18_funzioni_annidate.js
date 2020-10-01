//Variable scope
var userName ='Test';

//una funzione dicvhiarata all'interno di una altra dfunzione è visibile SOLO all'interno della fuinzione in cui è dichiarata
function testVar(){

    var userName= 'Test2';

        //internalFunc è una funzione detta 'PRivilegiata' perchè ha accesso sia alle variabili Globali che a quelle dichiarate all'interno di TestVar();
        function internalFunc() {
            console.log(userName);
        }
        
        internalFunc(); //* devo richiamare la funzione annidata per farla eseguire
}

testVar();

