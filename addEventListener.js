// Cómo escuchar eventos en JS. La idea es que html nos proporcione la información y JS se encargue de escuchar los eventos y ejecutar las funciones que nosotros le indiquemos.

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const pResult = document.querySelector('#resultado');

form.addEventListener('submit', btnOnClick);
// A la función no se le coloca parentesis,el mismo método addEventListener coloca los paréntesis, sólo necesitamos colocar el nombre descriptivode la función

// Cuando addEventListener escuche lo que sea de submit, le va a enviar como argumeto un "event" y la función btnOnClick() vaq a poder recibir como parámetro un evento, normalmente llamado "e" o "event"

// Puedes llamar el argumento como quieras en la función, pero normalmente se le llama "e" o "event"
// event tiene muhas propiedades y entre ellas preventDefauld, lo puedes ver en el console.log

    function btnOnClick(padreEvento) {

        console.log({padreEvento});
        padreEvento.preventDefault();
        
        console.log(parseInt(input1.value) + parseInt(input2.value));

        const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
        pResult.textContent = "Resultado: " + sumaInputs;
        // puedo colocar innerText o textContent
        }