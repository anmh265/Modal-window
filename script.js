const modalContainer = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')
const windowEls = document.querySelectorAll('.window')
overlayEl = document.querySelector('.overlay')

const openModal = function(){
    modalContainer.classList.remove('hidden')
    overlayEl.classList.remove('hidden')
}

const closeModal = function(){
    modalContainer.classList.add('hidden')
    overlayEl.classList.add('hidden')
}

windowEls.forEach(windowEl => {
    windowEl.addEventListener("click", openModal)
})

closeBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modalContainer.classList.contains('hidden')){
        closeModal()
    }
})