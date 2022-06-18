/* Define lista de usuario */
var list = [];

/* Funcion que calcula la moda */
function calculateMode(list) {
    //Cuenta las veces que aparece cada numero en nuestro array y las guarda en un objeto.
    const countList = {};

    list.map(function(elem) {
        if (countList[elem]) {
            countList[elem] += 1;
        } else {
            countList[elem] = 1;
        }
    });

    //Convierte el obj generado en un array de arrays y Ordena el array de menos a mas repetido
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

    //Guarda el elem mas repetido
    const modeElem = countListSortedArray[countListSortedArray.length - 1];

    //Obtiene valor de moda
    const mode = modeElem[0];

    return mode;
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

/* Funcion que muestra en HTML la moda */
function onClickButtonMode() {
    const mode = Number(calculateMode(list));

    const pResult = document.getElementById("PResult");
    pResult.innerText = "La moda de tu lista es: " + mode;
}