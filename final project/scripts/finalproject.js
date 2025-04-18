document.addEventListener("DOMContentLoaded", () =>{

    const resultDiv = document.querySelector("#weatherOutput");
    const historyList = document.querySelector("#searchHistory");
  
    let searchHistory = JSON.parse(localStorage.getItem("weatherSearches")) || [];
    const weatherData = [
      {
        coord: { lon: 32.5825, lat: 0.3476 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 298.15,
          feels_like: 299.26,
          temp_min: 298.15,
          temp_max: 298.15,
          pressure: 1013,
          humidity: 65
        },
        visibility: 10000,
        wind: { speed: 3.6, deg: 180 },
        clouds: { all: 20 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6736,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232422,
        name: "Kampala",
        cod: 200
      },
      {
        coord: { lon: 32.2881, lat: 0.3476 },
        weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <circle cx="20" cy="20" r="10" fill="#B0BEC5"/>
            <circle cx="35" cy="25" r="12" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 299.15,
          feels_like: 300.26,
          temp_min: 299.15,
          temp_max: 299.15,
          pressure: 1012,
          humidity: 60
        },
        visibility: 10000,
        wind: { speed: 4.1, deg: 190 },
        clouds: { all: 40 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6737,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232423,
        name: "Entebbe",
        cod: 200
      },
      {
        coord: { lon: 31.7717, lat: 0.3476 },
        weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <circle cx="24" cy="24" r="12" fill="#B0BEC5"/>
            <circle cx="40" cy="28" r="14" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 297.15,
          feels_like: 298.26,
          temp_min: 297.15,
          temp_max: 297.15,
          pressure: 1011,
          humidity: 70
        },
        visibility: 10000,
        wind: { speed: 2.1, deg: 170 },
        clouds: { all: 75 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6738,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232424,
        name: "Masaka",
        cod: 200
      },
      {
        coord: { lon: 30.6586, lat: -0.6076 },
        weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="20" r="12" fill="#90A4AE"/>
            <line x1="24" y1="40" x2="24" y2="50" stroke="#4FC3F7" stroke-width="4"/>
            <line x1="32" y1="42" x2="32" y2="52" stroke="#4FC3F7" stroke-width="4"/>
            <line x1="40" y1="40" x2="40" y2="50" stroke="#4FC3F7" stroke-width="4"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 296.15,
          feels_like: 297.26,
          temp_min: 296.15,
          temp_max: 296.15,
          pressure: 1010,
          humidity: 75
        },
        visibility: 10000,
        wind: { speed: 3.1, deg: 160 },
        clouds: { all: 90 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6739,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232425,
        name: "Mbarara",
        cod: 200
      },
      {
        coord: { lon: 31.7717, lat: 0.3476 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 298.15,
          feels_like: 299.26,
          temp_min: 298.15,
          temp_max: 298.15,
          pressure: 1013,
          humidity: 65
        },
        visibility: 10000,
        wind: { speed: 3.6, deg: 180 },
        clouds: { all: 20 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6740,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232426,
        name: "Gulu",
        cod: 200
      },
      {
        coord: { lon: 32.9, lat: 2.25 },
        weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 300.15,
          feels_like: 301.26,
          temp_min: 300.15,
          temp_max: 300.15,
          pressure: 1012,
          humidity: 55
        },
        visibility: 10000,
        wind: { speed: 3.0, deg: 170 },
        clouds: { all: 0 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6741,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232427,
        name: "Lira",
        cod: 200
      },
      {
        coord: { lon: 34.1667, lat: 1.0833 },
        weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 298.95,
          feels_like: 299.85,
          temp_min: 298.95,
          temp_max: 298.95,
          pressure: 1010,
          humidity: 60
        },
        visibility: 10000,
        wind: { speed: 3.8, deg: 140 },
        clouds: { all: 75 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6742,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232428,
        name: "Mbale",
        cod: 200
      },
      {
        coord: { lon: 30.275, lat: 0.6667 },
        weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
            <line x1="24" y1="52" x2="24" y2="60" stroke="#2196F3" stroke-width="4"/>
            <line x1="32" y1="52" x2="32" y2="60" stroke="#2196F3" stroke-width="4"/>
            <line x1="40" y1="52" x2="40" y2="60" stroke="#2196F3" stroke-width="4"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 297.35,
          feels_like: 298.26,
          temp_min: 297.35,
          temp_max: 297.35,
          pressure: 1011,
          humidity: 78
        },
        visibility: 10000,
        wind: { speed: 3.2, deg: 165 },
        clouds: { all: 85 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6743,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232429,
        name: "Fort Portal",
        cod: 200
      },
      {
        coord: { lon: 33.6167, lat: 1.7167 },
        weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M22 50H46C52 50 52 44 52 42C52 36 48 34 46 34C44 34 42 30 34 30C26 30 24 34 22 34C20 34 16 36 16 42C16 44 16 50 22 50Z" fill="#B0BEC5"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 299.05,
          feels_like: 300.1,
          temp_min: 299.05,
          temp_max: 299.05,
          pressure: 1011,
          humidity: 65
        },
        visibility: 10000,
        wind: { speed: 4.0, deg: 160 },
        clouds: { all: 40 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6744,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232430,
        name: "Soroti",
        cod: 200
      },
      {
        coord: { lon: 34.1833, lat: 0.6833 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 298.75,
          feels_like: 299.66,
          temp_min: 298.75,
          temp_max: 298.75,
          pressure: 1012,
          humidity: 68
        },
        visibility: 10000,
        wind: { speed: 3.5, deg: 150 },
        clouds: { all: 20 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6745,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232431,
        name: "Tororo",
        cod: 200
      },
      {
        coord: { lon: 33.2, lat: 0.4333 },
        weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M22 50H46C52 50 52 44 52 42C52 36 48 34 46 34C44 34 42 30 34 30C26 30 24 34 22 34C20 34 16 36 16 42C16 44 16 50 22 50Z" fill="#B0BEC5"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 299.65,
          feels_like: 300.70,
          temp_min: 299.65,
          temp_max: 299.65,
          pressure: 1011,
          humidity: 60
        },
        visibility: 10000,
        wind: { speed: 3.2, deg: 145 },
        clouds: { all: 40 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6746,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232432,
        name: "Jinja",
        cod: 200
      },
      {
        coord: { lon: 30.9, lat: 3.0333 },
        weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 300.45,
          feels_like: 301.33,
          temp_min: 300.45,
          temp_max: 300.45,
          pressure: 1013,
          humidity: 50
        },
        visibility: 10000,
        wind: { speed: 2.8, deg: 135 },
        clouds: { all: 0 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6747,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232433,
        name: "Arua",
        cod: 200
      },
      {
        coord: { lon: 31.35, lat: 1.4333 },
        weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
            <line x1="24" y1="52" x2="24" y2="60" stroke="#2196F3" stroke-width="4"/>
            <line x1="32" y1="52" x2="32" y2="60" stroke="#2196F3" stroke-width="4"/>
            <line x1="40" y1="52" x2="40" y2="60" stroke="#2196F3" stroke-width="4"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 297.55,
          feels_like: 298.15,
          temp_min: 297.55,
          temp_max: 297.55,
          pressure: 1012,
          humidity: 70
        },
        visibility: 10000,
        wind: { speed: 4.0, deg: 120 },
        clouds: { all: 85 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6748,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232434,
        name: "Hoima",
        cod: 200
      },
      {
        coord: { lon: 29.9899, lat: -1.2486 },
        weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <path d="M18 48H46C54 48 54 42 54 40C54 34 50 32 48 32C46 32 44 28 36 28C28 28 26 32 24 32C22 32 18 34 18 40C18 42 18 48 18 48Z" fill="#78909C"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 296.65,
          feels_like: 297.30,
          temp_min: 296.65,
          temp_max: 296.65,
          pressure: 1011,
          humidity: 72
        },
        visibility: 10000,
        wind: { speed: 3.7, deg: 140 },
        clouds: { all: 90 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6749,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232435,
        name: "Kabale",
        cod: 200
      },
      {
        coord: { lon: 33.4833, lat: 0.6167 },
        weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02d" }],
        weather_icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill="#FFD93B"/>
            <path d="M20 50H44C50 50 50 44 50 42C50 36 46 34 44 34C42 34 40 30 32 30C24 30 22 34 20 34C18 34 14 36 14 42C14 44 14 50 20 50Z" fill="#90A4AE"/>
          </svg>
        `,
        base: "stations",
        main: {
          temp: 298.85,
          feels_like: 299.95,
          temp_min: 298.85,
          temp_max: 298.85,
          pressure: 1011,
          humidity: 66
        },
        visibility: 10000,
        wind: { speed: 3.1, deg: 150 },
        clouds: { all: 20 },
        dt: 1726660758,
        sys: {
          type: 1,
          id: 6750,
          country: "UG",
          sunrise: 1726636384,
          sunset: 1726680975
        },
        timezone: 10800,
        id: 232436,
        name: "Iganga",
        cod: 200
      }
          
    ];
    
      
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
  
  function getWeatherData(city) {
    const cityData = weatherData.find(data => data.name.toLowerCase() === city.toLowerCase());
  
    if (cityData) {
      displayWeather(cityData);
      saveToLocalStorage(city);
    } else {
      resultDiv.innerHTML = `<p class="error">❌ City not found in the data.</p>`;
    }
  }
  
  // Display weather data
  function displayWeather(data) {
    const weatherInfo = {
      city: data.name,
      temp: data.main.temp - 273.15, // Convert from Kelvin to Celsius
      wind: data.wind.speed,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      weather_icon_svg: data.weather_icon_svg
    };
  
    const html = `
      <div class="card">
        <h2>${weatherInfo.city}</h2>
        ${weatherInfo.weather_icon_svg}
        <p>🌡️ Temperature: ${weatherInfo.temp.toFixed(2)} °C</p>
        <p>💨 Wind Speed: ${weatherInfo.wind} m/s</p>
        <p>☁️ Condition: ${weatherInfo.description}</p>
      </div>
    `;
  
    resultDiv.innerHTML = html;
  }
  
  // Save to localStorage
  function saveToLocalStorage(city) {
    if (!searchHistory.includes(city)) {
      searchHistory.push(city);
      localStorage.setItem("weatherSearches", JSON.stringify(searchHistory));
      updateHistory();
    }
  }
  
  // Update history list
  function updateHistory() {
    historyList.innerHTML = "";
    searchHistory.slice(-5).reverse().forEach((city) => {
      const li = document.createElement("li");
      li.textContent = city;
      li.addEventListener("click", () => getWeatherData(city));
      historyList.appendChild(li);
    });
  }
  
  
  const weatherForm = document.getElementById("weatherForm")
  
  // Event listener for form submit
  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityInput = document.querySelector("#city").value.trim();  // Updated input id to match HTML
    if (cityInput) {
      getWeatherData(cityInput);
      form.reset();
    } else {
      alert("Please enter a city name.");
    }
  });
  // Load history on page load
  updateHistory();
  navigationToggle();
  
  })