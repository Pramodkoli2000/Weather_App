let apiKey = "aff976b7ace309a80f9081abf9096421";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy_info");
let windInfo = document.getElementById("wind_info");
let weatherImage = document.querySelector(".weather_img");

// async function getWeatherData(){
//     city = userCity.value;
//     console.log(city);
//     let response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     );
//     let data = await response.json();
//     console.log(data);
//     ct.innerHTML = data.name;
//     temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
//     humiditiy_info.innerHTML = data.main.humidity + "%";
//     wind_info.innerHTML = data.wind.speed+"km/h";
// }



async function getWeatherData() {
    if (userCity.value == "") {
        alert("ENTER A CITY NAME");
    }else {
        city = userCity.value;
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        let data = await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        humiditiy_info.innerHTML = data.main.humidity + "%";
        wind_info.innerHTML = data.wind.speed + "km/h";
        userCity.value = "";
        if (data.weather[0].main == "Clear") {
            weatherImage.src = "4102326_cloud_sun_sunny_weather_icon.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "images/snow.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "images/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "images/Drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "images/Mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "images/Rain.png";
        }
        console.log(data);
    }

}

