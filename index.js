let boton=document.getElementById('enviar');
let seArrastra=false;



boton.addEventListener('click', agregarNota);


/*
function cambiarFondo(){
    let fondo = docudiferenciaClickElementoXment.getElementById('cuerpo');
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

        nuevoElemento.addEventListener('mousedown', (e) =>{
            seArrastra=true;
            diferenciaClickElementoX = e.clientX - nuevoElemento.getBoundingClientRect().left;
            diferenciaClickElementoY = e.clientY - nuevoElemento.getBoundingClientRect().top;
            
            nuevoElemento.style.zIndex=0;

            console.log("posicion del mouse en X: "+diferenciaClickElementoX+" y posicion Y:"+diferenciaClickElementoY) 
            /*console.log("clientX "+e.clientX)
            console.log("funcion del elemento"+nuevoElemento.getBoundingClientRect().left)*/
        })

        nuevoElemento.addEventListener('mousemove',(e)=>{
        console.log(seArrastra);
        if(seArrastra==true){

            const nuevaPosicionX = e.pageX - diferenciaClickElementoX;
            const nuevaPosicionY = e.pageY - diferenciaClickElementoY;
            // Asigna la nueva posición al elemento
            nuevoElemento.style.left = nuevaPosicionX + 'px';
            nuevoElemento.style.top = nuevaPosicionY + 'px';
    }
})

document.addEventListener('mouseup', () =>{ //un pu
    seArrastra=false;
    /*
    nuevoElemento.style.left = nuevaPosicionX + 'px';
    nuevoElemento.style.top = nuevaPosicionY + 'px';*/
})

        let posicion=document.getElementById('cuerpo');

        posicion.appendChild(nuevoElemento);


        contenidoNota.value='';
    }
}











/*
function mover(){

}

        
document.addEventListener('mousedown', (Coordenadas) =>{    //un punto cuando va para abajo y otro cuando va para arriba para generar la linea

    const mouseX = Coordenadas.clientX;
    const mouseY = Coordenadas.clientY;
    //console.clear(); // Limpiar la consola para una salida más limpia
    console.log(`Coordenadas del mouse: x=${mouseX}, y=${mouseY}`);

    let punto = document.createElement('div');

    // Asignar una clase al nuevo elemento
   
    let posicion=document.getElementById('cuerpo');
    
    punto.style.left= mouseX+ "px";
    punto.style.top= mouseY +"px";
    punto.className = 'punto';

    posicion.appendChild(punto);

})
*/
/*
document.addEventListener('mouseup', (Coordenadas) =>{ //un pu

    const mouseX = Coordenadas.clientX;
    const mouseY = Coordenadas.clientY;
    //console.clear(); // Limpiar la consola para una salida más limpia
    console.log(`Coordenadas del mouse: x=${mouseX}, y=${mouseY}`);

    let punto = document.createElement('div');

    // Asignar una clase al nuevo elemento
   
    let posicion=document.getElementById('cuerpo');
    
    punto.style.left= mouseX+ "px";
    punto.style.top= mouseY +"px";
    punto.className = 'punto';

    posicion.appendChild(punto);

})

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