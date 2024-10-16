function getWeather() {
    const location = document.getElementById("input").value;
    const apiKey = "ca20039933cd56b46ee46c600de4327b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {  
                const { temp, feels_like, humidity } = data.main;
                const description = data.weather[0].description;
                const cityName = data.name;
                const country = data.sys.country;
                const windSpeed = data.wind.speed;
                const icon = data.weather[0].icon;

                document.getElementById("city-name").textContent = `${cityName}`;
                document.getElementById("description").textContent = `${description}`;
                document.getElementById("temperature").textContent = `${temp}°C`;
                document.getElementById("wind-speed").textContent = `${windSpeed} m/s`;
                document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}.png`;

                console.log(`Weather data for ${cityName}, ${country}: Temp: ${temp}°C, Feels Like: ${feels_like}°C`);
            } else {
                
                console.error("City not found.");
                document.getElementById("weather").textContent = "City not found. Please try again.";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather").textContent = "Error fetching weather data. Please try again.";
        });
}

const search_button = document.getElementById('search-btn');
search_button.addEventListener('click', () => {
    document.getElementById('card').style.height = "400px";
    getWeather(); 
});

const inputField = document.getElementById('input');
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('card').style.height = "400px";
        getWeather();  
    }
});
   
