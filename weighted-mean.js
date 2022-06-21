/* Define la lista de calificaciones de los examenes del usuario */
var notes = [];

/* Ejemplo: (test no es obligatorio)
var notes = [
    {test: 'first', note: 6, credit: 2},
    {test: 'second', note: 5, credit: 2},
    {test: 'third', note: 3, credit: 2},
    {test: 'final', note: 7, credit: 4}
]; */

function calculateWeightedMean(array) {
    // Multiplica cada nota por su ponderacion(créditos)
    const weightedNotes = array.map(function(noteObject) {
        return noteObject.note * noteObject.credit;
    });

    const sumOfWeightedNotes = weightedNotes.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    const sumOfWeighteds = array.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.credit;
    }, 0);

    const weightedMean = sumOfWeightedNotes / sumOfWeighteds;

    return weightedMean;
}


/* Funcion que agrega elem en lista(notes) y muestra en HTML lista  */
function onClickButtonAddElemWM() {
    const inputValue = document.getElementById("InputValue");
    const value = Number(inputValue.value);
    const inputWeight = document.getElementById("InputWeight");
    const weight = Number(inputWeight.value);

    // Si se ingresó un elem
    if (value && weight) {
        // Crea obj de calificacion
        const objNote = { note: value, credit: weight }

        notes.push(objNote);

        printList(notes);
        
        // Limpia el formulario(input)
        document.getElementById("FormWeightedMean").reset();
    }
}

/* Funcion que muestra en HTML el resultado del calculo de promedio ponderado */
function onClickButtonCalculateWeightedMean() {
    const wm = Number(calculateWeightedMean(notes).toFixed(2));

    const pResult = document.getElementById("PResultWM");
    pResult.innerHTML = `
        <div class="result__item">
            <p>El promedio ponderado es:</p>
            <span>${ wm }</span>
        </div>`;
}