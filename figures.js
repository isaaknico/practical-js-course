//console.log("Hola mundo");

// ##### Código del Cuadrado ##### 
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// ##### Código del triángulo ##### 
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();


// ##### Código del circulo ##### 
console.group("Circulos");
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI + ".");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    const perimetro = diametro * PI;
    return parseFloat(perimetro.toFixed(2));
}

function areaCirculo(radio) {
    const area = PI * (radio**2);
    return parseFloat(area.toFixed(2));
}
console.groupEnd();


//Aquí interactuamos con el HTML

function hablar(texto){
    var utterance = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(utterance);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    hablar("El perímetro del cuadrado es de " + perimetro + " cm");
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El perimetro es: " + perimetro + " cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El área es: " + area + " cm^2";
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const lado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = "El perímetro es: " + perimetro + " cm";
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBaseTriangulo");
    const base = Number(inputBase.value);
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(base, altura);
    
    const resultado = document.getElementById("resultadoTrianguloArea");
    resultado.innerHTML = "El área es: " + area + " cm^2";
}

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const diametro = diametroCirculo(radio);

    const resultado = document.getElementById("resultadoCirculo");
    resultado.innerHTML = "El diametro es: " + diametro + " cm";
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const perimetro = perimetroCirculo(radio);
    
    const resultado = document.getElementById("resultadoCirculo");
    resultado.innerHTML = "El perímetro es: " + perimetro + " cm";
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const area = areaCirculo(radio);

    const resultado = document.getElementById("resultadoCirculo");
    resultado.innerHTML = "El área es: " + area + " cm^2";
}


/**** RETO  ****/
// Durante este taller aprendimos a calcular el área y perímetro de un triángulo
// conociendo la longitud de sus 3 lados y también su altura.

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

function alturaTriangulo(base, lado1, lado2) {
    if (lado1 == lado2 && lado1 == base) {
        console.log("es equilaterov2");
        const altura = Math.sqrt((lado1**2) - ((lado1 / 2)**2));
        return Number(altura.toFixed(2));
    } else if (lado1 == lado2 || lado1 == base || lado2 == base ) {
        console.log("es isocelesv2");
        console.log("puede ser rectangulov2");
        const altura = Math.sqrt((lado1**2) - ((base**2 / 4)));
        return Number(altura.toFixed(2));
    } else {
        console.log("es escalenov2");
        console.log("puede ser rectangulov2");
        const semiperimetro = (lado1 + lado2 + base) / 2;
        console.log(semiperimetro);
        const altura = (2 / base) * Math.sqrt(semiperimetro * (semiperimetro - base) * (semiperimetro - lado1) * (semiperimetro - lado2));
        return Number(altura.toFixed(2));
    }
}

function calcularAlturaTriangulo() {
    const inputBase = document.getElementById("InputBaseTriangulo");
    const base = Number(inputBase.value);
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const lado2 = Number(inputLado2.value);

    const altura = alturaTriangulo(base, lado1, lado2);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = "La altura es: " + altura + "cm";
}

/* Tabs */
function showSquare() {
    const actualTab = document.getElementById("tab-square");
    actualTab.classList.add("active");

    const tabTriangle = document.getElementById("tab-triangle");
    tabTriangle.classList.remove("active");

    const tabCircle = document.getElementById("tab-circle");
    tabCircle.classList.remove("active");

    const contentSquare = document.getElementById("content-square");
    contentSquare.classList.remove("hidde");

    const contentTriangle = document.getElementById("content-triangle");
    contentTriangle.classList.add("hidde");

    const contentCircle = document.getElementById("content-circle");
    contentCircle.classList.add("hidde");
}

function showTriangle() {
    const tabSquare = document.getElementById("tab-square");
    tabSquare.classList.remove("active");

    const actualTab = document.getElementById("tab-triangle");
    actualTab.classList.add("active");

    const tabCircle = document.getElementById("tab-circle");
    tabCircle.classList.remove("active");

    const contentSquare = document.getElementById("content-square");
    contentSquare.classList.add("hidde");

    const contentTriangle = document.getElementById("content-triangle");
    contentTriangle.classList.remove("hidde");

    const contentCircle = document.getElementById("content-circle");
    contentCircle.classList.add("hidde");
}

function showCircle() {
    const tabSquare = document.getElementById("tab-square");
    tabSquare.classList.remove("active");

    const tabTriangle = document.getElementById("tab-triangle");
    tabTriangle.classList.remove("active");

    const actualTab = document.getElementById("tab-circle");
    actualTab.classList.add("active");

    const contentSquare = document.getElementById("content-square");
    contentSquare.classList.add("hidde");

    const contentTriangle = document.getElementById("content-triangle");
    contentTriangle.classList.add("hidde");

    const contentCircle = document.getElementById("content-circle");
    contentCircle.classList.remove("hidde");
}