const loc = document.location
const baseURL = "https://restcountries.com/v3.1/"

const countryName = loc.search.split('=')[1]

    
async function catchCountry() {
    try {
      const response = await fetch(baseURL + `name/${countryName}?fullText=true`, {
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
  })