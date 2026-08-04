
//Weight input
const butt1 = document.getElementById('butt1');
const resp1 = document.getElementById('resp1');
let WT1 = 0;
let slugs = 0;

function actionA() {
  const WT = Number(window.prompt('Enter weight in lbs'));
  WT1 = Math.round(WT);
  slugs = Math.round(WT1 * 0.03108);
  const kg = Math.round(WT1 * 0.453592);
  const N = Math.round(WT1 * 4.44822);
  let WTRP = "";

  if (WT > 0) {
    WTRP += WT1 + "lbs | " + kg + "kg | " + N + "N | " + slugs + "slugs";
  } else {
    WTRP += "Invalid weight input";
  }

  resp1.innerHTML = WTRP;
}

butt1.addEventListener('click', actionA);

//Speed input
const butt2 = document.getElementById('butt2');
const resp2 = document.getElementById('resp2');
const resp3 = document.getElementById('resp3');
const resp4 = document.getElementById('resp4');
let V1 = 0;
let fts = 0;

function actionB() {
  const V = Number(window.prompt('Enter speed in mph'));
  V1 = Math.round(V);
  fts = Math.round(V1 * 1.47);
  const kmh = Math.round(V1 * 1.60934);
  let VRP = "";

  if (V > 0) {
    VRP += V1 + "mph | " + kmh + "km/h | " + fts + "ft/s";
  } else {
    VRP += "Invalid speed input";
  }

  //Kinetic Energy calculation
  const KE = 0.5 * slugs * (fts * fts);
  const KE1 = Math.floor(KE);
  let Solution = "";

  if (slugs > 0 && fts > 0) {
    Solution += KE1 + " ft-lb";
  } else {
    Solution += "Enter all inputs to calculate Kinetic Energy";
  }

  //Momentum calculation
  const M = slugs * fts;
  const M1 = Math.floor(M);
  let Solution2 = "";

  if (slugs > 0 && fts > 0) {
    Solution2 += M1 + " slugs-ft/s";
  } else {
    Solution2 += "Enter all inputs to calculate Momentum";
  }

  resp4.innerHTML = Solution2;
  resp3.innerHTML = Solution;
  resp2.innerHTML = VRP;
}

butt2.addEventListener('click', actionB);

