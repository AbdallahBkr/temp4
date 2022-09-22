let MegaMenu = document.querySelector(".mega-menu");
const button_MegaMenu = document.querySelector(".mega-menu-button")
button_MegaMenu.addEventListener("click",function(){
    MegaMenu.classList.toggle("mega-menu-show")
    MegaMenu.classList.toggle("mega-menu-hide")
})