window.onscroll = function(){miFuncion()};

function miFuncion(){
    const chocolate = document.getElementById("chocolate");
    const vainilla = document.getElementById("vainilla");
    const oreo = document.getElementById("oreo");
    const homero = document.getElementById("homero");

    let distancia_chocolate;
    let distancia_vainilla;
    let distancia_oreo
    let distancia_homero;

    distancia_chocolate = window.innerHeight - chocolate.getBoundingClientRect().top;
    distancia_vainilla = window.innerHeight - vainilla.getBoundingClientRect().top;
    distancia_oreo = window.innerHeight - oreo.getBoundingClientRect().top;
    distancia_homero = window.innerHeight - homero.getBoundingClientRect().top;

    console.log('chocolate: ', distancia_chocolate)
    console.log('vainilla: ', distancia_vainilla)
    console.log('oreo: ', distancia_oreo)
    console.log('homero: ', distancia_homero)
    
    if(distancia_chocolate >= 200){
        chocolate.classList.add("efecto-chocolate");
    }
    if(distancia_vainilla >= 200){
        vainilla.classList.add("efecto-vainilla");
    }
    if(distancia_oreo >= 200){
        oreo.classList.add("efecto-chocolate");
    }
    if(distancia_homero >= 200){
        homero.classList.add("efecto-chocolate");
    } 
}

