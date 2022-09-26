const images = document.querySelector('.images')
const numImg = images.childElementCount
const buttons = document.querySelector('.button-dot')
const button = document.querySelector('.button')

function createBtn() {
    const btn = document.createElement('div')
    btn.className = 'button'
    buttons.insertBefore(btn, button)
}

for (let i = 0; i < numImg; i++) {
    createBtn()
}

const allButtons = document.querySelectorAll('.button')
allButtons.forEach(btn => {
    btn.addEventListener('click', showImg)
})

function showImg(e) {
    console.log(e.target)
}