/*----Start Basic Calculator Section----*/
const dispaly = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);
let string = "";

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      dispaly.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      dispaly.value = string;
    } else if (e.target.innerHTML == "OFF") {
      string = "";
      dispaly.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      dispaly.value = string;
    } else {
      string += e.target.innerHTML;
      dispaly.value = string;
    }
  });
});
/*----End Basic Calculator Section----*/
