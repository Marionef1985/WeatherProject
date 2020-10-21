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
  todaydate.innerHTML = `${day}, ${hours}:${minutes}`;
}

runtime();
let dayTwo = days[now.getDay()+2];
document.querySelector("#day-two").innerHTML = `${dayTwo}`;
let dayThree = days[now.getDay()+3];
document.querySelector("#day-three").innerHTML = `${dayThree}`;
let dayFour = days[now.getDay()+4];
document.querySelector("#day-four").innerHTML = `${dayFour}`;
let dayFive = days[now.getDay()+5];
document.querySelector("#day-five").innerHTML = `${dayFive}`;

// esta formula pide que la info que pongamos en el search tenga un accion y llame a la funcion de "get city"

document.querySelector("form").addEventListener("submit", getCity);
document.querySelector("#btn-go").addEventListener("click", getCity);


//toda la informacion que sale en el card de la izquierda (todays temp)
function getRemoteForecasteWeather (response){
console.log(response);
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

let currentTempCelsiusRemote = null;
function changeTempFarRemote(event) {
event.preventDefault();
document.querySelector("#current-temp").innerHTML = `${Math.round(((currentTempCelsiusRemote * 9) / 5) + 32)}ºF`;
//document.querySelector("#min-temperature").innerHTML = `${Math.round(((currentMinTempCelsiusRemote * 9) / 5) + 32)}ºF`;
//document.querySelector("#max-temperature").innerHTML = `${Math.round(((currentMaxTempCelsiusRemote * 9) / 5) + 32)}ºF`;
//document.querySelector("#feels-like-answer").innerHTML = `${Math.round(((currentTempCelsiusFeelsRemote * 9) / 5) + 32)}ºF`;
}
function changeTempCelRemote(event) {
  event.preventDefault();
  document.querySelector("#current-temp").innerHTML = `${currentTempCelsiusRemote}ºC`;
  //document.querySelector("#min-temperature").innerHTML = `${currentMinTempCelsiusRemote}ºC`;
  //document.querySelector("#max-temperature").innerHTML = `${currentMaxTempCelsiusRemote}ºC`;
  //document.querySelector("#feels-like-answer").innerHTML = `${currentTempCelsiusFeelsRemote}ºC`;
}


function getRemoteWeather(response) {
  currentTempCelsiusRemote = Math.round(response.data.main.temp);
  //currentMinTempCelsiusRemote = Math.round(response.data.main.temp_min);
  //currentMaxTempCelsiusRemote = Math.round(response.data.main.temp_max);
  //currentTempCelsiusFeelsRemote = Math.round(response.data.main.feels_like);
  document.querySelector("#current-city").innerHTML= response.data.name;
  document.querySelector("#current-temp").innerHTML = `${Math.round(response.data.main.temp)}ºC`;
  document.querySelector("#temp-descrition").innerHTML = response.data.weather[0].main;
  document.querySelector("#min-temperature").innerHTML = `${Math.round(response.data.main.temp_min)}ºC`;
  document.querySelector("#max-temperature").innerHTML = `${Math.round(response.data.main.temp_max)}ºC` ;
  document.querySelector("#humidity-answer").innerHTML = Math.round(response.data.main.humidity);
  document.querySelector("#feels-like-answer").innerHTML = `${Math.round(response.data.main.feels_like)}ºC`;
  document.querySelector("#icon-left-card").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
  document.querySelector("#icon-left-card").setAttribute("alt", `${response.data.weather[0].description}`);// descripcion en codigo del icono de la tarjeta izquierda 
  document.querySelector("#farenheit-btn").addEventListener("click", changeTempFarRemote);
  document.querySelector("#celcius-btn").addEventListener("click", changeTempCelRemote);
}

//esta funcion de arriba hace que segun la ciudad que buscaste en la formula de abajo, busque esa ciudad en la api, gracias
//a axios y te de los datos de la temperatura del lugar buscado

function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#exampleInputtext1");
  let city = `${input.value}`;
  search(city);
}
// esta formula de arriba te marca la ciudad que buscas en el search city en el header (#current-city) y le da las variables
//necesarias a axios para llamar a la siguiente funcion "getRemoteWeather"

