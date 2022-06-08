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