function showWeatherDetails(event) {
    event.preventDefault();

    const apiKey = '10a2ccfc849fc0883e145442b33fb59f';
    
    // Get city input values
    const city = document.getElementById('city').value.trim();
    
    // Get coordinates input values
    const lon = document.getElementById('longitude').value.trim();
    const lat = document.getElementById('latitude').value.trim();

    let apiUrl;

    // Check if coordinates are provided
    if (lat && lon) {
        // Validate coordinates
        if (!isValidCoordinate(lat, lon)) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p style="color: red;">Invalid coordinates. Please enter valid latitude and longitude.</p>`;
            return;
        }
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }
    // Check if city is provided
    else if (city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }
    // No input provided
    else {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p style="color: red;">Please enter either a city name or latitude/longitude coordinates.</p>`;
        return;
    }

    // Show loading state
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Loading weather data...</p>';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found. Please check your input.');
            }
            return response.json();
        })
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${Math.round(data.main.temp)}°C</p>
                <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Wind: ${data.wind.speed} m/s</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Coordinates: ${data.coord.lat.toFixed(4)}, ${data.coord.lon.toFixed(4)}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}

// Helper function to validate coordinates
function isValidCoordinate(lat, lon) {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    
    // Check if values are numbers and within valid ranges
    return !isNaN(latNum) && !isNaN(lonNum) && 
           latNum >= -90 && latNum <= 90 && 
           lonNum >= -180 && lonNum <= 180;
}

// Event listener for the form
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);