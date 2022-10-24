const openMenuBtn = document.getElementById("open-menu")
const navBar = document.getElementById("navbar")
const closeMenuBtn = document.getElementById("close-menu")

 openMenuBtn.addEventListener("click",()=>{
    navBar.classList.remove("nav-links")
    navBar.classList.add("show-navbar")
})

closeMenuBtn.addEventListener("click",()=>{
    navBar.classList.add("nav-links")
    navBar.classList.remove("show-navbar")
})


