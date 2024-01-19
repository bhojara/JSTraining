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
