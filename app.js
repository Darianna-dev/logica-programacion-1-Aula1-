// let numeroSecreto = 6;
let numeroSecreto1 = [1,2,3,4,5,6,7,8,9,10];
let numeroMaxPosible = 100;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 5;
let numAleatorio = Math.random(numeroSecreto1) * numeroMaxPosible;
let numeroSecreto= Math.ceil(numAleatorio);

// console.log(numeroUsuario);
console.log(numAleatorio);
console.log(numeroSecreto);


while (numeroUsuario !== numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaxPosible} por favor:`));

        if (numeroUsuario === numeroSecreto) {
            alert(`Felicidades, Acertaste el número Secreto ( ${numeroSecreto} ) y lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : "intentos"}`);
            break;
        } else if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor que el que has introducido'); 
            } else {
                alert('El numero secreto es mayor que el que has introducido');
            } 
                
            intentos ++;
        
            if (intentos > maxIntentos ){
                alert(`Lo siento, llegaste al máximo de los intentos ${intentos} y el número secreto era el: ${numeroSecreto}`);
                break;
            }
    
    
}

