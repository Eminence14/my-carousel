const images = document.querySelector('.images')
const numImg = images.childElementCount
const buttons = document.querySelector('.button-dot')
const button = document.querySelector('.button')
const img = document.querySelectorAll('img')

img.forEach((image, index) => {
    image.className = `btn${index + 1}`
    createBtn(index)
})

function createBtn(btnId) {
    const btn = document.createElement('div')
    btn.className = `button btn${btnId+1}`
    buttons.insertBefore(btn, button)
}

const allButtons = document.querySelectorAll('.button')
allButtons.forEach(btn => {
    btn.addEventListener('click', showImg)
})

function showImg(e) {
    img.forEach(image => {
        if (e.target.classList.contains(image.className)) {
            image.style.gridColumn = 1;
        }
        if (!e.target.classList.contains(image.className)) {
            image.style.gridColumn = 2;
            image.style.gridRow = 1;
        }
    })
}
