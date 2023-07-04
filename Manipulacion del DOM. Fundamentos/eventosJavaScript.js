// Cómo escuchar atributos de Nuestros Usuarios

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const pResult = document.querySelector('#resultado');

function btnOnClick() {

    console.log('Escuchando Evento de clcik');

    // Por defecto los lee como string, para que haga uba suma hay que pasarlos a numero
    console.log(parseInt(input1.value) + parseInt(input2.value));

const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
pResult.textContent = "Resultado: " + sumaInputs;
// puedo colocar innerText o textContent
}