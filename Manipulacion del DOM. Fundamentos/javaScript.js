//? Manipulación del DOM desde JavaScript
// Editar o crear nuevos elementos para nuestros HTML desde JavaScript

//? Función querySelector

const h1 = document.querySelector('h1');
// *Es preferible usar querySelector para seleccionar elementos, ya que es más flexible y puedes seleccionar elementos por su id, clase, etiqueta, etc. Funciona como un selector de CSS.


// para seleccionar todos los elementos con el mismo nombre de etiqueta, se usa document.querySelectorAll('etiqueta');
const p = document.querySelector('p');

// también puedes usar document.getElementsByClassName('clase') para seleccionar todos los elementos con la misma clases;
const parrafito = document.querySelector('.parrafito');

// también puedes usar document.getElementById('id'), no es necesario poner el #, tal y como se trabaja el querySelector;
const pid = document.querySelector('#pid');

const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

//? Propiedad innerHTML

h1.innerHTML = 'Patito <br> Bonito';

// Convierte todo a texto
h1.innerText = 'Patito <br> Bonito';

//? Propiedad getAttribute

// Para ver una clase
console.log(h1.getAttribute('pantalla'));

console.log(h1.getAttribute('class'));

// Para modificar los atributos de mi HTML
// Para cambiarlo
h1.setAttribute('class', 'gato');

console.log(h1.getAttribute('class'));

// Propiedad classList
h1.classList.add('loro');
h1.classList.remove('loro');
h1.classList.toggle('loro');
h1.classList.contains('loro');

// Para el input no necesito las otras propiedades, ya que tiene su propia propiedad value
input.value = 'Hola mundo';

//? Crear elementos con JavaScript

const div = document.createElement('div');
console.log(document.createElement('span'));
// js sabe que es una etiqueta y me la crea en la consola

// img tiene todas propiedades 
const img = document.createElement('img');
img.setAttribute('src', 'https://www.nationalgeographic.com.es/medio/2022/12/12/ardilla-2_d0a43045_221212154055_310x310.jpg');
console.log(img);

// A esta función append le envío como argumento la imágen

pid.innerHTML= '';
pid.append(img);
// Con append o appendChild no borra el contenido de nuestro párrafo, sino que lo agrega al final
// Debugin o depurar

