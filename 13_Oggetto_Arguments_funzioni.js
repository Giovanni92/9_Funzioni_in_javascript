
function calcolaOperazioneRichiesta(operazione, parametro1, parametro2) {
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    //posso semplificare il code qua sopra con:
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

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

calcolaOperazioneRichiesta('divisione', 2, 3, 4 , 5 , 6);   // con argument posso passare qualsiasi parametro  oltre a quelli definiti
                                                    //col costrutto arguments posso accedere a ogni argomento
