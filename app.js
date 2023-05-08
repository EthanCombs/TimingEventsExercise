// 1.
setTimeout(() => {
    const div = document.getElementById(`first`);
    const p = document.createElement(`p`);
    p.innerText = `Hi`;
    div.append(p);
  }, 1000);
// 2.
setTimeout(() => {
    const p = document.createElement(`p`);
    p.innerText = `One`;
    const div = document.getElementById(`timeout-nesting`);
    div.insertAdjacentElement(`afterbegin`, p);
}, 2000);
setTimeout(() => {
    const p = document.createElement(`p`);
    p.innerText = `Two`;
    const div = document.getElementById(`timeout-nesting`);
    div.append(p);
}, 3000);
// 3a.
let notStop = true;
let c = 1;
const count = setInterval(() => {
    if (notStop)
    {
        console.log(c);
        c++;
    }
}, 1000);
// 3b.
function buttonFunc() {notStop = false;}

// BONUS
// 4.
const p = document.createElement(`p`);
const div = document.getElementById(`countdown`);
div.append(p);
let time = 120;
let temp;
const timer = setInterval(() => {
    if (time != 0)
    {
        if (time % 60 < 10) temp = 0;
        else temp = ``;
        p.innerText = Math.floor(time / 60) + `:` + temp + time % 60;
        time--;
    }
    else p.innerText = `TIME IS UP`;
}, 1000);