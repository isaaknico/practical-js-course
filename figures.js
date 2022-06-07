//console.log("Hola mundo");

// ##### Código del Cuadrado ##### 
console.group("Cuadrados");

//Lado del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

//Perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

//Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cm²");
console.groupEnd();


// ##### Código del triángulo ##### 
console.group("Triangulos");

//Lados del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);

//Altura del triángulo
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

//Perímetro del triángulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

//Área del triángulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm²");
console.groupEnd();


// ##### Código del circulo ##### 
console.group("Circulos");

//Radio del circulo
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro del circulo
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI + ".");

//Perímetro del circulo
const perimetroCirculo = diametroCirculo * PI;
const perimetroCirculoRedond = parseFloat(perimetroCirculo.toFixed(2));
console.log("El perímetro del circulo es: " + perimetroCirculoRedond + "cm");

//Área del circulo
const areaCirculo = PI * (radioCirculo**2);
const areaCirculoRedond = parseFloat(areaCirculo.toFixed(2));
console.log("El área del circulo es: " + areaCirculoRedond + "cm²");
console.groupEnd();