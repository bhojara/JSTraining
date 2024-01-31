const country = "The United States of America";
const continent = "North America";
let population = 130;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";
//isIsland = true;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

const averagePopulation = 33;
if (population > 33) {
  console.log(
    `${continent}'s population is ${
      population - averagePopulation
    } million above average`
  );
} else {
  console.log(
    `${continent}'s population is ${
      averagePopulation - population
    } million below average`
  );
}
