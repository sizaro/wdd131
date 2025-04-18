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


    window.onload = () => {
        if (localStorage.getItem('reviewCounter') === null) {
            localStorage.setItem('reviewCounter', '0');
        }
    
        let reviewCounter = parseInt(localStorage.getItem('reviewCounter'), 10);
        reviewCounter += 1;
        localStorage.setItem('reviewCounter', reviewCounter.toString())
        const reviewCounterElement = document.getElementById('reviewCounter');
        if (reviewCounterElement) {
            reviewCounterElement.textContent = reviewCounter;
        } else {
            console.error("Element with id 'reviewCounter' not found.");
        }
    
    };
})