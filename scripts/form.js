
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


    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            'avg-rating': 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            'avg-rating': 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            'avg-rating': 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            'avg-rating': 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            'avg-rating': 5.0
        }
      ];
      
      window.onload = () => {
        
        const productNameSelect = document.getElementById('productName');
      
        if (productNameSelect) {
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                productNameSelect.appendChild(option);
            });
        } else {
            console.error("Element with id 'productName' not found.");
        }
      };

})