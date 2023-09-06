let timer = 6;
let score = 0;
let ht;

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === ht) {
    scoreInc();
    makeBubble();
    randomHit();
  }
});

function newGame() {
  timer = 6;
  score = 0;
  document.querySelector("#time").textContent = timer;
  document.querySelector("#score").textContent = score;
  makeBubble();
  randomHit();
  runTimer();
}

function randomHit() {
  ht = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = ht;
}

function scoreInc() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function runTimer() {
  let timeSet = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timeSet);
      document.querySelector("#pbtm").innerHTML = `
        <div><h1>Game over</h1></div>
        <div><h1>Your score is ${score}</h1></div>
        <div><button id="playBtn" type="button" class="btn btn-primary">Play Again</button></div>
        `;

      document.querySelector("#playBtn").addEventListener("click", function () {
        newGame();
      });
    }
  }, 1000);
}
function makeBubble() {
  let count = "";

  for (let i = 1; i <= 152; i++) {
    let cn = Math.floor(Math.random() * 10);

    count += `<div class="bubble">${cn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = count;
}

runTimer();
makeBubble();
randomHit();
