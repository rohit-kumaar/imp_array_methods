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

// comment filter the object
// concept The Object.values method returns an array of the object's values.
const swiperSlide = document.querySelectorAll(".swiper-slide");
const values = Object.values(swiperSlide);

const newObjDate = values.filter(
  (element) => element.dataset.value > 10000 && element.dataset.value < 25000
);

console.log(newObjDate);
