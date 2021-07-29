const { fetchBreedDescription } = require('./breedFetcher');

//taking the console input and storing the bredd
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  //If error, return Error fetch details
  if (error) {
    return console.log("Error fetch details:", error);
  //Return breed description
  } else {
    return console.log(desc);
  }
});


