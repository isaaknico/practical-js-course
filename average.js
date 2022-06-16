/* Funcion que calcula el promedio de una lista(array) */
function calculateArithmeticMean(list) {
    // Iterando y sumando los elems del array con ciclo For
    // let sumList = 0;

    // for (let i = 0; i < list.length; i++) {
    //     sumList += list[i];
    // }

    // Iterando y sumando los elems del array con .reduce()
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list.length;
    
    return averageList;
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

        /** Muestra en HTML elem agregado a la lista **
        const ulResult = document.getElementById("UlResult");
        const liResult = document.createElement("li");
        const liText = document.createTextNode(elem);
        
        liResult.appendChild(liText);
        ulResult.appendChild(liResult);

        liResult.classList.add("list-item");

        Desventajas:
        --Al eliminar un elem la lista se queda impresa en el HTML
        fin **/
        
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

/* Funcion que muestra en HTML el promedio */
function onClickButtonAverage() {
    const average = Number(calculateArithmeticMean(list).toFixed(2));

    const pResult = document.getElementById("PResult");
    pResult.innerText = "El promedio de tu lista es: " + average;
}