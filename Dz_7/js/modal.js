const modal = document.querySelector('.modal')
const btnTiger = document.getElementById('btn-get')
const closeModalBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = ()=> {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
btnTiger.onclick = ()=> openModal()
closeModalBtn.onclick = ()=>{
    closeModal()
}


modal.onclick = (e) => {
   if(modal === e.target){
    closeModal()
   }   
}

let switcher = true
window.onscroll = () => {
    // console.log(window.scrollY + window.innerHeight);
    // console.log(document.body.scrollHeight);
const scrollPosition = window.scrollY + window.innerHeight
const scrollHeight = document.body.scrollHeight
 if (scrollPosition >= scrollHeight && switcher === true) {
    openModal()
    switcher = false
 }
  
}

setTimeout(() => {
    openModal()
}, 1000000)

const form = document.querySelector('form')
const chat_id = '@lesson7_botik'
const token = '8041094538:AAE6YZknhDh1Y9HijJPOp4bFCzj8Lp7gArs'
const api_url = `https://api.telegram.org/bot${token}/sendMessage`

form.onsubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const user = {}
    formData.forEach((item, index) => {
        user[index] = item
    })
    
    const {name, phone} = user
    const text = `Имя: ${name}\nНомер: ${phone}`

    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: chat_id, text}),
        })

        const result = await response.json()
        if (!response.ok) {
            throw new Error(result.description)
        }
        console.log('Message sent successfully:', result)
    } catch (error) {
        console.error('Error sending message:', error)
    }
}