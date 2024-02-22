let boton=document.getElementById('enviar');

boton.addEventListener('click', agregarNota);

/*
function cambiarFondo(){
    let fondo = document.getElementById('cuerpo');
    fondo.style.backgroundColor = 'red';
}*/

function agregarNota(){
    const contenidoNota = document.getElementById('nota');

    if(contenidoNota.value!=""){
        interiorNota=contenidoNota.value;
        let nuevoDiv= document.getElementById('cuerpo');
        nuevoDiv.innerHTML+=
        `
        <div class="cuboDeNota">${interiorNota}</div>
        `

    }

}