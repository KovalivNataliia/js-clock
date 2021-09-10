let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');
let timeContainer = document.querySelector('.time');
let dateContainer = document.querySelector('.date');

let hourCircle = document.querySelector('.hour-donut-segment');
let minuteCircle = document.querySelector('.minute-donut-segment');
let secondCircle = document.querySelector('.second-donut-segment');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let backgroundList = document.querySelectorAll('.background');

let activeBackground = 0;

function setBackground() {
    backgroundList.forEach(el => el.classList.remove('active'));
    backgroundList[activeBackground].classList.add('active');
}

leftBtn.addEventListener('click', () => {
    activeBackground--

    if(activeBackground < 0) {
        activeBackground = backgroundList.length - 1;
    }

    setBackground()
});

rightBtn.addEventListener('click', () => {
    activeBackground++

    if(activeBackground > backgroundList.length - 1) {
        activeBackground = 0;
    }

    setBackground()
});

function setTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let clockHours = hours > 12 ? hours % 12 : hours;
    let date = time.getDate();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();

    let hoursDegrees = ((clockHours / 12) * 360) + ((minutes/60)*30);
    let minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
    let secondsDegrees = ((seconds / 60) * 360);
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

    timeContainer.innerHTML = `${hours < 10 ? `0${hours}` : hours} : 
    ${minutes < 10 ? `0${minutes}` : minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`;

    dateContainer.innerHTML = `${days[day]}, ${months[month]} ${date}, ${year}`;

    hourCircle.setAttribute('stroke-dasharray', `${hours / 24 * 100} ${100 - (hours / 24 * 100)}`);
    minuteCircle.setAttribute('stroke-dasharray', `${minutes / 60 * 100} ${100 - (minutes / 60 * 100)}`);
    secondCircle.setAttribute('stroke-dasharray', `${seconds / 60 * 100} ${100 - (seconds / 60 * 100)}`);
}

setTime();

setInterval(setTime, 1000);

console.log('Total score: 30/30');
console.log('Main task: implement mechanical clock 10/10');
console.log('Required functionality: implement digital clock 10/10');
console.log('Additional functionality: add circle diagrams, add background slider 10/10');
