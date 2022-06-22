// HELPERS
function isPair(number) {
    return (number % 2 === 0);
}

/* Funcion que calcula mediana */
function medianSalary(array) {
    var median = 0;
    const half = parseInt(array.length / 2);
    
    if (isPair(array.length)) {
        const medianA = array[half - 1];
        const medianB = array[half];

        median = (medianA + medianB) / 2;
        return median;
    } else {
        median = array[half];
        return median;
    }
}

// Mediana general
const salariesOfCol = colombia.map(function (person) {
    return person.salary;
});

const salariesOfColSorted = salariesOfCol.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
});

console.log(medianSalary(salariesOfColSorted));