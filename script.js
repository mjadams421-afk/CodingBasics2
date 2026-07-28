
//Weight input
const butt1 = document.getElementById('butt1');
const resp1 = document.getElementById('resp1');
let WT1 = 0;
let slugs = 0;
function actionA() {
 let WT = Number(window.prompt('Enter weight in lbs'))
 let WT1 = Math.round(WT);
 let slugs = Math.round(WT1*0.03108);
 let kg = Math.round(WT1*0.453592);
 let N = Math.round(WT1*4.44822);
 let WTRP = "";
 if(WT > 0) {
  WTRP += WT1 + "lbs | " + kg + "kg | " + N + "N | " + slugs + "slugs";
 } else {
  WTRP += "Invalid weight input";
 }
 resp1.innerHTML = WTRP;
}
 
butt1.addEventListener('mousedown', actionA);

//Speed input
const butt2 = document.getElementById('butt2');
const resp2 = document.getElementById('resp2');
const resp3 = document.getElementById('resp3');
const resp4 = document.getElementById('resp4');
let V1 = 0;
let fts = 0;
function actionB() {
    let V = Number(window.prompt('Enter speed in mph'));
    let V1 = Math.round(V);
    let fts = Math.round(V1*1.47);
    let kmh = Math.round(V1*1.60934);
    let VRP = "";
    let KE1 = 0;
    let M1 = 0;
    if(V > 0) {
        VRP += V1 + "mph | " + kmh + "km/h | " + fts + "ft/s";
    } else {
        VRP += "Invalid speed input";
    }
    //Kinetic Energy calculation
    let KE = 0.5 * slugs * (fts * fts);
    let KE1 = Math.floor(KE);
    let Solution = "";
    if(slugs > 0 && fts > 0) {
      solution += KE1 + " ft-lb";
    } else { 
      solution += "Enter all inputs to calculate Kinetic Energy";
    }
    //Momentum calculation
    let M = slugs * fts;
    let M1 = Math.floor(M);
    let Solution2 = "";
    if( slugs > 0 && fts > 0) {
    Solution2 += M1 + " slugs-ft/s";
    } else {
    Solution2 += "Enter all inputs to calculate Momentum";
    }
    resp4.innerHTML = Solution2;
    resp3.innerHTML = solution;
    resp2.innerHTML = VRP;
   }

butt2.addEventListener('mousedown', actionB);

