let array = ["Desarrollador", "Programador", "Diseñador"];

const spanCambiante = document.getElementById("texto-cambiante");

let index = 0;

let completo = false;

let txt = "";

let velocidad = 300;

const textoAnimado = ()=>{
    let currentIndex = index % array.length;   
    let palabra = array[currentIndex];
    console.log(palabra)
    if(completo){
        txt = palabra.substring(0,txt.length -1);
        velocidad = 200;
    } else{
        txt = palabra.substring(0,txt.length +1);
        velocidad = 200;
    }
    spanCambiante.innerHTML = txt;

    if(completo){
        velocidad /= 2;
    }

    if(!completo && palabra === txt){
        completo = true;
        velocidad = 2000;
    } else if(completo && txt === "") {
        completo = false;
        index++;
        velocidad = 300;
    }
   

    setTimeout(textoAnimado,velocidad)
}

textoAnimado()
