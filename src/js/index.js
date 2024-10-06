/* Abrir - Cerrar Menú Mobile */
const $menu       = document.querySelector(".nav");
const $close_menu = document.getElementById("close-menu");
const $open_menu  = document.getElementById("open-menu");

$open_menu.addEventListener("click",()=>{ $menu.classList.add("open") });
$close_menu.addEventListener("click",()=>{ $menu.classList.remove("open") });

/* Tabulador de pestañas "feature" */
const $slider = document.getElementById("slider");
const $slide  = Array.from($slider.children);
const $feature_tab = Array.from(document.querySelector(".feature-tab").children);

$slider.addEventListener("click", (e)=>{
    const tabID = e.target.id;
    
    $feature_tab.forEach((child)=>{
        if(child.getAttribute("aria-labelledby") == tabID){
            child.classList.add("show-feature");
            child.removeAttribute("hidden");
        }else{
            child.classList.remove("show-feature");
            child.setAttribute("hidden", "");
        }
    });
    
    $slide.forEach((child)=>{ child.id == tabID ? child.setAttribute("aria-selected", "true") & child.classList.add("active-slide") : child.setAttribute("aria-selected", "false") & child.classList.remove("active-slide") });
});


/* Simulación de envío de correo en la sección "Contact" */
const $form = document.querySelector(".container-send-email");

$form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(e.target.children[0].children[0].value != "") alert("Simulación de 'envio' realizada");
});