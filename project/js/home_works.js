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

let parent = document.getElementsByClassName('parent_block')[0];
let child = document.getElementsByClassName('child_block')[0];

let position = 0; 
let step = 5; 
let interval = 20; 

function moveChild() {
    
    if (position < (parent.clientWidth - child.clientWidth)) {
        position += step; 
        child.style.left = `${position}px`; 
        setTimeout(moveChild, interval); 
    
    }
}
moveChild();

