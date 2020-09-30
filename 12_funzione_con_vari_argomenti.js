
function calcolaSomma(numero1, numero2){
    return numero1+numero2;

}

var resultSomma = calcolaSomma(1, 1);
console.log(resultSomma);

var result91 = calcolaSomma('Ciao', 'Mondo');
console.log(result91);    //*CiaoMondo
                          //*Siccome le var all'interno della dir possono ripetersi, quelle con nome== le precedo con numero lezione/modulo
                        


function calcolaOperazioneRichiesta(operazione, parametro1, parametro2) {
    switch (operazione) {
        case 'somma':
            return parametro1 + parametro2;
            break;
        case 'sottrazione':
            return parametro1 - parametro2;
            break;
        case 'moltiplicazione':
            return parametro1 * parametro2;
            break;
        case 'divisione':
            return parametro1 / parametro2;
                break;
    }
}

console.log(calcolaOperazioneRichiesta('divisione', 2,3));
