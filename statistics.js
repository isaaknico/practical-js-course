/* Define la lista del usuario */
var list = [];

/* Ejemplo:
var list = [1, 2, 4, 5]; */

function isPair(list) {
    if (list.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateArithmeticMean(list) {
    const sumElems = list.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    const averageList = sumElems / list.length;
    
    return averageList;
}

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
    // Convierte el obj generado en un array de arrays 
    const countListArray = Object.entries(countList);
    // Ordena el array de menos a mas repetido
    const orderAsc = countListArray.sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    );  */

    // Guarda el elem mas repetido y Obtiene valor de moda
    const modeElem = countListSortedArray[countListSortedArray.length - 1];
    const mode = modeElem[0];

    return mode;
}

function calculateRms(list) {
    // Eleva al cuadrado cada elemento
    const squaredList = list.map(function(elem) {
        return elem**2;
    });

    const sumElemsSquared = squaredList.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    const division = sumElemsSquared / list.length;
    const rms = Math.sqrt(division);

    return rms;
}


function printList(array) {
    var targetTagResult = "";
    var targetTagContent = "";
    var tagFullContent = ``;

    switch (array) {
        case list:
            targetTagResult = "PResult";
            targetTagContent = "UlResult";
            for (let i = 0; i < array.length; i++) {
                tagFullContent += `<li class="list-item"> ${ array[i] } </li>`;
            }
            break;
        case notes:
            targetTagResult = "PResultWM";
            targetTagContent = "UlResultWeightedMean";
            for (let i = 0; i < array.length; i++) {
                tagFullContent += 
                `<li class="list-weighted-mean__item">
                    <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--left"> ${ array[i].note } </span>
                    <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--right"> ${ array[i].credit } </span>
                </li>`;
            }
            break;
        default:
            break;
    }
    
    var tagResult = document.getElementById(targetTagResult);
    tagResult.innerText = "";
    var tagContent = document.getElementById(targetTagContent);
    tagContent.innerHTML = tagFullContent;
}

/* Funcion que borra ultimo elem de lista */
function onClickButtonDeleteLastElem(array) {
    array.pop();

    printList(array);
}

/* Funcion que reinicia lista */
function onClickButtonRestartList(array) {
    //array = [];
    array.length = 0;

    printList(array);
}

/* Funcion que agrega elem en lista y muestra en HTML lista  */
function onClickButtonAddElem() {
    const inputElem = document.getElementById("InputElem");
    const elem = Number(inputElem.value);

    //Si se ingresó un elem
    if (elem) {
        list.push(elem);

        printList(list);
        
        //Limpia el formulario(input)
        document.getElementById("Form").reset();
    }
}

/* Funcion que muestra en HTML el resultado del calculo de promedio, etc. */
function onClickButtonCalculate() {
    const average = Number(calculateArithmeticMean(list).toFixed(2));
    const median = Number(calculateMedian(list).toFixed(2));
    const mode = Number(calculateMode(list));
    const rms = Number(calculateRms(list).toFixed(2));

    const pResult = document.getElementById("PResult");
    pResult.innerHTML = `
        <div class="result__item">
            <p>El promedio es:</p>
            <span>${ average }</span>
        </div>
        <div class="result__item">
            <p>La media es:</p>
            <span>${ median }</span>
        </div>
        <div class="result__item">
            <p>La moda es:</p>
            <span>${ mode }</span>
        </div>
        <div class="result__item">
            <p>El promedio cuadrático(RMS) es:</p>
            <span>${ rms }</span>
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