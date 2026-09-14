
const actionClick = document.getElementById("actionClick")
const answer = document.getElementById("answer");

let values = [];
let response = "";

//function for adding numbers in a sentence
function numbersAdd() {
 let Value1 = window.prompt("Enter your house number");
 let Value2 = window.prompt("Enter your age");
 let Value3 = window.prompt("Enter years of higher education");
 values.push(Value1, Value2, Value3);

 let random = Math.floor(Math.random()*100)+1;
 let addedValues = values.map( x => {return x*random});
 for(let y of values){
    response += y;
 }
  answer.innerHTML = 'Added values at random are: ' + response;

}

actionClick.addEventListener("mousedown", numbersAdd);