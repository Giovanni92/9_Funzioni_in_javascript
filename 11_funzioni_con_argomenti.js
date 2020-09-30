//Funzioni con argomenti

//param o argomento hours
function hoursToSeconds ( hours) {
    var ore = +hours || 0;   //*var visibile SOLO all'interno della funzione, se non passiamo argomenti da default ci da 0.
                             //metto '+' vicino a hours per fargli fare il cast del valore a num, se non pupo' essere convertito a numero ritorna zero

    if( ore<=0) {
        alert('valore non valido');
        0;
    }
    return ore * 3600;
}

var result = hoursToSeconds(24);    
console.log(result);    //*86400

var result2 = hoursToSeconds();
console.log(result2);   //*0

var result3 = hoursToSeconds('test');
console.log(result3);   //*0