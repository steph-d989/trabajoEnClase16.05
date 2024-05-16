/*1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente' */

let nota1 = parseInt(prompt('Ingresa la primera nota: '));
let nota2 = parseInt(prompt('Ingresa la primera nota: '));
let nota3 = parseInt(prompt('Ingresa la primera nota: '));

function sacarPromedio(nota1, nota2, nota3){
    let promedio = Math.round((nota1+nota2+nota3)/3);
    let resultado;
    if(promedio>=7){
        resultado = "SOBRESALIENTE"
    }else if(promedio<=5){
        resultado = "SUSPENSO"
    }else{
        resultado = "APROBADO"
    }
    return resultado;
}
console.log(sacarPromedio());