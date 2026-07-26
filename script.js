
//Weight input
const butt1 = document.getElemenyById('butt1');
const resp1 = document.getElementById('resp1');

function actionA() {
 let WT = number(window.prompt('Enter weight in lbs'))
 let WT1 = Math.round(WT);
 let WTRP = "";
 if(WT > 0) {
  WTRP += WT1 + "lbs" + WT1*0.453592 + "kg" + WT1*4.44822 + "N";
 } else {
  WTRP += "Invalid weight input";
 }
 resp1.innerHTML = WTRP;
}
 
butt1.addEventListener('mousedown', actionA);

//Speed input
const butt2 = document.getElementById('butt2');
const resp2 = document.getElementById('resp2');

function actionB() {
    let V = number(window.prompt('Enter speed in mph'));
    let V1 = Math.round(V);
    let VRP = "";
    if(V > 0) {
        VRP += V1 + "mph" + V1*1.60934 + "km/h" + V1*1.47 + "ft/s";
    } else {
        VRP += "Invalid speed input";
    }
    resp2.innerHTML = VRP;
}

butt2.addEventListener('mousedown', actionB);