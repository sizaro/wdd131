document.addEventListener("DOMContentLoaded", () =>{
    
    const lastmodifiedContent = document.querySelector("#lastModified")
    const currentyearContent = document.querySelector("#currentyear")

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()
    const year = new Date().getFullYear()
    const lastmodified = new Date(document.lastModified).toLocaleDateString()

    currentyearContent.innerHTML = year
    lastmodifiedContent.textContent = `Last Modification: ${lastmodified} ${hours}:${minutes}:${seconds}`
})