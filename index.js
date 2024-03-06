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

    if(contenidoNota.value==""){
        contenidoNota.focus();
    }

    if(contenidoNota.value!=""){
        interiorNota=contenidoNota.value;
        let nuevoElemento = document.createElement('div');

        // Asignar una clase al nuevo elemento
        nuevoElemento.className = 'cuboDeNota';

        nuevoElemento.textContent=contenidoNota.value;
        nuevoElemento.onclick=cambiarFondo;

        let posicion=document.getElementById('centrado');

        posicion.appendChild(nuevoElemento);


        contenidoNota.value='';
    }
}


/*document.addEventListener('mousedown',mover(e))

    function mover(e){
        let posicionX = e.clientX - offsetX + 'px';
        let posicionY = e.clientY - offsetY + 'px';

        console.log("posicion del mouse en X: "+posicionX+" y posicion Y:"+posicionY) 
    }*/

    
 document.addEventListener('mousedown', (posicion) => {
            const mouseX = posicion.clientX;
            const mouseY = posicion.clientY;
            //console.clear(); // Limpiar la consola para una salida más limpia
            console.log(`Coordenadas del mouse: x=${mouseX}, y=${mouseY}`);
        });
/*
document.addEventListener('keydown', (e) => {
    const teclaPresionada= e.key;
    console.log(teclaPresionada);
})*/

   function a(){
    console.log("aaaa")
   }

    function cambiarFondo(){
        let fondo = document.getElementById('cuerpo');
        let numeroRandom=Math.floor(Math.random() * 999999);
        console.log(numeroRandom);
        fondo.style.backgroundColor = `#${numeroRandom}`;
       
    }