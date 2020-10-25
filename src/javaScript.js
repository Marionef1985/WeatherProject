// challenge 1 poner la hora y el dia actual en la pagina
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let now = new Date();
let nowDate = document.querySelector("span#todaydate");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = addZero(now.getHours());
let minutes = addZero(now.getMinutes());

function runtime() {
  nowDate.innerHTML = `${day}, ${hours}:${minutes}`;
}

runtime();


function getDayTwo(dayTwo) {
  dayTwo = days[(now.getDay()+2)];
document.querySelector("#day-two").innerHTML = `${dayTwo}`;
  if (dayTwo > 6) {
    dayTwo = days[(now.getDay()+2)-7];
  }
  return dayTwo;
}
getDayTwo();

function getDayThree(dayThree) {
 dayThree = days[(now.getDay() +3)];
document.querySelector("#day-three").innerHTML = `${dayThree}`;
  if (dayThree > 6) {
    dayThree = days[(now.getDay()+3)-7];
  }
  return dayThree;
  
}
getDayThree();

function getDayFour(dayFour) {
  dayFour = days[(now.getDay()+4)];
document.querySelector("#day-four").innerHTML = `${dayFour}`;
  if (dayFour > 6) {
    dayFour = days[(now.getDay()+4)-7];
  }
  return dayFour;
}
getDayFour();

function getDayFive(dayFive) {
  dayFive = days[(now.getDay()+5)];
document.querySelector("#day-five").innerHTML=`${dayFive}`;
  if (dayFive < 0) {
    dayFive = days[(now.getDay()+5)-7];
  }
  return dayFive;
}
getDayFive();





//1.A function to submit the form
function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#exampleInputtext1");
  let city = `${input.value}`;
  search(city);
}
document.querySelector("form").addEventListener("submit", getCity);
document.querySelector("#btn-go").addEventListener("click", getCity);
// esta formula de arriba te marca la ciudad que buscas en el search city en el header (#current-city) y le da las variables
//necesarias a axios para llamar a la siguiente funcion "getRemoteWeather"
//

//2.A function to get the current location
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
document.querySelector("#btn-current").addEventListener("click", getCurrentPosition);
// aqui termina la formula para tener la temperatura y el lugar en geolocalizacion actual
//

//3.A function to request the city (axios)
function search(city) {
let units = "metric";
let apiKey = "4618b7617a5cf5299e42edf3e250ff0a";
let apiUrlRemote = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
let apiUrlRemoteForecaste = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
axios.get(apiUrlRemote).then(showCurrentLocationWeather);
axios.get(apiUrlRemoteForecaste).then(getRemoteForecasteWeather);
}

search("New York");



//4.A function to request the current location (axios)
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "4618b7617a5cf5299e42edf3e250ff0a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  //console.log(apiUrl);
  //console.log(apiUrlForecast);
  axios.get(apiUrl).then(showCurrentLocationWeather); 
  axios.get(apiUrlForecast).then(getRemoteForecasteWeather); 
  //estamos llamando a axios para que nos muestre la temperatura local, pero tenemos que crear primero la function de "showTemperature"
} //cuando usamos axios, en la function que creamos pondremos un (response) osea showTemperature(response)
//

//5.A function to update the current weather
function showCurrentLocationWeather(response) {
  //console.log(response);
  currentTempCelsius = Math.round(response.data.main.temp);
  currentMinTempCelsius = Math.round(response.data.main.temp_min);
  currentMaxTempCelsius = Math.round(response.data.main.temp_max);
  currentTempFeels = Math.round(response.data.main.feels_like);
  windSpeed = Math.round(response.data.wind.speed);
  document.querySelector("#current-temp").innerHTML =  `${Math.round(response.data.main.temp)}ºC` ;
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp-descrition").innerHTML = response.data.weather[0].main;
  document.querySelector("#min-temperature").innerHTML = `${Math.round(response.data.main.temp_min)}ºC` ;
  document.querySelector("#max-temperature").innerHTML = `${Math.round(response.data.main.temp_max)}ºC` ;
  document.querySelector("#wind-speed").innerHTML = `${Math.round(windSpeed * 3.6)}km/h`;
  document.querySelector("#feels-like-answer").innerHTML = `${Math.round(response.data.main.feels_like)}ºC`;
  document.querySelector("#humidity-answer").innerHTML = Math.round(response.data.main.humidity);
  document.querySelector("#icon-left-card").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
  document.querySelector("#icon-left-card").setAttribute("alt", `${response.data.weather[0].description}`);
  document.querySelector("#farenheit-btn").addEventListener("click", changeTempFarCurrent); //latitude and longitude
  document.querySelector("#celcius-btn").addEventListener("click", changeTempCelCurrent);
}
//

