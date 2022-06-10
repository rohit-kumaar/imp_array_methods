// simple curring
const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const result1 = add(2)(3);
console.log(result1);

// Real time example
const data = {
  name: "Rohit",
  email: "rohit@gmail.com",
};

function user(data) {
  return function (userInfo) {
    return data[userInfo];
  };
}

const result2 = user(data)("email");
console.log(result2);
