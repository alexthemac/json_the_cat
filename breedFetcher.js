//allows us to use request
const request = require("request");

//taking the console input and storing the bredd
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //If error, return request failed and error details
  if (error !== null) {
    return console.log("Request Failed:", error);
  }
  
  //stores the body in data variable.
  const data = JSON.parse(body);
  
  //if breed not found, return breed not found
  if (data.length === 0) {
    console.log("Breed name not found");
  //if breed found, return breed description
  } else {
    console.log(data[0]['description']);
  }
});