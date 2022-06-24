/* Define lista de salario del usuario */
let salaryData = [];

// salaryData.push({
//     entry: 1500,
//     date: "Junio - 22"
// });

// HELPERS
function isPair(number) {
    return (number % 2 === 0);
}

function mapAndSort(array) {
    const salaries = array.map(function(elem) {
        return elem.entry;
    });
    
    const salariesOrdered = salaries.sort(function(salaryA, salaryB) {
        return salaryA - salaryB;
    });

    return salariesOrdered;
}

function medianSalary(array) {
    const half = parseInt(array.length / 2);
    var median = 0;
    
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

// Array debe estar ordenado
function medianSalaryTop10(array) {
    const spliceStart = parseInt((array.length * 90) / 100);
    const spliceCount = array.length - spliceStart;
    
    const salariesTop10 = array.splice(spliceStart, spliceCount);
    console.log({
        salariesTop10, spliceStart, spliceCount});
    const medianTop10 = medianSalary(salariesTop10);
    return medianTop10;
}

function printList(array) {
    var targetTagResult = "";
    var targetTagContent = "";
    var tagFullContent = ``;

    switch (array) {
        case salaryData:
            targetTagResult = "p_result";
            targetTagContent = "ul_result-median-salary";
            for (let i = 0; i < array.length; i++) {
                tagFullContent +=   `<li class="list-weighted-mean__item">
                                        <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--left"> $ ${ array[i].entry } </span>
                                        <span class="list-weighted-mean__sub-item list-weighted-mean__sub-item--right"> ${ array[i].date } </span>
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

/* Funcion que agrega elem en lista(notes) y muestra en HTML lista  */
function onClickButtonAddElemMS() {
    const inputEntry = document.getElementById("input_entry");
    const entry = Number(inputEntry.value);
    const inputDate = document.getElementById("input-date");
    const date = inputDate.value;

    // Si se ingresó un elem
    if (entry) {
        // Crea obj de calificacion
        const objNote = { entry: entry, date: date }

        salaryData.push(objNote);

        printList(salaryData);///////imprimir lista salarios
        
        // Limpia el formulario(input)
        document.getElementById("form_median-salary").reset();
    }
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

function onClickButtonCalculateMedianSalary() {
    const salariesOrdered = mapAndSort(salaryData);

    const medianGeneral = medianSalary(salariesOrdered);

    const pResult = document.getElementById("p_result");
    pResult.innerHTML = `La mediana salarial es: $ ${ medianGeneral }`;
}

function onClickButtonCalculateMedianSalaryTop10() {
    const salariesOrdered = mapAndSort(salaryData);

    const medianTop10 = medianSalaryTop10(salariesOrdered);

    const pResult = document.getElementById("p_result");
    pResult.innerHTML = `La mediana salarial del top 10% es: $ ${ medianTop10 }`;
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