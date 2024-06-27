// Invertir palabra
function InvertirCadena() {
    let palabra = document.getElementById('actividad1').value;
    let palabraR = palabra.split("").reverse().join(""); 
    if (palabraR !== "") {
        alert(palabraR);
    } else {
        alert("No se obtuvo la palabra");
    }
}

// Verificador de números primos
function numeroPrimo() {
    let numero = parseInt(document.getElementById('actividad2').value); 
    if (isNaN(numero) || numero <= 1) {
        alert("No es número primo");
        return;
    }
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }
    alert(contador === 2 ? "Es número primo" : "No es número primo");
}

// Arreglo sin repetir (texto)
function acomodarArreglos() {
    let input = document.getElementById('arreglo').value;
    let arreglo = input.split(',').map(item => item.trim()).filter(item => item !== "");
    let arregloSinDuplicados = [...new Set(arreglo)];
    document.getElementById('resultado').textContent = arregloSinDuplicados.join(', ');
}

// Factorial de un número
function factorial() {
    let numeroF = parseInt(document.getElementById('factorialN').value);
    if (isNaN(numeroF) || numeroF < 0) {
        alert("Introduce un número válido");
        return;
    }
    let multiplicador = 1;
    for (let index = 1; index <= numeroF; index++) {
        multiplicador *= index;
    }
    alert(multiplicador);
}

// Contar vocales de una frase
function contadoVocales() {
    let frase = document.getElementById('frase').value;
    let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contadorVocales = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vocales.indexOf(frase[i]) !== -1) {
            contadorVocales++;
        }
    }
    alert("El número de vocales es: " + contadorVocales);
}

// Sumar los números de un array
function sumarArraysDeNumeros() {
    let arregloNum = document.getElementById('ArrayNumeros').value;
    let array = arregloNum.split(',').map(item => item.trim()).filter(item => !isNaN(item) && item !== "").map(Number);
    if (array.length > 0) {
        let suma = array.reduce((acumulador, num) => acumulador + num, 0);
        alert(suma);
    } else {
        alert("Introduce un arreglo válido de números");
    }
}

// Ver valor máximo de un array
function valorMaxArray() {
    let arregloNum = document.getElementById('ArrayMayor').value;
    let array = arregloNum.split(',').map(item => item.trim()).filter(item => !isNaN(item) && item !== "").map(Number);
    if (array.length > 0) {
        let mayor = Math.max(...array);
        alert(mayor);
    } else {
        alert("Introduce un arreglo válido de números");
    }
}
