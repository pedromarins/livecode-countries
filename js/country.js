const loc = document.location
const baseURL = "https://restcountries.com/v3.1/"

const countryName = loc.search.split('=')[1]

    
async function catchCountry() {
    try {
      const response = await fetch(baseURL + `name/${countryName}`, {
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

catchCountry().then(function(response) {
    console.log(response)
    console.log(response[0].name.common)
    console.log(response[0].name.nativeName)
    console.log(response[0].population)
    console.log(response[0].region)
    console.log(response[0].subregion)
    console.log(response[0].capital)
    console.log(response[0].tld)
    console.log(response[0].currencies)
    console.log(response[0].languages)
    console.log(response[0].borders)
  })