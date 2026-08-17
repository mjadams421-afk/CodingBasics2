// Variables from html DOM
const activateA = document.getElementById('activateA');
const RespA = document.getElementById('RespA');
const RespB = document.getElementById('RespB');

RespA.innerHTML = "Response here";
RespB.innerHTML = "Score here";

const today = new Date();
const Y = today.getFullYear();
const M = today.getMonth() + 1;
const D = today.getDate();

let line = "";
let lineB = "";
let hScore = 0;
let cScore = 0;

function getResp() {
  const name = window.prompt("What is your name?");
  const age = window.prompt("What is your age?");
  const user = Number(window.prompt("pick a number between 1 and 10"));
  const comp = Math.floor(Math.random() * 10) + 1;
  const targ = Math.ceil(Math.random() * 10);

  line = "Hello " + name + ", as of " + M + "/" + D + "/" + Y + " you are " + age + " years old.";

  if (user === targ) {
    hScore++;
  }
  else {
    hScore+= 0;
  }

  if (comp === targ) {
    cScore++;
  }
  else {
    cScore+= 0;
  }

  lineB = "Your score is " + hScore + " and the computer's score is " + cScore + ".";
  RespA.innerHTML = line;
  RespB.innerHTML = lineB;
}

activateA.addEventListener('click', getResp);