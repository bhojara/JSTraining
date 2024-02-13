"use strict";

function describeCountry(country, population, capitalCity) {
  const countryDetails = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return countryDetails;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");

console.log(descFinland);
console.log(descPortugal);
console.log(descGermany);
