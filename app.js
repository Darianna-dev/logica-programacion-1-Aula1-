// let numeroSecreto = 6;
let numeroSecreto1 = [1,2,3,4,5,6,7,8,9,10];
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
let intentos = 1
let numAleatorio = Math.random(numeroSecreto1) * numeroSecreto1.length
let numeroSecreto= Math.ceil(numAleatorio)

console.log(numeroUsuario);
console.log(numAleatorio);
console.log(numeroSecreto);


while (intentos <= 5) {

    if (numeroUsuario == numeroSecreto) {
        alert(`Felicidades, Acertaste el numero. El número Secreto es el: ${numeroSecreto}`);
        break;
    } else if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor que el que has introducido'); 
        if (intentos == 5) {
            alert(`Lo siento , has agotado los intentos, el número secreto era el: ${numeroSecreto}`);
            break;
        }
        numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    } else {
        alert('El numero secreto es mayor que el que has introducido');
        if (intentos == 5) {
            alert(`Lo siento , has agotado los intentos, el número secreto era el: ${numeroSecreto}`);
            break;
        }
        numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    } 

    intentos ++;
    


}

