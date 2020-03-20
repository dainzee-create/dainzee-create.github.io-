const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {

        let info = document.createElement("section");
        let h2 = document.createElement("h2");
        let div = document.createElement("div");

        for (let l = 0; l < towns[i].events.length; l++) {
          div.innerHTML += towns[i].events[l] + "<br>";
        }
        h2.textContent = towns[i].name + " Events";
        info.appendChild(h2);
        info.appendChild(div);

        document.querySelector("div.communityEvents").appendChild(info);
      }
    }
  });