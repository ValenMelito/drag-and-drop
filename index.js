let boton=document.getElementById('enviar');
let seArrastra=false;



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
        nuevoElemento.addEventListener('mousedown', a);

        let posicion=document.getElementById('sectorDeNotas');

        posicion.appendChild(nuevoElemento);


        contenidoNota.value='';
    }
}




/*
notasMovibles.addEventListener('mousedown', (e) =>{
    seArrastra=true;
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    console.log("posicion del mouse en X: "+offsetX+" y posicion Y:"+offsetY) 
})

notasMovibles.addEventListener('mousemove',(e)=>{

})


function mover(){

}

document.addEventListener('mousedown',mover(e))

    function mover(e){
        let posicionX = e.clientX - offsetX + 'px';
        let posicionY = e.clientY - offsetY + 'px';

        console.log("posicion del mouse en X: "+posicionX+" y posicion Y:"+posicionY) 
    }*/

        
document.addEventListener('mousedown', (Coordenadas) =>{

    const mouseX = Coordenadas.clientX;
    const mouseY = Coordenadas.clientY;
    //console.clear(); // Limpiar la consola para una salida más limpia
    console.log(`Coordenadas del mouse: x=${mouseX}, y=${mouseY}`);

    let punto = document.createElement('div');

    // Asignar una clase al nuevo elemento
   
    let posicion=document.getElementById('cuerpo');

    punto.style.top= mouseY +"px";
    punto.style.left= mouseX+ "px";
    punto.className = 'punto';

    posicion.appendChild(punto);



})
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