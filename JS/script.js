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
    const openFun = document.getElementById("fun_text_btn");
    const modalFun = document.getElementById("modal_container_fun");
    const closeFun = document.getElementById("close_fun_text");    

openFun.addEventListener("click", () => {
    modalFun.classList.add('show')
});

closeFun.addEventListener("click", () => {
    modalFun.classList.remove('show')
});

