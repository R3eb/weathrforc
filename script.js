function getWeather(city) {
    const location = document.getElementById("input").value;
    const apiKey = "ca20039933cd56b46ee46c600de4327b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { temp, feels_like, humidity } = data.main;
            const description = data.weather[0].description;
            const cityName = data.name;
            const country = data.sys.country;
            const windSpeed = data.wind.speed;
            const icon = data.weather[0].icon;

            document.getElementById("city-name").textContent = `${cityName}`;
            document.getElementById("description").textContent = `Weather: ${description}`;
            document.getElementById("temperature").textContent = ` ${temp}°C`;
            // document.getElementById("feels-like").textContent = `Feels like: ${feels_like}°C`;
            // document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
            document.getElementById("wind-speed").textContent = ` ${windSpeed} m/s`;
            document.getElementById("icon").src = `http://openweathermap.org/img/wn/${icon}.png`;

            console.log(`Weather data for ${cityName}, ${country}: Temp: ${temp}°C, Feels Like: ${feels_like}°C`);
        })
        //.catch(error => {
          //  console.log(error);
            //document.getElementById("weather").textContent = "Error fetching weather data. Please try again.";
        };

const search_button = document.getElementById('search-btn');
search_button.addEventListener('click', () => {
    document.getElementById('card').style.height = "400px";
    let city = document.getElementById('input').value;
    console.log(city);
    getWeather(city);
});

   
