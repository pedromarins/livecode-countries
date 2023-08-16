const baseURL = "https://restcountries.com/v3.1/"
const content = document.querySelector("#content")
const search = document.querySelector("#search")

async function catchAllCountries() {
    try {
      const response = await fetch(baseURL + "all?fields=name,flags,population,region,capital", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

catchAllCountries().then(function(response) {
  response.forEach(country => {
    // console.log(country)
    const card = document.createElement('figure');
        card.innerHTML = `
          <img class="card-image" src="${country.flags.png}" alt="">
            <figcaption class="card-title">${country.name.common}</figcaption>
            <ul class="card-content">
                <li><strong>Population:</strong>${country.population}</li>
                <li><strong>Region:</strong>${country.region}</li>
                <li><strong>Capital:</strong>${country.capital}</li>
            </ul>
        </figure>
        `;
        card.classList.add("card")
        content.appendChild(card);
  });
})

search.addEventListener("input", () => {
  const countriesList = document.querySelectorAll('.card-title')

  countriesList.forEach(country => {
    if(!country.textContent.toLowerCase().includes(search.value.toLowerCase())) {
      country.parentNode.style.display = 'none'
    } else {
      country.parentNode.style.display = 'block'
    }
  })
})


