const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
// console.log(main,addUserBtn,doubleBtn,showMillionairesBtn,sortBtn,calculateWealthBtn);

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  // console.log(data.result[0]);
  const user = data.results[0];
  // console.log(user);

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  // console.log(newUser);
  addData(newUser);
}
function doubleMoney() {
  data = data.map((user) => {
    console.log(user);
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

function sortByMoney() {
  data.sort((a, b) => b.money - a.money);
  updateDom();
}

function addData(obj) {
  data.push(obj);
  updateDom();
}

function showMillionaires() {
  data = data.filter((item) => item.money >= 1000000);
  updateDom();
}

function calculateWealth() {
  const weight = data.reduce((acc, elem) => (acc += elem.money), 0);
  const elem = document.createElement("div");
  elem.innerHTML = `<h3>Total Money <strong>${formatNumberToMoney(weight)}</strong></h3>`;
  main.appendChild(elem);
}
function updateDom(object = data) {
  main.innerHTML = ` <h2><strong>Person</strong> Wealth</h2>`;

  object.forEach((item) => {
    const elem = document.createElement("div");
    elem.classList.add("person");
    elem.innerHTML = `<strong> ${item.name}</strong> ${formatNumberToMoney(
      item.money
    )}`;
    main.appendChild(elem);
  });
}
function formatNumberToMoney(number) {
  return "₹" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
