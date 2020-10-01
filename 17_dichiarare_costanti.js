
const name = 'Giovanni';

//costanti hanno la stessa visibilità delle variabili dichiarate con let

{
    //const name = 'Alex';
    // console.log(name);
    // var name = 'Luigi'; //* con var da errore perchè ha visibilità globale
    let name = 'Marcus'
}

console.log(name);


const fruits = ['BANANA', ' PINEAPPLE', 'APPLE'];

//fruits = [1,2,3];   //*mi darebbe errore, invalid assignments

fruits.push('bLUEBERRY');

console.log(fruits);
