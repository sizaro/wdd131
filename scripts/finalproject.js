// Global Variables
const form = document.querySelector("#weatherForm");
const resultDiv = document.querySelector("#weatherOutput");  // Updated to match the HTML
const historyList = document.querySelector("#searchHistory");

let searchHistory = JSON.parse(localStorage.getItem("weatherSearches")) || [];

// Function to fetch weather data
async function getWeatherData(city) {
  const apiKey = "YOUR_API_KEY"; // replace with actual key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
    saveToLocalStorage(city);
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">❌ ${error.message}</p>`;
  }
}

// Display weather data
function displayWeather(data) {
  const weatherInfo = {
    city: data.name,
    temp: data.main.temp,
    wind: data.wind.speed,
    icon: data.weather[0].icon,
    description: data.weather[0].description
  };

  const html = `
    <div class="card">
      <h2>${weatherInfo.city}</h2>
      <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png" 
           alt="${weatherInfo.description}" loading="lazy">
      <p>🌡️ Temperature: ${weatherInfo.temp} °C</p>
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

// Event listener for form submit
form.addEventListener("submit", (e) => {
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