function search(city) {
let units = "metric";
let apiKey = "4618b7617a5cf5299e42edf3e250ff0a";
let apiUrlRemote = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
let apiUrlRemoteForecaste = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
axios.get(apiUrlRemote).then(getRemoteWeather);
axios.get(apiUrlRemoteForecaste).then(getRemoteForecasteWeather);
}

search("New York");
// creamo la formula de arriba para que cuando se abra la pagina te pongo algun info real, 
//en este caso es de NY. al abrir la pagina muestra NY y si buscas alguna ciudad en especial, te la da tambien

//ABAJO FORMULAS PARA CURRENT! LOCALIZACION DE UBICACION ACTUAL

//esta formula de abajo hace que salga la temperatura actual #current-temp segun geolocalizacion, y el nomnbre de ciudad #current-city//WORKING
function showForecastCurrentTemperature(response) {
console.log(response);
//maxTempDayOneCurrent = Math.round(response.data.list[6].main.temp_max);
//maxTempDayTwoCurrent = Math.round(response.data.list[14].main.temp_max);
//maxTempDayThreeCurrent = Math.round(response.data.list[22].main.temp_max);
//maxTempDayFourCurrent = Math.round(response.data.list[30].main.temp_max);
//maxTempDayFiveCurrent = Math.round(response.data.list[38].main.temp_max);
document.querySelector("#max-temp-day-one").innerHTML = `${Math.round(response.data.list[6].main.temp_max)}ºC`;//day1
document.querySelector("#description-day-one").innerHTML = response.data.list[6].weather[0].main;//day1
document.querySelector("#icon-right-card-day-one").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[7].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-one").setAttribute("alt", `${response.data.list[7].weather[0].description}`);
document.querySelector("#max-temp-day-two").innerHTML = `${Math.round(response.data.list[14].main.temp_max)}ºC`;//day2
document.querySelector("#description-day-two").innerHTML = response.data.list[14].weather[0].main;//day2
document.querySelector("#icon-right-card-day-two").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-two").setAttribute("alt", `${response.data.list[15].weather[0].description}`);
document.querySelector("#max-temp-day-three").innerHTML = `${Math.round(response.data.list[22].main.temp_max)}ºC`;//day3
document.querySelector("#description-day-three").innerHTML = response.data.list[22].weather[0].main;//day3
document.querySelector("#icon-right-card-day-three").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-three").setAttribute("alt", `${response.data.list[23].weather[0].description}`);
document.querySelector("#max-temp-day-four").innerHTML = `${Math.round(response.data.list[30].main.temp_max)}ºC`;//day4
document.querySelector("#description-day-four").innerHTML = response.data.list[30].weather[0].main;//day4
document.querySelector("#icon-right-card-day-four").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-four").setAttribute("alt", `${response.data.list[31].weather[0].description}`);
document.querySelector("#max-temp-day-five").innerHTML = `${Math.round(response.data.list[38].main.temp_max)}ºC`;//day5
document.querySelector("#description-day-five").innerHTML = response.data.list[38].weather[0].main;//day5
document.querySelector("#icon-right-card-day-five").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
document.querySelector("#icon-right-card-day-five").setAttribute("alt", `${response.data.list[39].weather[0].description}`);
}
let currentTempCelsius = null; //de nuestro location
function changeTempFarCurrent(event) {
event.preventDefault();
document.querySelector("#current-temp").innerHTML = `${Math.round(((currentTempCelsius * 9) / 5) + 32)}ºF`;
//document.querySelector("#min-temperature").innerHTML = `${Math.round(((currentMinTempCelsius * 9) / 5) + 32)}ºF`;
//document.querySelector("#max-temperature").innerHTML = `${Math.round(((currentMaxTempCelsius * 9) / 5) + 32)}ºF`;
//document.querySelector("#feels-like-answer").innerHTML = `${Math.round(((currentTempFeels * 9) / 5) + 32)}ºF`;
}
function changeTempCelCurrent(event) {
  event.preventDefault();
  document.querySelector("#current-temp").innerHTML = `${currentTempCelsius}ºC`;
  //document.querySelector("#min-temperature").innerHTML = `${currentMinTempCelsius}ºC`;
  //document.querySelector("#max-temperature").innerHTML = `${currentMaxTempCelsius}ºC`;
  //document.querySelector("#feels-like-answer").innerHTML = `${currentTempFeels}ºC`;
}
function showTemperature(response) {
  console.log(response);
  currentTempCelsius = Math.round(response.data.main.temp);
  //currentMinTempCelsius = Math.round(response.data.main.temp_min);
  //currentMaxTempCelsius = Math.round(response.data.main.temp_max);
  //currentTempFeels = Math.round(response.data.main.feels_like);
  document.querySelector("#current-temp").innerHTML =  `${Math.round(response.data.main.temp)}ºC` ;
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp-descrition").innerHTML = response.data.weather[0].main;
  document.querySelector("#min-temperature").innerHTML = `${Math.round(response.data.main.temp_min)}ºC` ;
  document.querySelector("#max-temperature").innerHTML = `${Math.round(response.data.main.temp_max)}ºC` ;
  document.querySelector("#humidity-answer").innerHTML = Math.round(response.data.main.humidity);
  document.querySelector("#feels-like-answer").innerHTML = `${Math.round(response.data.main.feels_like)}ºC`;
  document.querySelector("#icon-left-card").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);//icono del clima en tarjeta izquierda
  document.querySelector("#icon-left-card").setAttribute("alt", `${response.data.weather[0].description}`);
  document.querySelector("#farenheit-btn").addEventListener("click", changeTempFarCurrent); //latitude and longitude
  document.querySelector("#celcius-btn").addEventListener("click", changeTempCelCurrent);
}


