//Variables from html DOM
const button = document.getElementById('ButA');
const response = document.getElementById('RespA');

//function

  const Date = new Date();
  let Y = Date.getFullYear();
  let M = Date.getMonth() + 1;
  let D = Date.getDate();
  let line = "";
  let hScore = 0;
  let cScore = 0;
function getResp() {
  let name = window.prompt("What is your name?");
  let age = window.prompt("What is your age?");
  let user = window.prompt("pick a number between 1 and 10");
  let comp = Math.floor(Math.random()*10)+1;
  let targ = Math.floor(Math.random()*10)+1;
  if(user === targ){
    hScore++;
  }
  line += "Hello" + " " + name + " , " + "as of " + M + "/" + D + "/" + Y + " you are " + age + " years old.";
  response.innerHTML = line;
}

button.addEventListener('mousedown', getResp);