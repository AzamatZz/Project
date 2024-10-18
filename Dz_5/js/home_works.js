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

//Карточки//

const cards = document.querySelector('.characters-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/persons.json');
xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    
    const title = document.createElement('h2');
    title.textContent = 'Chelsea Legends';
    title.style.textAlign = 'center'; 
    title.style.marginBottom = '20px'; 

    cards.insertAdjacentElement('beforebegin', title);
    data.forEach((item) => {
       
        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = item.photo;
        img.alt = item.name;

        const description = document.createElement('div');
        description.classList.add('description');

        const name = document.createElement('span');
        name.textContent = `Name: ${item.name}`;
        const number = document.createElement('span');
        number.textContent = `Number: ${item.number}`;
        const games = document.createElement('span');
        games.textContent = `Games: ${item.games}`;

        description.appendChild(name);
        description.appendChild(document.createElement('br'));
        description.appendChild(number);
        description.appendChild(document.createElement('br'));
        description.appendChild(games);

        imageContainer.appendChild(img);
        imageContainer.appendChild(description);
        card.appendChild(imageContainer);
        cards.appendChild(card);
    });
};
xhr.send();

