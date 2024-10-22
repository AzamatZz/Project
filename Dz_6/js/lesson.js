// phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneCheckt = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheckt.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color= 'red'
    }
}

//TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs =document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContent.forEach( (item) => {
        item.style.display = 'none'
    })
    tabs.forEach( (item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const target = event.target
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach( (item, i) => {
            if (event.target === item) {
                hideTabContent(i)
                showTabContent(i)

            }
        })
    }
}
let slideIndex = 0
const slideTime = () =>{
    slideIndex++
    if(slideIndex>4){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slideTime , 3000)


const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/any.json')
xhr.onload = () => {
    const data  = JSON.parse(xhr.response)
    console.log(data);
  
}
xhr.send()


//Converter//

const usdInput = document.querySelector('#usd'); 
const somInput = document.querySelector('#som'); 
const eurInput = document.querySelector('#eur'); 

const converter = (element, targetElements) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json'); 
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        
        request.onload = () => {
            const data = JSON.parse(request.response); 
            const usdToSom = data.usd; 
            const somToEur = data.eur; 
            const usdToEur = data.eur / data.usd; 
            
            if (element.id === 'som') {
                const somValue = parseFloat(element.value); 
                targetElements[0].value = (somValue * data.usd).toFixed(2); 
                targetElements[1].value = (somValue * data.eur).toFixed(2); 
            }
            if (element.id === 'usd') {
                const usdValue = parseFloat(element.value);
                targetElements[0].value = (usdValue * data.usd).toFixed(2); 
                targetElements[1].value = (usdValue / usdToEur).toFixed(2); 
            }
            if (element.id === 'eur') {
                const eurValue = parseFloat(element.value);
                targetElements[0].value = (eurValue * data.eur / data.usd).toFixed(2); 
                targetElements[1].value = (eurValue * data.eur).toFixed(2); 
            }
            if (element.value === '') {
                targetElements.forEach(target => target.value = '');
            }
        };
    };
};

converter(usdInput, [somInput, eurInput]);
converter(somInput, [usdInput, eurInput]);
converter(eurInput, [usdInput, somInput]);


// Card Switcher

const card = document.querySelector('.card')
const next = document.querySelector('#btn-next')
const prev = document.querySelector('#btn-prev')

let index = 1; 

const ftd = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then((response) => response.json())
        .then((data) => {
            const { id, title, completed } = data;
            card.innerHTML = `
                <p>${title}</p>
                <p>${completed}</p>
                <span>${id}</span>
            `;
        });
};
ftd(index);

next.onclick = () => {
    index++;
    if (index >= 201) index = 1;
    ftd(index);
};
prev.onclick = () => {
    index--;
    if (index <= 0) index = 200; 
    ftd(index); 
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))