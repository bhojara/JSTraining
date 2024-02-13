const country = "The United States of America";
const continent = "North America";
let population = 130;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";

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

console.log("9" - "5"); // -> ?
console.log("19" - "13" + "17"); // -> ?
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?

//Commenting out so that the prompt does not interfere with the rest of the assignments
// const numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );
// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
//}

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

const language = "jivenese";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
