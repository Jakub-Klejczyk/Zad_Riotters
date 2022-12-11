const axios = require("axios");

let response = null;
let data = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "a5c078ed-bf01-4332-90e1-4c63ba8d229b",
        },
      }
    );
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;

    data = json;

    dataJson = JSON.stringify(data);
    console.log(dataJson);
    resolve(json);
  }
});
