const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=d068bc952bd45492d2ab0b69e8411d2c`;


fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {

    let dayOption = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = 1;
    for (let day of jsObject.list) {
      if (day.dt_txt.includes("18:00:00")) {
        let date = new Date(day.dt_txt);
        let dayId = "forecast" + days;
        const iconImage = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        document.getElementById(dayId).textContent = dayOption[date.getDay()];
        document.getElementById(`${dayId}_temp`).textContent = day.main.temp.toFixed(0) + " F";
        document.getElementById(`${dayId}_image`).setAttribute("src", iconImage);
        document.getElementById(`${dayId}_image`).setAttribute("alt", day.weather[0].description);
        days++;
      }
    }
  });
