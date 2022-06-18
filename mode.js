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