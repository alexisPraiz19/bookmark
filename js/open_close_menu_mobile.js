const $menu       = document.querySelector(".nav");
const $close_menu = document.getElementById("close-menu");
const $open_menu  = document.getElementById("open-menu");

$open_menu.addEventListener("click",()=>{ $menu.classList.add("open") });
$close_menu.addEventListener("click",()=>{ $menu.classList.remove("open") });