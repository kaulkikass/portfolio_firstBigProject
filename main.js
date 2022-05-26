const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");


//open nav menu

menuBtn.addEventListener("click",()=>{
    menu.style.display="block";
    closeBtn.style.display="block";
    menuBtn.style.display="none";
})

//close nav menu
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener("click", closeNav);

//close nav menu when menu item clicked
const checkWidth=()=>{if(window.innerWidth<1024) {
    document.querySelectorAll(".nav__menu li a").forEach(navItem=>{
        navItem.addEventListener("click", closeNav)
    })
}  
else {
    document.querySelectorAll(".nav__menu li a").forEach(navItem=>{
        navItem.removeEventListener("click", closeNav)
    })
} 
}

checkWidth();

window.addEventListener("resize",checkWidth);


//resize change menu back to normal
 const menuBack=()=>{if(window.innerWidth>1024){
    menu.style.cssText="display:flex";
    menuBtn.style.display="none";
}
else{
    menu.style.display="none";
    menuBtn.style.display="block";
}
}
window.addEventListener("resize",menuBack); 