const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=d068bc952bd45492d2ab0b69e8411d2c`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let t = jsObject.main.temp;
    let w = jsObject.wind.speed;
    let p = Math.pow(w, 0.16);

    document.getElementById("current-temp").textContent = jsObject.weather[0].description;
    document.getElementById("temp").textContent = t;
    document.getElementById("humid").textContent = jsObject.main.humidity;
    document.getElementById("windSpeed").textContent = w;

    if (t <= 50 && w > 3) {
      let windChill = 35.74 + (0.6215 * t) - (35.75 * p) + (0.4275 * t * p);
      document.getElementById("windChill").innerHTML = Math.round(windChill) + "&#176;F";
    } else {
      document.getElementById("windChill").textContent = "N/A";
    }
  });