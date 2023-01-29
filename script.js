let hhand = document.querySelector('.hour');
let mhand = document.querySelector('.minute');
let shand = document.querySelector('.second');
let clock = document.querySelector('#clock');

for(let i = 1; i < 13; i++){
    let a = 30*i-90;
    let b = document.createElement('div');
    b.classList.add("number");
    b.style.transform = `rotate(${a}deg) translate(135px) rotate(${-a}deg)`;
    b.innerText = i;
    clock.append(b);
}

function setDate(){
    let d = new Date();
    let h = (d.getHours()/12)*360+90;
    hhand.style.transform = `rotate(${h}deg)`;

    let m = (d.getMinutes()/60)*360+90;
    mhand.style.transform = `rotate(${m}deg)`;

    let s = (d.getSeconds()/60)*360+90;
    shand.style.transform = `rotate(${s}deg)`;
}

setInterval(setDate, 1000);
