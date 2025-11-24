function showWeatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '10a2ccfc849fc0883e145442b33fb59f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch (apiUrl)
        .then (response => {
                if(!response.ok) {
                    throw new Error('city not found');
            }

                return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
             weatherInfo.innerHTML = `<h2>Weather in${data.name}</h2>
                                <p>Temperature: ${data.main.temp}</P>
                                <p> Weather: ${data.weather[0].description}</P>
                                <p>Wind: ${data.wind.speed}</p>`
     })
     .catch(error => {
        const weatherInfo = document.getElementById ('weatherInfo');
        weatherInfo.innerHTML = `<p style = "color: red";>${error.message}</p>`;
     })
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);