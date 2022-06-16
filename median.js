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
function calculateMedian(list){
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

/* Funcion que muestra en HTML lista recorrida */
function printList(array) {
    var pResultSum = ``;

    for (let i = 0; i < array.length; i++) {
        pResultSum += `<li class="list-item"> ${ array[i] } </li>`;
    }

    const pResult = document.getElementById("UlResult");
    pResult.innerHTML = pResultSum;
}

var list = [];

/* Funcion que muestra en HTML elem agregado a la lista, tambien lo inserta en lista */
function onClickButtonAddElem() {
    const inputElem = document.getElementById("InputElem");
    const elem = Number(inputElem.value);

    //Si se ingresó un elem
    if (elem) {
        //Añade elem al array
        list.push(elem);

        //Muestra en HTML lista recorrida con elem agregado
        printList(list);
        
        //Limpia el formulario(input)
        document.getElementById("Form").reset();
    }
}

/* Funcion que borra ultimo elem de lista */
function onClickButtonDeleteLastElem() {
    list.pop();

    //Muestra en HTML lista recorrida con elem borrado
    printList(list);
}

/* Funcion que reinicia lista */
function onClickButtonRestartList() {
    list = [];

    //Muestra en HTML lista recorrida(vacia)
    printList(list);

    const pResult = document.getElementById("PResult");
    pResult.innerText = "";
}

/* Funcion que muestra en HTML la mediana */
function onClickButtonMedian() {
    const median = Number(calculateMedian(list).toFixed(2));

    const pResult = document.getElementById("PResult");
    pResult.innerText = "La mediana de tu lista es: " + median;
}