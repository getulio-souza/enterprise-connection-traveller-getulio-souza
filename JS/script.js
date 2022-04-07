//esconder barra de navegação
const nav = document.querySelector('.menu_grande', ".menu_lateral");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", ()=>{
    if(lastScrollY < window.scrollY){
     nav.classList.add("nav--hidden", "sidebar--hidden")
    }
    else{
        nav.classList.remove("nav--hidden", "sidebar--hidden")
    }

    lastScrollY = window.scrollY;
})