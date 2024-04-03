let boton=document.getElementById('enviar');
boton.addEventListener('click', agregarNota);
window.onload=agregarEventos();

let seArrastra=false;

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

        let posicion=document.getElementById('cuerpo');

        posicion.appendChild(nuevoElemento);
        contenidoNota.value='';
        agregarEventos();
    }
}



function agregarEventos(){
    let cubosDeNota=document.querySelectorAll('.cuboDeNota');

    console.log("cuantos hay: "+cubosDeNota.length)
    cubosDeNota.forEach(function(cubito) {
        cubito.addEventListener("click", cambiarFondo); //este es temporal de prueba tengo ideas para hacer en click
        
        cubito.addEventListener('mousedown', (e) =>{
            
            seArrastra=true;
            diferenciaClickElementoX = e.clientX - cubito.getBoundingClientRect().left;
            diferenciaClickElementoY = e.clientY - cubito.getBoundingClientRect().top;
            
            console.log("posicion del mouse en X: "+diferenciaClickElementoX+" y posicion Y:"+diferenciaClickElementoY) 
            /*console.log("clientX "+e.clientX)
            console.log("funcion del elemento"+nuevoElemento.getBoundingClientRect().left)*/
        })

        cubito.addEventListener('mousemove',(e)=>{
        console.log(seArrastra);
        if(seArrastra==true){

            const nuevaPosicionX = e.pageX - diferenciaClickElementoX;
            const nuevaPosicionY = e.pageY - diferenciaClickElementoY;
            // Asigna la nueva posición al elemento
            cubito.style.left = nuevaPosicionX + 'px';
            cubito.style.top = nuevaPosicionY + 'px';
            }
        })

        document.addEventListener('mouseup', () =>{ //un pu
            seArrastra=false;
        }) 
    })
}

    function cambiarFondo(){
        let fondo = document.getElementById('cuerpo');
        let numeroRandom=Math.floor(Math.random() * 999999);
        console.log(numeroRandom);
        fondo.style.backgroundColor = `#${numeroRandom}`;
       
    }