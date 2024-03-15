/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function cards() {
  //write your code here
  cards();
  document.getElementById("shuffle").addEventListener("click", cards());
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardType = ["♦", "♥", "♠", "♣"];

  let randomNumber = Math.floor(Math.random() * cardNumber.length);
  let randomType = Math.floor(Math.random() * cardType.length);
  console.log(cardNumber[randomNumber], cardType[randomType]);

  let number = document.getElementById("number");
  number.value = cardNumber[randomNumber];
  number.innerHTML = cardNumber[randomNumber];
  number.appendChild = cardNumber[randomNumber];

  let type = document.getElementById("type");
  type.value = cardType[randomType];
  type.innerHTML = cardType[randomType];
  type.appendChild = cardType[randomType];

  let type2 = document.getElementById("type2");
  type2.value = cardType[randomType];
  type2.innerHTML = cardType[randomType];
  type2.appendChild = cardType[randomType];

  if (
    cardType[randomType] === cardType[0] ||
    cardType[randomType] === cardType[1]
  ) {
    type.style.color = "red";
    type2.style.color = "red";
  }
};
 */
window.onload = function() {
  // Llama a la función cards() cuando la página se cargue
  cards();

  // Agrega un listener al botón "shuffle"
  document.getElementById("shuffle").addEventListener("click", cards);
};

function cards() {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardType = ["♦", "♥", "♠", "♣"];

  let randomNumber = Math.floor(Math.random() * cardNumber.length);
  let randomType = Math.floor(Math.random() * cardType.length);
  console.log(cardNumber[randomNumber], cardType[randomType]);

  let number = document.getElementById("number");
  number.value = cardNumber[randomNumber];
  number.innerHTML = cardNumber[randomNumber];
  number.appendChild = cardNumber[randomNumber];

  let type = document.getElementById("type");
  type.value = cardType[randomType];
  type.innerHTML = cardType[randomType];
  type.appendChild = cardType[randomType];

  let type2 = document.getElementById("type2");
  type2.value = cardType[randomType];
  type2.innerHTML = cardType[randomType];
  type2.appendChild = cardType[randomType];

  if (
    cardType[randomType] === cardType[0] ||
    cardType[randomType] === cardType[1]
  ) {
    type.style.color = "red";
    type2.style.color = "red";
  }
}
