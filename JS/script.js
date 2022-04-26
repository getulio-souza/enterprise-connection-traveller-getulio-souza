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

//audio button

const audioFood = new Audio();
audioFood.src = "../audios/food_audio.mp3"

const audioNight = new Audio();
audioNight.src = "../audios/night_audio2.mp3"

const audioFun = new Audio();
audioFun.src = "../audios/fun_audio.mp3"


//food text modal
const openModalFood = document.getElementById("food_text_btn");
const modalFood = document.getElementById("modal_food");
const closeModalFood = document.getElementById("close_modal_food");


openModalFood.addEventListener("click", () => {
    modalFood.classList.add('show_modal_food')
});

closeModalFood.addEventListener("click", () => {
    modalFood.classList.remove('show_modal_food')
});


//night text modal
const openNight = document.getElementById("night_life_text_btn");
const modalNight = document.getElementById("modal_container_night");
const closeNight = document.getElementById("close_night_text");


openNight.addEventListener("click", () => {
    modalNight.classList.add('show_2')
});

closeNight.addEventListener("click", () => {
    modalNight.classList.remove('show_2')
});


//fun text modal
const open = document.getElementById("fun_text_btn");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_fun_text");


open.addEventListener("click", () => {
    modal_container.classList.add('show')
});

close.addEventListener("click", () => {
    modal_container.classList.remove('show')
});

