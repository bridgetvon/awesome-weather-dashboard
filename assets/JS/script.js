// variables for information the dashboard should display 
const apiKey = "a7fd0707ae1dd8bd1ac65f74c64f07f0";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric';
let submitBtn = document.getElementById('city-search');
let temperature = document.getElementById('temp');
let cityWind = document.getElementById('wind');
let humid = document.getElementById('humidity');
let uv = document.getElementById('uv-index');
let savedCities = [];
let searchCities = document.getElementById('saved-cities');
let cityName = document.getElementById('city-name-date');

//get moment js
var now = moment().format('MMMM Do YYYY');
console.log(moment());
document.getElementById('date-today').append(now);

//get cities from local storage to display search history 
if(localStorage.getItem("cities") != null) {
savedCities = JSON.parse(localStorage.getItem("cities"))
for (var i=0; i< savedCities.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = savedCities[i];
    btn.classList.add('saved-cities');
    btn.addEventListener("click", cityWeather);
    searchCities.appendChild(btn);


}
};

submitBtn.addEventListener('click', cityWeather);

//get city from API 
function cityWeather (event) {
    console.log(event);
    if (event.target.nodeName == "BUTTON") {
        console.log("condition met");
        var city = event.target.innerText;
    }
    else {
    var city = document.getElementById('city-input').value;
    }
    if (savedCities.includes(city)) {
        console.log("duplicate city");
    } else if (city.trim() == "" ) {
      return;  
    } else {
        savedCities.push(city);
    };
        cityName.innerHTML = city; /* add date */

    localStorage.setItem('cities', JSON.stringify(savedCities));
    var cityWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    
    fetch(cityWeatherUrl).then(function(reponse) {
        if(reponse.ok) {
            reponse.json().then(function(data) {
                console.log(data);
                temperature.innerHTML = "Temperature: " + data.main.temp + " &degF";
                cityWind.textContent = "Wind:  " + data.wind.speed + " mph";
                humid.textContent ="Humidity: " +  data.main.humidity + " %";
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                var coordUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
                // create five day forcast get elements from HTML 
                fetch(coordUrl).then(function(response) {
                    if(reponse.ok) {
                        response.json().then(function(data){
                            console.log(data);
                                uv.textContent = "UV Index: " + data.current.uvi;
                                var icon = data.current.weather[0].icon;
                                var iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`

                            temperature1.innerHTML = "Temp: " + data.daily[1].temp.max + " &degF";
                            cityWind1.innerHTML ="Wind: " + data.daily[1].wind_speed + " mph";
                            humid1.innerHTML ="Humidity: " + data.daily[1].humidity + " %";
                            uv1.innerHTML ="Uv Index: " + data.daily[1].uvi;
                            cityName1.innerHTML = city;
                            img1.src = iconLink;

                            temperature2.innerHTML = "Temp: " + data.daily[2].temp.max + " &degF";
                            cityWind2.innerHTML ="Wind: " + data.daily[2].wind_speed + " mph";
                            humid2.innerHTML ="Humidity: " + data.daily[2].humidity + " %";
                            uv2.innerHTML = "Uv Index: " +data.daily[2].uvi;
                            cityName2.innerHTML = city;
                            img2.src = iconLink;

                            temperature3.innerHTML = "Temp: " +data.daily[3].temp.max + " &degF";
                            cityWind3.innerHTML = "Wind: " +data.daily[3].wind_speed + " mph";
                            humid3.innerHTML ="Humidity: " + data.daily[3].humidity + " %";
                            uv3.innerHTML = "Uv Index: " + data.daily[3].uvi;
                            cityName3.innerHTML = city;
                            img3.src = iconLink;

                            temperature4.innerHTML ="Temp: " + data.daily[4].temp.max + " &degF";
                            cityWind4.innerHTML = "Wind: " +data.daily[4].wind_speed + " mph";
                            humid4.innerHTML ="Humidity: " + data.daily[4].humidity + " %";
                            uv4.innerHTML ="Uv Index: " + data.daily[4].uvi;
                            cityName4.innerHTML = city;
                            img4.src = iconLink;

                            temperature5.innerHTML ="Temp: " + data.daily[5].temp.max + " &degF";
                            cityWind5.innerHTML ="Wind: " + data.daily[5].wind_speed + " mph";
                            humid5.innerHTML ="Humidity: " + data.daily[5].humidity + " %";
                            uv5.innerHTML ="Uv Index: " + data.daily[5].uvi;
                            cityName5.innerHTML = city;
                            img5.src = iconLink;


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





 
let temperature1 = document.getElementById('temp1');
let cityWind1 = document.getElementById('wind1');
let humid1 = document.getElementById('humidity1');
let uv1 = document.getElementById('uv-index1');
let cityName1 = document.getElementById('city-name-date1');
let icon1 = document.getElementById("img1");

let temperature2 = document.getElementById('temp2');
let cityWind2 = document.getElementById('wind2');
let humid2 = document.getElementById('humidity2');
let uv2 = document.getElementById('uv-index2');
let cityName2 = document.getElementById('city-name-date2');

let temperature3 = document.getElementById('temp3');
let cityWind3 = document.getElementById('wind3');
let humid3 = document.getElementById('humidity3');
let uv3 = document.getElementById('uv-index3');
let cityName3 = document.getElementById('city-name-date3');

let temperature4 = document.getElementById('temp4');
let cityWind4 = document.getElementById('wind4');
let humid4 = document.getElementById('humidity4');
let uv4 = document.getElementById('uv-index4');
let cityName4 = document.getElementById('city-name-date4');

let temperature5 = document.getElementById('temp5');
let cityWind5 = document.getElementById('wind5');
let humid5 = document.getElementById('humidity5');
let uv5 = document.getElementById('uv-index5');
let cityName5 = document.getElementById('city-name-date5');




