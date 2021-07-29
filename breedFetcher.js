//allows us to use request
const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    //If there is an error, pass the error to callback function
    if (error !== null) {
      callback(error);
    //If there is no error, pass the data and error to callback function.
    } else {
      //If there is a valid breed, send the description as the data to the callback function.
      if (JSON.parse(body).length !== 0) {
        const data = JSON.parse(body)[0]['description'];
        callback(error, data);
      //If there is no valid breed, send Breed name not found as the data to the callback function.
      } else {
        callback(error, "Breed name not found");
      }
    }
  });
};

module.exports = {fetchBreedDescription};