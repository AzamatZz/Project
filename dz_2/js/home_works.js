const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')



const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Ok'
        gmailResult.style.color = 'green'
        gmailInput.style.borderColor = 'green';

    } else {

        gmailResult.innerHTML = 'Not OK'
        gmailResult.style.color = 'red'
        gmailInput.style.borderColor = 'red';
    }
}

let parent = document.querySelector('.parent_block');
let child = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
const parentWidth = parent.offsetWidth;
const parentHeight = parent.offsetHeight;
const childWidth = child.offsetWidth;
const childHeight = child.offsetHeight;

const maxX = parentWidth - childWidth;
const maxY = parentHeight - childHeight;
let direction = 'right';

const moveBlock = () => {
    if (direction === 'right') {
        if (positionX < maxX) {
            positionX++;
            child.style.left = `${positionX}px`;
            child.style.backgroundColor = 'green'
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < maxY) {
            positionY++;
            child.style.top = `${positionY}px`;
            child.style.backgroundColor = 'yellow'
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
            child.style.left = `${positionX}px`;
            child.style.backgroundColor = 'blue'
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
            child.style.top = `${positionY}px`;
            child.style.backgroundColor = 'red'
        } else {
            direction = 'right';
        }
    }
    
    requestAnimationFrame(moveBlock);
};
moveBlock();
// Счетчик 

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const secondsDisplay = document.querySelector('#seconds');

let seconds = 0;
let timerInterval;
 
startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 500);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    secondsDisplay.textContent = seconds;
});