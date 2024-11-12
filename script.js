const apiKey = '910f3717e713356049ea9254c2579a64';

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-result').innerHTML = `<p>Failed to fetch weather data. Try again later.</p>`;
        });
}





class user{
    constructor(username, car, bf){
        this.username =  username;
        this.car = car;
        this.bf = bf;
    }

    myname(){
        console.log(`${this.username}'s ${this.bf} have a new ${this.car}`);
        
    }
}
const kavita = new user("kavita", "rolls royals", "elvish")



class teacher extends user{
    constructor(username, age, bf){
        super(bf)
        this.username = username;
        this.age = age;
      
    }

    myage(){
        console.log(`${this.username}'s ${this.bf} age is ${age}`);
        
    }

   
}
const age = new teacher("kavi", "23","...")
age.myage()
kavita.myname()