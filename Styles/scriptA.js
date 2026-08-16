//Variables from html DOM
const activateA = document.getElementById('activateA');
const RespA = document.getElementById('RespA');
RespA.innerHTML = "Response here";
const RespB = document.getElementById('RespB');
RespB.innerHTML = "Score here";

//function

  const today = new Date();
  let Y = today.getFullYear();
  let M = today.getMonth() + 1;
  let D = today.getDate();
  let line = "";
  let hScore = 0;
  let cScore = 0;
  let linB = "";
function getResp() {
  let name = window.prompt("What is your name?");
  let age = window.prompt("What is your age?");
  let user = window.prompt("pick a number between 1 and 10");
  let comp = Math.floor(Math.random()*10)+1;
  let targ = Math.floor(Math.random()*10)+1;
  line += "Hello" + " " + name + " , " + "as of " + M + "/" + D + "/" + Y + " you are " + age + " years old.";
  RespA.innerHTML = line;
  }
  if(user === targ) {
    hScore++;
  } else if(user !== targ) {
    hScore += 0;
  } else if(comp === targ) {
    cScore++;
  } else if(comp !== targ) {
    cScore += 0;
  } else {
    hScore += 0;
    cScore += 0;
  }
  lineB += "Your score is " + hScore + " and the computer's score is " + cScore + ".";
  RespB.innerHTML = lineB;

activateA.addEventListener('click', getResp);