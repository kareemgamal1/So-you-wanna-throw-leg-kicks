let landed = 0;
let checked = 0;
const choices = ["Head", "Body", "Leg"];
const head = document.getElementById("head");
const body = document.getElementById("body");
const leg = document.getElementById("leg");
const roundResult = document.getElementById("roundResult");
const result = document.getElementById("result");
const shot = document.getElementById("shot");
const landedShots = document.getElementById("lScore");
const checkedShots = document.getElementById("cScore");
const overlay = document.getElementById("overlay");
const playAgain = document.getElementById("playAgain");
const checkBox = document.getElementById("footage");

function computerPlay() {
  let choiceNum = Math.floor(Math.random() * 6);
  return choiceNum + 1;
}
function chooseHead() {
  let pc = computerPlay();
  if (pc == 1 || pc == 2 || pc == 3) {
    shot.src =
      "https://media3.giphy.com/media/5hvSvGqmz4mufRmeiv/giphy.gif?cid=790b761145B1MGm25VF912JVzvmgvdecyZ5SESW10440e29e&rid=giphy.gif&ct=g";
    landed++;
    roundResult.textContent = "HUGE HEADKICK LANDED";
  } else {
    shot.src =
      "https://66.media.tumblr.com/807d5b0e0b13b542695370b9d9e7b0be/tumblr_oc8rrhIzgq1rofocqo1_500.gif";
    checked++;
    roundResult.textContent =
      "the best way to avoid a kick is by running away from it";
  }
  landedShots.textContent = landed;
  checkedShots.textContent = checked;
}
function chooseBody() {
  let pc = computerPlay();
  if (pc == 2 || pc == 3 || pc == 4) {
    shot.src = "https://c.tenor.com/TLB_ghx17KEAAAAC/kick.gif";
    landed++;
    roundResult.textContent = "that liver is not feeling good";
  } else {
    shot.src =
      "https://66.media.tumblr.com/807d5b0e0b13b542695370b9d9e7b0be/tumblr_oc8rrhIzgq1rofocqo1_500.gif";
    checked++;
    roundResult.textContent =
      "the best way to avoid a kick is by running away from it";
  }
  landedShots.textContent = landed;
  checkedShots.textContent = checked;
}
function chooseLeg() {
  let pc = computerPlay();
  if (pc == 4 || pc == 5 || pc == 6) {
    shot.src =
      "http://blogs.rdxsports.com/wp-content/uploads/2016/07/ufc-on-fox-20-highlights-watch-how-edson-barboza-brutalized-gilbert-melendez-with-legkick-1070158.gif";
    landed++;
    roundResult.textContent = "how many leg kicks can one man take!";
  } else {
    shot.src =
      "https://66.media.tumblr.com/807d5b0e0b13b542695370b9d9e7b0be/tumblr_oc8rrhIzgq1rofocqo1_500.gif";
    checked++;
    roundResult.textContent =
      "the best way to avoid a kick is by running away from it";
  }
  landedShots.textContent = landed;
  checkedShots.textContent = checked;
}
checkBox.onchange = () => {
  if (checkBox.checked == false) {
    shot.style.display = "none";
  } else {
    shot.style.display = "block";
  }
};
function checkResult() {
  if (landed == 5) {
    result.textContent = "You have won the fight!";
    return true;
  } else if (checked == 5) {
    result.textContent = "You have lost the fight!";
    return true;
  }
  return false;
}
function endGame() {
  overlay.style.display = "block";
  playAgain.onclick = function () {
    initialize();
    overlay.style.display = "none";
  };
}
function initialize() {
  result.textContent = "";
  landedShots.textContent = "?";
  checkedShots.textContent = "?";
  landedShots.textContent = "?";
  roundResult.textContent = "";
  shot.src = "";
  landed = 0;
  checked = 0;
}
head.addEventListener("click", () => {
  chooseHead();
  if (checkResult()) endGame();
  playAgain();
});
body.addEventListener("click", () => {
  chooseBody();
  if (checkResult()) endGame();
  playAgain();
});
leg.addEventListener("click", () => {
  chooseLeg();
  if (checkResult()) endGame();
  playAgain();
});
