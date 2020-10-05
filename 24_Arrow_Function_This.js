
//ARROW FUNCTION , THIS

var arr = [2, 3, 5, 6, 7, 8, 8, 10, 11, 16];

//filter passa una funzione per ogni elemento dell'array
var arrEven = arr.filter(function(valore){
    return valore%2 ==0;    //* ritorna solo num pari 

});

console.log(arrEven);

//Uso arrow function per chiamare funzione come sopra
arrEven = arr.filter( valore => valore%2 ==0);

console.log(arrEven);

//Uso funzione array Map che mappa ogni elemento della funxzione
console.log(arrEven.map( valore => valore*2));

//riduce tutti gli elementi di un array
console.log(arrEven.reduce( (val1, val2) => val1*val2) );   //* fa la mooltiplicazione di tutti i valori iniziali dell'arrayEven [2, 6, 8, 8, 10, 16 ] 


console.log(arrEven.reduce( (val1, val2) => val1+val2) );   //* somma di tutti gli elementi di arrayEven









//arrow function, This - Parte 2


var obj = {
    name: 'Gio',    //*prooprietà: name
    myName : 'Test Giovanni',

    displayName : function(){   
        console.log(this.myName);   //*se chiamiamo la variabile this.myName nella funzione padre, questa viene trovata
            //PROBLEMA: Questa funzione 'figlia' crea il proprio this, che non è il this dell'Oggetto ma della funzione. Infatti cercandola nello scope della fuinxzione e non trovandola la da come undefined
            setTimeout( function(){

                console.log('output=' +this.myName);    //*in questo caso l'output da output=undefined
            }, 1000)    //1000 ms = 1s
    }
};

obj.displayName();


//Come si risolve il problema qui sopra che il this dentro la funzione figlia di quella padre dell'oggetto viene vista come undefined
var objSoluzione = {
    name: 'Gio',    
    myName : 'Test Giovanni',

    displayName : function(){ 
                //cosi da non confonedere il this dell'oggetto dal this della funzione
                var self = this;    
            setTimeout( function(){

                console.log('output=' +self.myName);    //* RISOLTO: Ora l'output della funzione è uguale alla variabile che fa riferimento all' oggetto
            }, 1000)    //1000 ms = 1s
    }
};

obj.displayName();
objSoluzione.displayName();







//Con ArrowFunction     es6 
var objSoluzione2 = {
    name: 'Gio',    
    myName : 'Test ArrowFUnction',

    displayName : function(){ 
                // var self = this;    //Con la arrow function si preserva il this, quindi in questa funzione anonima si preserva il this del suo scope.
                                        //In questo caso lo scope di questa funzione anonima è objSoluzione2
            setTimeout(() => console.log(this.myName), 1000)
            } //1000 ms = 1s
    };      

objSoluzione2.displayName();

//le arrow function non hanno un this proprio e non hanno arguments ma SOLO arguments degli argomenti che vengono passati
//Sono utili per processare array e dentro gli scope quando si perde il this dell'oggetto


