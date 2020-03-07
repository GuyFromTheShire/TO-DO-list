//select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes name
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show todays date
const options = {weekday: "long", month: "long", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("cs-CZ",options);