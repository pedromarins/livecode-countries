const baseURL = "https://restcountries.com/v3.1/"


async function catchAllCountries() {
    try {
      const response = await fetch(baseURL + "all?fields=name,flags,population,region", {
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
  console.log(response) 
})