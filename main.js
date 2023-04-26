const modal = document.getElementById('modal');
const form  = document.getElementById('form');
const buttonMensaje = document.getElementById('button');

buttonMensaje.addEventListener('click', () => {
    if(validacion == false){
        errorModal();
    } else {
        abrirModal();
        cerrarModal();
    }
    
});

const abrirModal = ()=> {
    modal.innerHTML = `
    <h2 class='modalBackground'> <p><i class="fa-solid fa-circle-check" style="color: #1cb698;"></i></p>Mensaje Enviado</h1>
    `;
}

const errorModal = () => {
    modal.innerHTML = `
    <h2 class='modalBackground'> <p><i class="fa-solid fa-circle-exclamation" style="color: #1cb698;"></i></p>Error Revisa El Formulario</h1>
    `;
}

const cerrarModal = ()=> {
    setTimeout(function(){
        modal.style.display = 'none'
    }, 3000)
}

function validacion() {
    let formValido = true;
    let nombre = document.getElementById('name');

    if(nombre === null || nombre.length < 5) {
        formValido = false;
    }

    let numero = document.getElementById('numero');
    if(isNaN(numero) || numero.length < 9){
        formValido = false;
    }

    let mensaje = document.getElementById('mesagge');
    if(mensaje === null || nombre.length < 5){
        formValido = false;
    } 

    let email = document.getElementById('email');
    if(email.length < 10) {
        formValido = false;
    }

    return formValido;
}

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