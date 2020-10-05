
//FAT ARROW FUNCTION

var test = function(){
 return 1;
} 

//es di arrow function

var test0 = () => {};   //*undefined
var test2 = () => console.log('test2');

var test3 = (arg1, arg2) => console.log(arg1, arg2);

test3(2,3);


//per eseguire piu di uno Statement
var test4 = (arg1, arg2) => {
    console.log(arg1, arg2);
    console.log(arg1, arg2);
    console.log(arg1, arg2);
    console.log(arg1, arg2);
}


//Qunado ritorna un solo argomento, invece che fare così . . .
var test5 = (arg1,arg2) => {
    return arg1*arg2;
}
console.log(test5(2,10));

//facciamo così . . . 
var test6 = (arg1, arg2) => arg1 * arg2;
console.log(test6(3,10));

//se abbiamo più di unna espressione all'interno, dobbiamo esplicitamente mettere il return
var test7 = (arg1,arg2) => {
    console.log(arg1);
    return arg1*arg2*100;
}
console.log(test5(2,10));
console.log(test7(10,10));  //*10000



//riassumendo:
var testSenzaArgomenti = () => 2 + 2;

var testConDueArgomenti = (arg1,arg2) => arg1+arg2;

var testConUnArgomentoSolo = arg1 => arg1*2;

var testConPiuEspressoni = (arg1,arg2) => {
    console.log(arg1);
    return arg1*arg2*100;
}


