/* Define lista de salario del usuario */
const salaryData = [];

// salaryData.push({
//     entry: 1500,
//     date: "Junio - 22"
// });

// HELPERS
function isPair(number) {
    return (number % 2 === 0);
}


const salaries = salaryData.map(function (elem) {
    return elem.entry;
});

const salariesOrdered = salaries.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
});

function medianSalary() {
    const half = parseInt(salariesOrdered.length / 2);
    var median = 0;
    
    if (isPair(salariesOrdered.length)) {
        const medianA = salariesOrdered[half - 1];
        const medianB = salariesOrdered[half];

        median = (medianA + medianB) / 2;
        return median;
    } else {
        median = salariesOrdered[half];
        return median;
    }
}

function medianSalaryTop10() {
    const spliceStart = parseInt((salariesOrdered.length * 90) / 100);
    const spliceCount = salariesOrdered.length - spliceStart;
    
    const salariesTop10 = salariesOrdered.splice(spliceStart, spliceCount);
    
    const medianTop10 = medianSalary(salariesTop10);
    return medianTop10;
}

function onClickCalculateMedianSalary() {
    const medianGeneral = medianSalary();

    const pResult = document.getElementById("p_result");
    pResult.innerHTML = `La mediana salarial es: ${ medianGeneral }`;
}

function onClickCalculateMedianSalaryTop10() {
    const medianTop10 = medianSalaryTop10();

    const pResult = document.getElementById("p_result");
    pResult.innerHTML = `La mediana salarial del top 10% es: ${ medianTop10 }`;
}

// console.log({
//     generalMedianCol,
//     top10MedianCol,
//     salariesOfColSorted,
//     salariesOfColTop10
// });

/**** Tabs ****/
function showMeanSalary() {
    const actualTab = document.getElementById("tab_mean-salary");
    actualTab.classList.add("active");

    const tabRelationDE = document.getElementById("tab_relation-de");
    tabRelationDE.classList.remove("active");

    const actualContent = document.getElementById("content_mean-salary");
    actualContent.classList.remove("hidde");

    const contentRelationDE = document.getElementById("content_relation-de");
    contentRelationDE.classList.add("hidde");
}

function showRelationDE() {
    const tabMeanSalary = document.getElementById("tab_mean-salary");
    tabMeanSalary.classList.remove("active");

    const actualTab = document.getElementById("tab_relation-de");
    actualTab.classList.add("active");

    const contentMeanSalary = document.getElementById("content_mean-salary");
    contentMeanSalary.classList.add("hidde");

    const actualContent = document.getElementById("content_relation-de");
    actualContent.classList.remove("hidde");
}