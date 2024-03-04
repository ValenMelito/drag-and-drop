let boton=document.getElementById('enviar');

boton.addEventListener('click', agregarNota);

/*
function cambiarFondo(){
    let fondo = document.getElementById('cuerpo');
    fondo.style.backgroundColor = 'red';
}*/

function agregarNota(){
    let contenidoNota = document.getElementById('nota');
    console.log(contenidoNota.value)

    if(contenidoNota.value!=""){
        interiorNota=contenidoNota.value;
        let nuevoElemento = document.createElement('div');

        // Asignar una clase al nuevo elemento
        nuevoElemento.className = 'cuboDeNota';

        nuevoElemento.textContent=contenidoNota.value;
        nuevoElemento.onclick=cambiarFondo;

        let posicion=document.getElementById('sectorDeNotas');

        posicion.appendChild(nuevoElemento);


        contenidoNota.value='';
    }
}



   function a(){
    console.log("aaaa")
   }

    function cambiarFondo(){
        let fondo = document.getElementById('cuerpo');
        let numeroRandom=Math.floor(Math.random() * 999999);
        console.log(numeroRandom);
        fondo.style.backgroundColor = `#${numeroRandom}`;


       
    }