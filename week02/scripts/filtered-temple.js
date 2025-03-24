document.addEventListener('DOMContentLoaded', () => {
    lastModified()
    navigationToggle()
    const gallery = document.getElementById('content-wrapper');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Albuquerque New Mexico",
            location: "Albuquerque, New Mexico",
            dedicated: "2000, March, 4",
            area: 78000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
        },
        {
            templeName: "Arequipa Perú",
            location: "Arequipa, Perú",
            dedicated: "2017, March, 4",
            area: 120000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
        },
        {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
            dedicated: "2008, May, 5",
            area: 82000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
        }
    ];

    createTempleCard(temples);

    const filters = {
        home: () => temples,
        old: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900),
        new: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000),
        large: () => temples.filter(temple => temple.area > 90000),
        small: () => temples.filter(temple => temple.area < 10000)
    };

    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = link.getAttribute('data-filter');
            clearTempleCards();
            createTempleCard(filters[filter]());
        });
    });

    function createTempleCard(filteredTemples) {
        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");
            let imgContainer = document.createElement("div")



            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");
            imgContainer.classList.add("img-container")
            imgContainer.append(img)
            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(imgContainer);

            document.querySelector("#content-wrapper").appendChild(card);
        });
    }

    function clearTempleCards() {
        document.querySelector("#content-wrapper").innerHTML = "";
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

});