
document.addEventListener("DOMContentLoaded", () =>{
    navigationToggle()
    const lastmodifiedContent = document.querySelector("#lastModified")
    const currentyearContent = document.querySelector("#currentyear")

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()
    const year = new Date().getFullYear()
    const lastmodified = new Date(document.lastModified).toLocaleDateString()

    currentyearContent.innerHTML = year
    lastmodifiedContent.textContent = `Last Modification: ${lastmodified} ${hours}:${minutes}:${seconds}`

    function navigationToggle() {
        const hamburger = document.querySelector(".hamburger-menu");
        const navCont = document.querySelector("nav");
        const closeHamburger = document.querySelector(".close-menu");
        const topHeader = document.querySelector(".top-header"); 
    
        hamburger.addEventListener("click", () => {
            navCont.classList.add("active");
            topHeader.classList.add("hide");
        });
    
        closeHamburger.addEventListener("click", () => {
            navCont.classList.remove("active");
            topHeader.classList.remove("hide");
        });
    } 
    
    
})