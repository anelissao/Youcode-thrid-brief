
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");

function toogle(){
    menu.classList.toggle("display");
}

burger.addEventListener("click", function() {
    toogle();
})

close.addEventListener("click", function() {
    toogle();
})
