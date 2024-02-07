/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
console.log(BMIMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(typeof markHigherBMI2);
console.log(markHigherBMI2);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(`Dolphins: ${scoreDolphins} Koalas: ${scoreKoalas}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins < 100 && scoreKoalas < 100) {
  console.log("Neither team averaged over 100 points so nobody wins");
} else {
  console.log("TIE GAME! Both win the trophy");
}
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
