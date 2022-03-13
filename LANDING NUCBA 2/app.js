
const nombre = document.querySelector(".input-nombre");
const apellido = document.querySelector(".input-apellido");
const telefono = document.querySelector(".input-telefono");
const email = document.querySelector(".input-email");
const mensaje = document.querySelector(".input-mensaje");
const estadoMensaje = document.querySelector(".estado-mensaje");
const botonEnviar = document.querySelector(".boton-enviar-formulario");



botonEnviar.addEventListener("click", (e)=>{

let confirmar = confirm("¿Estás seguro que deseas enviar el mensaje?");

if(confirmar){
    if(nombre.value.length<3 || nombre.value.length>40){
        estadoMensaje.innerHTML = "El nombre es invalido";
        e.preventDefault();
    }else if(telefono.value.length!=10){
        estadoMensaje.innerHTML = "El numero de telefono que ingreso esta incompleto. Ingrese un número sin espacios ni guiones."
        e.preventDefault();
    }
    
}

});

const cambiarLetrasOscuras = ()=>{
let elementos = document.querySelectorAll('.oscuro');
let index = 0, length = elementos.length;
for( ;index<length;index++){
    elementos[index].classList.add('color_letras_oscuras');
}
}
cambiarLetrasOscuras();

const cambiarLetrasClaras = ()=>{
    let elementos = document.querySelectorAll('.claro');
    let index = 0, length = elementos.length;
    for( ;index<length;index++){
        elementos[index].classList.add('color_letras_claras');
    }
    }
cambiarLetrasClaras();

const rescatados = document.getElementById("rescatados");

function disableScroll(){  
    window.scrollTo(0, 0);
  
  
  window.addEventListener('scroll', disableScroll);
}

function enableScroll(){
  window.removeEventListener('scroll', disableScroll); 
}

rescatados.addEventListener("click",()=>{

    let modal = document.querySelector(".modal_nuestros_rescatados");

    modal.style.display = "flex";
    
    disableScroll();
   
})

let modal = document.querySelector(".modal_nuestros_rescatados");

let cerrarModalRescatados = document.querySelector(".fa_fa_x");

cerrarModalRescatados.addEventListener("click",()=>{
    modal.style.display = "none";
    enableScroll();
})

const textos = document.querySelectorAll(".texto_rescatado");
const imagenes = document.querySelectorAll(".imagen_rescatado");

for(let i=0;i<imagenes.length;i++){
    imagenes[i].addEventListener("mouseover",()=>{
    textos[i].style.animation = "textoRescatadoON 0.5s forwards"
    textos[i].style.display = "block"
})
}

for(let i=0;i<imagenes.length;i++){
    imagenes[i].addEventListener("mouseout",()=>{
    textos[i].style.display = "none"
})
}

const modalCampaña = document.querySelector(".modal_campañas");
const modalTransito = document.querySelector(".modal_transito");


document.getElementById("campañas").addEventListener("click",()=>{
    modalCampaña.style.display = "flex"
    disableScroll();
})

document.getElementById("transito").addEventListener("click",()=>{
    modalTransito.style.display = "flex"
    disableScroll();
})

const cerrarModalCampañas = document.getElementById("cerrar_campañas");

cerrarModalCampañas.addEventListener("click",()=>{
    modalCampaña.style.display = "none";
    enableScroll();
})

const cerrarModalTransito = document.getElementById("cerrar_transito");

cerrarModalTransito.addEventListener("click",()=>{
    modalTransito.style.display = "none";
    enableScroll();
})

document.getElementById("boton_transita_ya").addEventListener("click",()=>{
    modalTransito.style.display = "none";
    enableScroll();
    window.location.href="#contacto"
})

