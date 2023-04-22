let menuVisible = false;
//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las aminaciones de las habilidades 

function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmls");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//defecto el scrolling para aplicar la animacion de la barrade habiladades

window.onscroll = function(){
    efectoHabilidades();
}