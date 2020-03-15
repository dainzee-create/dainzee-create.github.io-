const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d068bc952bd45492d2ab0b69e8411d2c`


fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

    fiveDay = [];
    for (let i = 0; i <= jsObject.list.length < 6; i++ ) {
    if(jsObject.list[i].dt_text.includes("18:00:00")) {
        fiveDay[i] = jsObject.list[i].main.temp;
      }

      document.getElementById("forecast1") = forecast[i].main.temp;
      document.getElementById("forecast2") = forecast[i].main.temp;
      document.getElementById("forecast3") = forecast[i].main.temp;
      document.getElementById("forecast4") = forecast[i].main.temp;
      document.getElementById("forecast5") = forecast[i].main.temp;

    }
  });


