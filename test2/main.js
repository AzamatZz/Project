// задача 1 
const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6dv3r43b")); 
console.log(extractNumbers("12 apples and 34 oranges")); 

// задача 2 
const fibo = (a = 0, b = 1) => {
    if (a > 144) return; 
    console.log(a);
    setTimeout(() => fibo(b, a + b), 1000); 
}

fibo();

//задача 3

async function title() {

    const response = await fetch('https://fakestoreapi.com/products');
try {
    
    if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
        
    data.forEach(product => {
            console.log(product.title);
    });
} catch (error) {
        console.error('Ошибка', error);
    }
}
title();

//задача 4
const buttons = document.querySelector('div');

buttons.addEventListener('click', function(event) {
    
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.innerText;
        document.body.style.backgroundColor = color;
    }
});

//задача 5

const block = document.querySelector('.Myblock');
const button = document.getElementById('Button');

button.addEventListener('click', () => {
    if (block.style.display === 'none') {
        block.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        block.style.display = 'none';
        button.textContent = 'Показать';
    }
});

//задача 6

let count = 0; 

    const counter = document.getElementById('counter');

    const interval = setInterval(() => {
        if (count < 100) {
            count++; 
            counter.textContent = count;
        } else {
            clearInterval(interval); 
        }
    }, 1); 

//задача 7

document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('/test.json');
        
        if (!response.ok) {
            throw new Error('Error: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}