const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

btn.addEventListener('click', sumarInputValues);


    function sumarInputValues(event) {

        console.log({event});
    //    En este caso no hacemos preventDefauld
        
        console.log(parseInt(input1.value) + parseInt(input2.value));

        const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
        pResult.textContent = "Resultado: " + sumaInputs;
       

        // TODO buscar javaScript event o eventos o addEventListener  
        
        // Frond End 
        // Interactuar con el Usuario y Comunicarte con backEnd
    }