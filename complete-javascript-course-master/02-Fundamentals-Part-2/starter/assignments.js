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

//function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPopulationPercentage = percentageOfWorld1(1441);
const germanPopulationPercentage = percentageOfWorld1(83);
const finalndPopulationPercentage = percentageOfWorld1(6);

console.log(
  chinaPopulationPercentage,
  germanPopulationPercentage,
  finalndPopulationPercentage
);

//function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPopulationPercentage2 = percentageOfWorld2(1441);
const germanPopulationPercentage2 = percentageOfWorld2(83);
const finlandPopulationPercentage2 = percentageOfWorld2(6);

console.log(
  chinaPopulationPercentage2,
  germanPopulationPercentage2,
  finlandPopulationPercentage2
);

//Arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const chinaPopulationPercentage3 = percentageOfWorld3(1441);
const germanPopulationPercentage3 = percentageOfWorld3(83);
const finlandPopulationPercentage3 = percentageOfWorld3(6);

console.log(
  chinaPopulationPercentage3,
  germanPopulationPercentage3,
  finlandPopulationPercentage3
);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;

  console.log(description);
};

describePopulation("China", 1441);
describePopulation("Finland", 6);
describePopulation("Germany", 83);
