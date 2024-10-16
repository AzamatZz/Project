// задача-1

// const regExp = /Регулярные выражения/

// const containsOnlyDigits = (str) => {
//     return /^\d+$/.test(str);
// }

// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false 

// задача-2

// function printMessage() {
//     let count = 1; 
//     const interval = setInterval(() => {
//         if (count === 3) {
//             clearInterval(interval)
//         }
//         console.log(`Прошла секунда: ${count}`);
//         count++;
//     }, 1000); 
// }

// printMessage();

// задача-3

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval); 
//         }
//         i++; 
//     }, 1000); 
// };

// count();

// задача-4

const block = document.createElement('div');
        block.style.width = '150px';
        block.style.height = '150px';
        block.style.cursor = 'pointer';
        block.style.backgroundColor = 'red';

        document.body.appendChild(block);

        block.addEventListener('click', () => {
            block.classList.toggle('active');
         
            if (block.classList.contains('active')) {
                block.style.backgroundColor = 'green'; 
            } else {
                block.style.backgroundColor = 'transparent'; 
            }
        });


// задача-5

// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'key.json')
// xhr.onload = () => {
//     const data  = JSON.parse(xhr.response)
//     console.log(data);
  
// }
// xhr.send()

  