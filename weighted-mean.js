/* Define calificaciones de los examenes del usuario
const notes = [
    {test: 'first', note: 6, credit: 2},
    {test: 'second', note: 5, credit: 2},
    {test: 'third', note: 3, credit: 2},
    {test: 'final', note: 7, credit: 4}
]; */
const notes = [];

/* Funcion que obtiene Promedio ponderado */
function calculateWeightedMean() {
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

/*** Funciones de interaccion con HTML: ***/
/* Funcion que muestra en HTML lista recorrida */
function printListWM(array) {
    var pResultSum = ``;

    for (let i = 0; i < array.length; i++) {
        pResultSum += `
            <li class="list-weighted-mean__item">
                <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--left"> ${ array[i].note } </span>
                <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--right"> ${ array[i].credit } </span>
            </li>`;
    }

    const pResult = document.getElementById("UlResultWeightedMean");
    pResult.innerHTML = pResultSum;
}

/* Funcion que borra ultimo elem de lista */
function onClickButtonDeleteLastElemWM(array) {
    array.pop();

    //Muestra en HTML lista recorrida(con elem borrado)
    printListWM(array);

    const pResult = document.getElementById("PResultWM");
    pResult.innerText = "";
}

/* Funcion que reinicia lista */
function onClickButtonRestartListWM(array) {
    //array = [];
    array.length = 0;

    // Muestra en HTML lista recorrida(vacia)
    printListWM(array);

    const pResult = document.getElementById("PResultWM");
    pResult.innerText = "";
}

/* Funcion que muestra en HTML elem agregado a la lista, tambien lo inserta en lista */
function onClickButtonAddElemWM(array) {
    const inputValue = document.getElementById("InputValue");
    const value = Number(inputValue.value);
    const inputWeight = document.getElementById("InputWeight");
    const weight = Number(inputWeight.value);

    //Si se ingresó un elem
    if (value && weight) {
        //Crea obj de calificacion
        const objNote = { note: value, credit: weight }

        //Añade elem al array
        array.push(objNote);

        //Muestra en HTML lista recorrida(con elem borrado)
        printListWM(array);

        /* Escrito de otra forma:
        // Muestra en HTML elem agregado a la lista **
        const ulResult = document.getElementById("UlResult");
        const liResult = document.createElement("li");
        const liText = document.createTextNode(elem);
        liResult.appendChild(liText);
        ulResult.appendChild(liResult);
        liResult.classList.add("list-item");
        //Desventajas:
        //--Al eliminar un elem la lista se queda impresa en el HTML-- */
        
        //Limpia el formulario(input)
        document.getElementById("FormWeightedMean").reset();
    }
}

/* Funcion que muestra en HTML el resultado del calculo de promedio, etc. */
function onClickButtonCalculateWeightedMean() {
    const wm = Number(calculateWeightedMean(notes).toFixed(2));

    const pResult = document.getElementById("PResultWM");
    pResult.innerHTML = `
        <div class="result__item">
            <p>El promedio ponderado es:</p>
            <span>${ wm }</span>
        </div>`;
}