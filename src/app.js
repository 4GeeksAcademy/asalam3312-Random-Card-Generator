/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  let number = document.getElementById("number");
  number.value = cardNumber[randomNumber];
  number.innerHTML = cardNumber[randomNumber];
  number.appendChild = cardNumber[randomNumber];

  let randomType = Math.floor(Math.random() * cardType.length);
  console.log(cardNumber[randomNumber], cardType[randomType]);

  let type = document.getElementById("type");
  type.value = cardType[randomType];
  type.innerHTML = cardType[randomType];
  type.appendChild = cardType[randomType];

  let type2 = document.getElementById("type2");
  type2.value = cardType[randomType];
  type2.innerHTML = cardType[randomType];
  type2.appendChild = cardType[randomType];

  /* if () */
};
