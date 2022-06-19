/* Funcion que obtiene media cuadrática (rms) */
function calculateRms(list) {
    /** Eleva al cuadrado cada elementos */
    const squaredSortedList = sortedList.map(function(elem) {
        return elem**2;
    });

    /** Suma todos los elementos */
    const sum = squaredSortedList.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    /** Divide la suma entre el num de elementos */
    const division = sum / list.length;

    /** Obtiene la raiz cuadrada de la division */
    const rms = Math.sqrt(division);

    return rms;
}