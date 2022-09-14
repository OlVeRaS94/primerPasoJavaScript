console.log("hola mundo");



//comentario linea

/*comentario multilinea*/


let nombre = "Toni";

console.log("Estoy en la linea 12 y nombre vale", nombre);


nombre = "Pepe";


console.log("estoy ahora en la linea 18 y nombre vale", nombre);




let nombre2 = ("mi me  gusta beber");

let nombre3 = ("zumo de melocoton");


console.log("A", nombre2, "un", nombre3);



function Sumar(Numero1, Numero2) {

    let resultado = Numero1 + Numero2;

    return resultado;
}

console.log(Sumar(3, 7))




function resta(Numero1, Numero2) {

    let resultado = Numero1 - Numero2;
    return resultado;
}

console.log(resta(5, 8));


console.log(resta(70, 1));
console.log(resta(3, 58));

console.log(resta(10, 2) + Sumar(2, 9));


console.log(resta(10, 2) - Sumar(2, 9));

function modulo(a, b) {

    let resultadoModulo = a / b;
    return resultadoModulo;


}

console.log(modulo(10,5));




let mensaje = "Hola k ase?";


console.log(mensaje);