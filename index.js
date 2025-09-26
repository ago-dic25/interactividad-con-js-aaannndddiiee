var mas = document.getElementById("masB");
var verTodos = document.getElementById("verTodo");
var verFotos= document.getElementById("verFotos");
var posts = document.getElementById("posts");
var fotos = document.getElementById("fotos");
var modo = document.getElementById("dia-noche");

mas.addEventListener("click", function(){
    alert("Seccion en proceso...");
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