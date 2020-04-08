const requestURL = 'https://dainzee-create.github.io/dainzee-create.github.io-/L13%20Final/rivGuides.json';

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);

  const guides = jsonObject['guides'];

      for (let i = 0; i < guides.length; i++) {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let certification = document.createElement('p');
      let years = document.createElement('p');
      let email = document.createElement('p');
      let bio = document.createElement('p');
      let imageurl = document.createElement('img');

      h2.textContent = guides[i].name + ' ' + guides[i].lastname;
      certification.textContent = "Certification Level: " + guides[i].certification;
      years.textContent = "Years of Experience: " + guides[i].years;
      email.textContent = "Email: " + guides[i].email;
      bio.textContent = "Bio: " + guides[i].bio;


      imageurl.setAttribute('src', guides[i].imageurl);
      imageurl.setAttribute('alt', "Picture of: " + h2.textContent);


      card.appendChild(h2);
      card.appendChild(certification);
      card.appendChild(years);
      card.appendChild(email);
      card.appendChild(bio);
      card.appendChild(imageurl);

      document.querySelector('div.guides').appendChild(card);
      }
    });


