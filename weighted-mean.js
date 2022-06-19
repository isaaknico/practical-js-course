/* Funcion que obtiene Promedio ponderado */
function calculateWeightedMean(notes) {
    /* Define calificaciones de los examenes del usuario
    const notes = [
        {test: 'first', note: 6, credit: 2},
        {test: 'second', note: 5, credit: 2},
        {test: 'third', note: 3, credit: 2},
        {test: 'final', note: 7, credit: 4}
    ]; */

    /* Multiplica cada nota por su ponderacion(créditos) */
    const weightedNotes = notes.map(function(noteObject) {
        return noteObject.note * noteObject.credit;
    });

    /* Obtiene la suma de las calificaciones ponderadas */
    const sumOfWeightedNotes = weightedNotes.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });

    /* Obtiene la suma de las ponderaciones(créditos) */
    const initialValue = 0;
    const sumOfWeighteds = notes.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.credit;
    }, initialValue);

    /* Divide calificaciones ponderadas entre suma de las calificaciones ponderadas */
    const weightedMean = sumOfWeightedNotes / sumOfWeighteds;

    return weightedMean;
}