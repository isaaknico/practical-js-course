/* Define la lista del usuario */
var list = [];

/*** Funciones de calculo ***/
/* Funcion que valida si la lista es par */
function isPair(list) {
    if (list.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/* Funcion que calcula el promedio */
function calculateArithmeticMean(list) {
    /* Escrito de otra forma:
    // Suma los elems del array con ciclo For
    let sumList = 0;
    for (let i = 0; i < list.length; i++) {
        sumList += list[i];
    } */

    // Suma los elems del array
    const sumList = list.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    const averageList = sumList / list.length;
    
    return averageList;
}

/* Funcion que calcula la mediana */
function calculateMedian(list){
    let median;

    // Funcion de comparacion para .sort
    function compare(a, b) {
        return a - b;
    }

    // Ordena la lista de forma ascendente
    const orderedList = list.sort(compare);

    const halfLengthList = orderedList.length / 2;

    if (isPair(orderedList)) {
        // Toma los 2 numeros del medio
        middleFirstPosition = orderedList[halfLengthList - 1];
        middleSecondPosition = orderedList[halfLengthList];

        median = (middleFirstPosition + middleSecondPosition) /2;

    } else {
        // Toma el numero del medio
        middlePosition = parseInt(halfLengthList);

        median = orderedList[middlePosition];
    }

    return median;
}

/* Funcion que calcula la moda */
function calculateMode(list) {
    // Define el objeto donde se guardará el num y las veces que aparece ese num en nuestro array.
    const countList = {};

    // Cuenta cuantas veces aparece cada numero
    list.map(function(elem) {
        if (countList[elem]) {
            countList[elem] += 1;
        } else {
            countList[elem] = 1;
        }
    });

    // Convierte el obj generado en un array de arrays y Ordena el array de menos a mas repetido
    const countListSortedArray = Object.entries(countList).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    /* Escrito de otra forma:
    //Convierte el obj generado en un array de arrays 
    const countListArray = Object.entries(countList);
    //Ordena el array de menos a mas repetido
    const orderAsc = countListArray.sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    );  */

    //Guarda el elem mas repetido y Obtiene valor de moda
    const modeElem = countListSortedArray[countListSortedArray.length - 1];
    const mode = modeElem[0];

    return mode;
}

/* Funcion que calcula la media cuadrática (rms) */
function calculateRms(list) {
    // Eleva al cuadrado cada elemento
    const squaredList = list.map(function(elem) {
        return elem**2;
    });

    // Suma todos los elementos
    const sum = squaredList.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    const division = sum / list.length;
    const rms = Math.sqrt(division);

    return rms;
}


/*** Funciones de interaccion con HTML: ***/
/* Funcion que muestra en HTML lista recorrida */
function printList(array) {
    var pResultSum = ``;

    for (let i = 0; i < array.length; i++) {
        pResultSum += `<li class="list-item"> ${ array[i] } </li>`;
    }

    const pResult = document.getElementById("UlResult");
    pResult.innerHTML = pResultSum;
}

/* Funcion que muestra en HTML elem agregado a la lista, tambien lo inserta en lista */
function onClickButtonAddElem(array) {
    const inputElem = document.getElementById("InputElem");
    const elem = Number(inputElem.value);

    //Si se ingresó un elem
    if (elem) {
        //Añade elem al array
        array.push(elem);

        //Muestra en HTML lista recorrida(con elem borrado)
        printList(array);

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
        document.getElementById("Form").reset();
    }
}

/* Funcion que borra ultimo elem de lista */
function onClickButtonDeleteLastElem(array) {
    array.pop();

    //Muestra en HTML lista recorrida(con elem borrado)
    printList(array);

    const pResult = document.getElementById("PResult");
    pResult.innerText = "";
}

/* Funcion que reinicia lista */
function onClickButtonRestartList(array) {
    //array = [];
    array.length = 0;

    // Muestra en HTML lista recorrida(vacia)
    printList(array);

    const pResult = document.getElementById("PResult");
    pResult.innerText = "";
}

/* Funcion que muestra en HTML el resultado del calculo de promedio, etc. */
function onClickButtonCalculate(array) {
    const average = Number(calculateArithmeticMean(array).toFixed(2));
    const median = Number(calculateMedian(array).toFixed(2));
    const mode = Number(calculateMode(array));
    const rms = Number(calculateRms(array).toFixed(2));

    const pResult = document.getElementById("PResult");
    /*pResult.innerText = "El promedio de tu lista es: " + average + "." +
    "La mediana de tu lista es: " + median + "." +
    "La moda de tu lista es: " + mode + "." +
    "El RMS de tu lista es: " + rms + "."; */
    pResult.innerHTML = `
        <div class="result__item">
            <p>El promedio es:</p>
            <span>${average}</span>
        </div>
        <div class="result__item">
            <p>La media es:</p>
            <span>${median}</span>
        </div>
        <div class="result__item">
            <p>El promedio ponderado es:</p>
            <span>${rms}</span>
        </div>`;
    
}

/**** Tabs ****/
function showStatistics() {
    const actualTab = document.getElementById("tab-statistics");
    actualTab.classList.add("active");

    const tabWeighted = document.getElementById("tab-weighted");
    tabWeighted.classList.remove("active");

    const actualContent = document.getElementById("content-statistics");
    actualContent.classList.remove("hidde");

    const contentWeighted = document.getElementById("content-weighted");
    contentWeighted.classList.add("hidde");
}

function showWeighted() {
    const tabStatistics = document.getElementById("tab-statistics");
    tabStatistics.classList.remove("active");

    const actualTab = document.getElementById("tab-weighted");
    actualTab.classList.add("active");

    const contentStatistics = document.getElementById("content-statistics");
    contentStatistics.classList.add("hidde");

    const actualContent = document.getElementById("content-weighted");
    actualContent.classList.remove("hidde");
}