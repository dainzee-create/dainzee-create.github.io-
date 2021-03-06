const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {

        let card = document.createElement('section');
        let div = document.createElement('div');
        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        pop.textContent = "Current Population: " + towns[i].currentPopulation;
        rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        card.setAttribute('class', 'infoSection');
        div.setAttribute('class', 'cardsDiv');
        name.setAttribute('id', 'cardsName');
        motto.setAttribute('id', 'cardsMotto');
        year.setAttribute('id', 'cardsYear');
        pop.setAttribute('id', 'cardsPop');
        rain.setAttribute('id', 'cardsRain');
        photo.setAttribute('src', "images/" + towns[i].photo);
        photo.setAttribute('alt', "Picture of: " + name.textContent);

        div.appendChild(name);
        div.appendChild(motto);
        div.appendChild(year);
        div.appendChild(pop);
        div.appendChild(rain);
        card.appendChild(div);
        card.appendChild(photo);

        document.querySelector('div.cards').appendChild(card);
      }
    }
  });
