//Variables from html DOM
const button = document.getElementById('ButA');
const response = document.getElementById('RespA');

//function

  const Date = new Date();
  let Y = Date.getFullYear();
  let M = Date.getMonth() + 1;
  let D = Date.getDate();
  let line = "";
function getResp() {
  let name = window.prompt("What is your name?");
  let age = window.prompt("What is your age?");
  line += "Hello" + " " + name + " , " + "as of " + M + "/" + D + "/" + Y + " you are " + age + " years old.";
  response.innerHTML = line;
}

button.addEventListener('mousedown', getResp);