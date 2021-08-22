"use strict";
let heart = "💖";
let pnum;
let rnum;
let scoreL = 0;
let lifenum = 3;
let k;
console.log(lifenum);
// let k = heart.repeat(3);
// document.querySelector(".imp2").src = `pic-${rnum}.png`;

// document.querySelector("#life").textContent = k;

const rockb = document.querySelector(".btn1");
const papperb = document.querySelector(".btn2");
const scissorb = document.querySelector(".btn3");
const playagb = document.querySelector(".btn4");

add();

rockb.addEventListener("click", function () {
  remove();
  rnum = Math.trunc(Math.random() * 3 + 1);
  pnum = 1;
  dis();
  check();
});
papperb.addEventListener("click", function () {
  remove();
  rnum = Math.trunc(Math.random() * 3 + 1);
  pnum = 2;
  dis();
  check();
});
scissorb.addEventListener("click", function () {
  remove();
  rnum = Math.trunc(Math.random() * 3 + 1);
  pnum = 3;
  dis();
  check();
});
playagb.addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  location.reload();
});

function check() {
  if (pnum == rnum) {
    console.log("tie");
  } else if (
    (pnum == 1 && rnum == 3) ||
    (pnum == 2 && rnum == 1) ||
    (pnum == 3 && rnum == 2)
  ) {
    console.log("you win");
    scoreL++;
    document.querySelector(".score").textContent = scoreL;
    k = heart.repeat(lifenum);
  } else {
    lifenum--;
    console.log(lifenum);
    // console.log('lost');
    k = heart.repeat(lifenum);
    document.querySelector("#life").textContent = k;
    if (lifenum == 0) {
      document.querySelector(".score1").textContent = scoreL;
      document.querySelector(".modal").classList.remove("hidden");
    }
  }
}
function add() {
  document.querySelector(".imp1").classList.add("hidden");
  document.querySelector(".imp2").classList.add("hidden");
}
function remove() {
  document.querySelector(".imp1").classList.remove("hidden");
  document.querySelector(".imp2").classList.remove("hidden");
}

function dis() {
  document.querySelector(".imp1").src = `pic-${pnum}.png`;
  document.querySelector(".imp2").src = `pic-${rnum}.png`;
}
