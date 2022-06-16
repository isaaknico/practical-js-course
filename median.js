/* Funcion que valida si una lista es par */
function isPair(list) {
    if (list.length % 2 === 0) {
        //Es par
        return true;

    } else {
        //Es impar
        return false;
    }
}

/* Funcion que calcula la mediana */
function median(list){
    let median;

    //Funcion de comparacion para .sort
    function compare(a, b) {
        return a - b;
    }

    //Ordena la lista de forma ascendente
    const orderedList = list.sort(compare);

    const halfLengthList = orderedList.length / 2;

    if (isPair(orderedList)) {
        //Es par
        //toma los 2 numeros del medio
        middleFirstPosition = orderedList[halfLengthList - 1];
        middleSecondPosition = orderedList[halfLengthList];

        //saca promedio
        median = (middleFirstPosition + middleSecondPosition) /2;

    } else {
        //No es par
        //toma el numero del medio
        middlePosition = parseInt(halfLengthList);

        median = orderedList[middlePosition];
    }

    return median;
}