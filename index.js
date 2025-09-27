var mas = document.getElementById("masB");
var verTodos = document.getElementById("verTodo");
var verFotos= document.getElementById("verFotos");
var posts = document.getElementById("posts");
var fotos = document.getElementById("fotos");
var modo = document.getElementById("dia-noche");
var buscar = document.getElementById("buscar");
var cajabuscar = document.getElementById("busqueda");

const inputBus = document.getElementById("palabra");
const postsB = document.querySelectorAll(".post");

var cuadroImg = document.querySelector(".cuadro-lateral-imagen");
var imgPrin = cuadroImg.querySelector("img");
var imgs = ["pato2.jpg","pato3.jpg", "pato4.jpg", "pato5.jpg"];
var contImg = 0;
var intervalo;

var contador = 0;

mas.addEventListener("click", function(){
    contador += 1;
    alert("Likes: " + contador);
});

verTodos.addEventListener("click", function(){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    }else{
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
});

verFotos.addEventListener("click", function(){
    if(fotos.classList.contains("ocultar")){
        fotos.classList.remove("ocultar");
        fotos.classList.add("mostrar");
    }else{
        fotos.classList.remove("mostrar");
        fotos.classList.add("ocultar");
    }
});

modo.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});

buscar.addEventListener("click", function(){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    }else{
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
    if(cajabuscar.classList.contains("ocultar")){
        cajabuscar.classList.remove("ocultar");
        cajabuscar.classList.add("mostrar")
    }else{
        cajabuscar.classList.remove("mostar");
        cajabuscar.classList.add("ocultar")
    }
});

inputBus.addEventListener("input", function(){
    let busqueda = inputBus.value.toUpperCase();
    for(let post of postsB){
        let texto = post.textContent.toUpperCase();
        if(texto.includes(busqueda)){
            post.style.display = "block";
        }else{
            post.style.display = "none";
        }
    }
});

cuadroImg.addEventListener("mouseenter", function(){
    intervalo = setInterval(function(){
        contImg = (contImg + 1) % imgs.length; 
            imgPrin.src = imgs[contImg];
        }, 2000);
});

cuadroImg.addEventListener("mouseleave", function() {
        clearInterval(intervalo);
        contImg = 0;
        imgPrin.src = imgs[contImg];
});