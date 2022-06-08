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
    alert(perimetro);
    hablar("El perímetro del cuadrado es de " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const lado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBaseTriangulo");
    const base = Number(inputBase.value);
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;

    const area = areaCirculo(radio);
    alert(area);
}