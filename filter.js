import { companies, ages } from "./data.js";

// comment company data
console.log(companies);
const newDate = companies.filter(
  (element) => element.start > 1990 && element.end < 2010
);
console.log(newDate);

//  comment filter age
console.log(ages);
const newAges = ages.filter((element) => element % 2 === 0);

console.log(newAges);
