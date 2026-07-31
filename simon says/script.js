let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let color = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector(".btmtext");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
    }
});

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randcolor = color[random];

    gameseq.push(randcolor)
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflas(randbtn);
}

function btnflas(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 1000);
}
let btns = document.querySelectorAll(".red, .blue, .green, .yellow");
for (let btn of btns) {
    btn.addEventListener("click", btnPress);
}
function btnPress() {
    let btn = this;
    userflas(btn);
    let useColor = btn.classList[0];
    userseq.push(useColor);
    chck(userseq.length - 1);
}
function userflas(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 1000);
}
function chck(index) {
    if (userseq[index] == gameseq[index]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerText = `game over score is ${level}`;
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}