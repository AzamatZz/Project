//PHONE
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneresult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick - () => {
    if (regExp.test(phoneInput.value)) {
        phoneresult.innerHTML = 'Ok'
        phoneresult.style.color = 'green'

    } else {

        phoneresult.innerHTML = 'Not OK'
        phoneresult.style.color = 'red'
    }
}