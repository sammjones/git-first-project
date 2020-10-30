// Feature 1
let now = new Date();
let temperatureContainer = document.querySelector("#temperature");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

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
temperatureContainer.innerHTML = `${day} ${hours}:${minutes}`;

// Feature 2 //
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  let citySelectorContainer = document.querySelector("#city-selector");
  citySelectorContainer.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}

let form = document.querySelector("#weather-form");
form.addEventListener("submit", search);

// JS FOR WEEK 5
//let apiKey = "1768d882e21eece70a5c2f0f1301e790";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//
function weather(response) {
  console.log(response.data.main.temp);

  let temperature = document.querySelector("#temperatureContainer");
  temperatureContainer.innerHTML = `${response.data.main.temp}`;
}

function searchCity(city) {
  let apiKey = "1768d882e21eece70a5c2f0f1301e790";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(weather);
}

function showPosition(position) {
  console.log(response.data);
  let h1 = document.querySelector("#city-selector");
  h1.innerHTML = "Seattle";
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let apiKey = "1768d882e21eece70a5c2f0f1301e790";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(weather);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-button");
button.addEventListener("click", getCurrentPosition);
