`use strict`;

1;
let navigation = document.getElementById("navElement");
let Burger = document.getElementById("burgerBar");

Burger.addEventListener("click", function () {
  navigation.classList.toggle("active");
  Burger.classList.toggle("burgerLine");
});

2;

let inputElement = document.querySelector(".input-class");
let buttonElement = document.querySelector(".butten-class");
let ulElement = document.querySelector(".ul-list");
let formElement = document.querySelector(".form-element");
let trashElement = document.querySelector(".trash");

formElement.addEventListener("submit", function (event) {
  trashElement.classList.add("trashActive");
  event.preventDefault();

  let inputValue = inputElement.value;

  let liElement = document.createElement("li");
  liElement.textContent = inputValue;
  liElement.style.marginTop = "10px";
  liElement.style.marginLeft = "5px";
  liElement.style.display = "flex";
  liElement.style.justifyContent = "space-between";
  liElement.style.color = "red";
  liElement.style.padding = '5px'

  trashElement.addEventListener("click", function () {
    liElement.remove();
  });
  liElement.appendChild(trashElement);
  ulElement.appendChild(liElement);
  inputElement.value = " ";
});

let clearAll = document.querySelector(".clear");
clearAll.addEventListener("click", function () {
  ulElement.remove();
});