function showPosition(position) {
  //dentro de esta function, estamos dando todos los datos que necesitamos para poder moestrar ubicacion, que la temperatura se refleje en ºC (metric) ºF(seria imperial)
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "4618b7617a5cf5299e42edf3e250ff0a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  console.log(apiUrlForecast);
  console.log(latitude);
  axios.get(apiUrl).then(showTemperature); 
  axios.get(apiUrlForecast).then(showForecastCurrentTemperature); 
  //estamos llamando a axios para que nos muestre la temperatura local, pero tenemos que crear primero la function de "showTemperature"
} //cuando usamos axios, en la function que creamos pondremos un (response) osea showTemperature(response)

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

document.querySelector("#btn-current").addEventListener("click", getCurrentPosition);
// aqui termina la formula para tener la temperatura y el lugar en geolocalizacion actual



//challenge 3 cambiar la temperatura de ºC a ºF


//let maxTempDayOneCurrent = null;
//let maxTempDayTwoCurrent = null;
//let maxTempDayThreeCurrent = null;
//let maxTempDayFourCurrent = null;
//let maxTempDayFiveCurrent = null;


//let weather = [
//{
//country: "Paris",
//temp: 19.7,
//humidity: 80,
//},
//{
//country: "Tokyo",
//temp: 17.3,
//humidity: 50,
//},
//{
//country: "Lisbon",
//temp: 30.2,
//humidity: 20,
//},
//{
//country: "San Francisco",
//temp: 20.9,
//humidity: 100,
//},
//{
//country: "Moscow",
//temp: -5,
//humidity: 20,
//},
//];

//let currentCity = prompt("Enter City");
//currentCity = currentCity.toLowerCase().trim();
//if (currentCity === "paris") {
//alert(
//`It is currently ${weather[0].temp}ºC in ${weather[0].country} with a humidity of ${weather[0].humidity}%`
//);
//} else if (currentCity === "tokyo") {
//alert(
//`It is currently ${weather[1].temp}ºC in ${weather[1].country} with a humidity of ${weather[1].humidity}%`
//);
//} else if (currentCity === "lisbon") {
//alert(
//`It is currently ${weather[2].temp}ºC in ${weather[2].country} with a humidity of ${weather[2].humidity}%`
//);
//} else if (currentCity === "san francisco") {
//alert(
//`It is currently ${weather[3].temp}ºC in ${weather[3].country} with a humidity of ${weather[3].humidity}%`
//);
//} else if (currentCity === "moscow") {
//alert(
//`It is currently ${weather[4].temp}ºC in ${weather[4].country} with a humidity of ${weather[4].humidity}%`
//);
//} else {
//alert(
//`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${currentCity}`
//);
//}
