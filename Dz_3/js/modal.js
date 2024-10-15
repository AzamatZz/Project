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
}, 10000)