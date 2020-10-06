//Destructuring

let a, b;

[a, b] = [1, 2];    //* il primo valore viene assegnato ad a, il secondo a b
console.log(a); //*1
console.log(b); //*2


let [c, d] = [1, 2];
console.log(c);
console.log(d);


//grazie ad argument mi prende N parametri
function summ(arg1, arg2, arg3, arg4){

    return [].reduce.call(arguments,(a, b) => a+b);
}
console.log(summ(2,4,3));

//*DEstrutturare Array
//Se volessi passare Quattro argometni di default usando un array...
let arr = [40, 60, 120, 220];
//come posso usare i valori di questo array dentro la funzione che non si aspetta un array come argomento???
//destutturando l'array
console.log(summ(...arr));  






//DEstrutturare Oggetti

let obj = { name:'Davide', lastname:'Russo'};

//metto la var che voglio prendere prima dall'oggetto, Seguita da quella a cui voglio assegnare il nome
//quando destrutturiamo un oggetto la variabile che riceverà il valore della proprietà deve essere dopo i due punti
let { name : Nome , lastname : Cognome} = obj;

// console.log(Nome);
// console.log(Cognome);


let ilNome, ilCognome;
({ name : ilNome , lastname : ilCognome} = 
{name:'Giovanni', lastname:'Desiderio'});   //In questo caso name viene assegnato a: ilNome, e lastname a ilCognome


// console.log(ilNome);
// console.log(ilCognome);


({ name , lastname } = {name:'nome assegnato direttamente', lastname:'gimme five'});   //assegnazione diretta
console.log(name);
console.log(lastname);





