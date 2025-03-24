document.addEventListener('DOMContentLoaded', function () {
    countryDetails()
    lastModified()
});


function countryDetails(){
    const temp = 40; 
    const windSpeed = 10; 
    const windChillElement = document.getElementById('wind-chill');

    function calculateWindChill(temp, windSpeed) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    }

    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        windChillElement.innerText = `${calculateWindChill(temp, windSpeed)}°C`;
    } else {
        windChillElement.innerText = "N/A";
    }
}

function lastModified(){
    
        const lastmodifiedContent = document.querySelector("#lastModified")
        const currentyearContent = document.querySelector("#currentyear")
    
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()
        const seconds = new Date().getSeconds()
        const year = new Date().getFullYear()
        const lastmodified = new Date(document.lastModified).toLocaleDateString()
    
        currentyearContent.innerHTML = year
        lastmodifiedContent.textContent = `Last Modification: ${lastmodified} ${hours}:${minutes}:${seconds}`
}