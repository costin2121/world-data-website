const seeStatsBtn = document.getElementById("see-stats-btn");
const countryInput = document.getElementById("country-selector");
const cityInput = document.getElementById("city-name-input");
const flCelius = document.getElementById("flCelius");
const flFaren = document.getElementById("flFaren");
const speed_kph = document.getElementById("speed_kph");
const speed_mph = document.getElementById("speed_mph");
const humidity = document.getElementById("humidity");
const celsius = document.getElementById("celsius");
const farenheight = document.getElementById("farenheight");
const cityname = document.getElementById("cityname");
const countryname = document.getElementById("countryname");
const getWeatherDataBtn = document.getElementById("getWeather-btn");
const country = document.getElementById("country");
const cases = document.getElementById("cases");
const deaths = document.getElementById("deaths");
const cured = document.getElementById("cured");


// fetch for covid stats on button click
seeStatsBtn.addEventListener("click", () => {
  const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${countryInput.value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cdata = data["All"];
      country.innerText = `Country: ${countryInput.value}`;
      cases.innerText = `Cases 😷: ${cdata.confirmed.toLocaleString("en-US")}`;
      deaths.innerText = `Deaths 💀: ${cdata.deaths.toLocaleString("en-US")}`;
      cured.innerText = `Cured 💉: ${cdata.recovered.toLocaleString("en-US")}`;
    });
});

// fetch  for weather on button click

getWeatherDataBtn.addEventListener("click", () => {
  if (cityInput.value.length <= 0) {
    cityname.innerText = `City: INVALID`;
    cityname.style.color = "red";

    return setTimeout(() => {
      cityname.innerText = `Country: None`;
      cityname.style.color = "black";
    }, 3500);
  }
  const url = `https://api.weatherapi.com/v1/current.json?key=bd7296e4f9da40fbaf2181159220101&q=${cityInput.value}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityname.innerText = `${data.location.name}`;
      countryname.innerText = `${data.location.country}`;
      celsius.innerText = `${data.current.temp_c}`;
      farenheight.innerText = `${data.current.temp_f}`;
      speed_kph.innerText = `${data.current.wind_kph}`;
      speed_mph.innerText = `${data.current.wind_mph}`;
      humidity.innerText = `${data.current.humidity}`;
      flCelius.innerText = `${data.current.feelslike_c}`;
      flFaren.innerText = `${data.current.feelslike_f}`;
    });
});
