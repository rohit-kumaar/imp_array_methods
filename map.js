import { ages } from "./data.js";

console.log(`Original ages: ${ages}`);

const newAges = ages.map((element) => {
  return element * 2;
});

console.log(`Twice the age: ${newAges}`);
