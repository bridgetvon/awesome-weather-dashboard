// variables for information the dashboard should display 
const apiKey = "a7fd0707ae1dd8bd1ac65f74c64f07f0";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric';
let submitBtn = document.getElementById('city-search');
let temperature = document.getElementsByClassName('temp');
let cityWind = document.getElementsByClassName('wind');
let humid = document.getElementsByClassName('humidity');
let uv = document.getElementsByClassName('uv-index');
let savedCities = [];
let searchCities = document.getElementById('saved-cities');


if(localStorage.getItem("cities") != null) {
savedCities = JSON.parse(localStorage.getItem("cities"))
for (var i=0; i< savedCities.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = savedCities[i];
    searchCities.appendChild(btn);

}
};

submitBtn.addEventListener('click', cityWeather);

//get city 
function cityWeather () {
    let city = document.getElementById('city-input').value;
    if (savedCities.includes(city)) {
        return;
    } else if (city.trim() == "" ) {
      return;  
    } else {
        savedCities.push(city);
    };
    localStorage.setItem('cities', JSON.stringify(savedCities));
    var cityWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    fetch(cityWeatherUrl).then(function(reponse) {
        if(reponse.ok) {
            reponse.json().then(function(data) {
                console.log(data);
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                var coordUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
        
                fetch(coordUrl).then(function(response) {
                    if(reponse.ok) {
                        response.json().then(function(data){
                            console.log(data);
                        });
                    }
                })
        
            });
            console.log("API get worked");
        };

    })
};

//save cities to local storage and append
console.log(JSON.parse(localStorage.getItem("cities")));
console.log(savedCities.length);




/*get other weather info*/