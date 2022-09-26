const images = document.querySelector('.images')
const numImg = images.childElementCount
const buttons = document.querySelector('.button-dot')
const button = document.querySelector('.button')

let token = 0

function createBtn() {
    const btn = document.createElement('div')
    btn.className = 'button'
    buttons.insertBefore(btn, button)
}

for (let i = 0; i < numImg; i++) {
    createBtn()
}

const allButtons = document.querySelectorAll('.button')