//6.A function to update the forecast (city)
function getRemoteForecasteWeather (response){
tempDayOne = Math.round(response.data.list[6].main.temp_max);
tempDayTwo = Math.round(response.data.list[14].main.temp_max);
tempDayThree = Math.round(response.data.list[22].main.temp_max);
tempDayFour = Math.round(response.data.list[30].main.temp_max);
tempDayFive = Math.round(response.data.list[38].main.temp_max);
document.querySelector("#precipitation").innerHTML = `${Math.round((response.data.list[0].pop)*100)}%`;
document.querySelector("#max-temp-day-one").innerHTML = `${Math.round(response.data.list[6].main.temp_max)}ºC`;//day1
document.querySelector("#description-day-one").innerHTML = response.data.list[6].weather[0].main;//day1
document.querySelector("#icon-right-card-day-one").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-one").setAttribute("alt", `${response.data.list[8].weather[0].description}`);
document.querySelector("#max-temp-day-two").innerHTML = `${Math.round(response.data.list[14].main.temp_max)}ºC`;//day2
document.querySelector("#description-day-two").innerHTML = response.data.list[14].weather[0].main;//day2
document.querySelector("#icon-right-card-day-two").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-two").setAttribute("alt", `${response.data.list[16].weather[0].description}`);
document.querySelector("#max-temp-day-three").innerHTML = `${Math.round(response.data.list[22].main.temp_max)}ºC`;//day3
document.querySelector("#description-day-three").innerHTML = response.data.list[22].weather[0].main;//day3
document.querySelector("#icon-right-card-day-three").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-three").setAttribute("alt", `${response.data.list[24].weather[0].description}`);
document.querySelector("#max-temp-day-four").innerHTML = `${Math.round(response.data.list[30].main.temp_max)}ºC`;//day4
document.querySelector("#description-day-four").innerHTML = response.data.list[30].weather[0].main;//day4
document.querySelector("#icon-right-card-day-four").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-four").setAttribute("alt", `${response.data.list[32].weather[0].description}`);
document.querySelector("#max-temp-day-five").innerHTML = `${Math.round(response.data.list[38].main.temp_max)}ºC`;//day5
document.querySelector("#description-day-five").innerHTML = response.data.list[38].weather[0].main;//day5
document.querySelector("#icon-right-card-day-five").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-five").setAttribute("alt", `${response.data.list[39].weather[0].description}`);
}
//

//7.A function to convert to C
function changeTempCelCurrent(event) {
  event.preventDefault();
  document.querySelector("#current-temp").innerHTML = `${currentTempCelsius}ºC`;
  document.querySelector("#min-temperature").innerHTML = `${currentMinTempCelsius}ºC`;
  document.querySelector("#max-temperature").innerHTML = `${currentMaxTempCelsius}ºC`;
  document.querySelector("#feels-like-answer").innerHTML = `${currentTempFeels}ºC`;
  document.querySelector("#max-temp-day-one").innerHTML = `${tempDayOne}ºC`;
  document.querySelector("#max-temp-day-two").innerHTML = `${tempDayTwo}ºC`;
  document.querySelector("#max-temp-day-three").innerHTML = `${tempDayThree}ºC`;
  document.querySelector("#max-temp-day-four").innerHTML = `${tempDayFour}ºC`;
  document.querySelector("#max-temp-day-five").innerHTML = `${tempDayFive}ºC`;
}
//

let currentTempCelsius = null; //de nuestro location
let currentMinTempCelsius = null;
let currentMaxTempCelsius = null;
let currentTempFeels = null;
let tempDayOne = null;
let tempDayTwo = null;
let tempDayThree = null;
let tempDayFour = null;
let tempDayFive = null;
let windSpeed = null;
//8.A function to convert to F
function changeTempFarCurrent(event) {
event.preventDefault();
document.querySelector("#current-temp").innerHTML = `${Math.round(((currentTempCelsius * 9) / 5) + 32)}ºF`;
document.querySelector("#min-temperature").innerHTML = `${Math.round(((currentMinTempCelsius * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temperature").innerHTML = `${Math.round(((currentMaxTempCelsius * 9) / 5) + 32)}ºF`;
document.querySelector("#feels-like-answer").innerHTML = `${Math.round(((currentTempFeels * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temp-day-one").innerHTML = `${Math.round(((tempDayOne * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temp-day-two").innerHTML = `${Math.round(((tempDayTwo * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temp-day-three").innerHTML = `${Math.round(((tempDayThree * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temp-day-four").innerHTML = `${Math.round(((tempDayFour * 9) / 5) + 32)}ºF`;
document.querySelector("#max-temp-day-five").innerHTML = `${Math.round(((tempDayFive * 9) / 5) + 32)}ºF`;
}