//Variables from html DOM
const activateA = document.getElementById('activateA');
const RespA = document.getElementById('RespA');
RespA.innerHTML = "test";

//function

  const today = new Date();
  let Y = today.getFullYear();
  let M = today.getMonth() + 1;
  let D = today.getDate();
  let line = "";
  let hScore = 0;
  let cScore = 0;
function getResp() {
  let name = window.prompt("What is your name?");
  let age = window.prompt("What is your age?");
  let user = window.prompt("pick a number between 1 and 10");
  let comp = Math.floor(Math.random()*10)+1;
  let targ = Math.floor(Math.random()*10)+1;
  line += "Hello" + " " + name + " , " + "as of " + M + "/" + D + "/" + Y + " you are " + age + " years old.";
  RespA.innerHTML = line;
}

activateA.addEventListener('click', getResp);