const URL = "https://jsonplaceholder.typicode.com/users";

const user = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const userData = user();
userData.then((data) => {
  data.map((element) => console.table(element));
  //   data.map((element) => console.table(`${element.id} ${element.name}`));
});
