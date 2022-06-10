const data = {
  name: "Rohit",
  email: "rohit@gmail.com",
};

function user(data) {
  return function (userInfo) {
    return data[userInfo];
  };
}

const result = user(data)("email");
console.log(result);
