const container = document.querySelectorAll('.container')
const form = document.querySelectorAll('form')
const span = document.querySelector('#theName')
const backBtn = document.querySelector('#back-btn')
const finalBtn = document.querySelector('.finalBtn')
const startBtn = document.querySelector('#start-btn')
const header = document.querySelector('header')
let firstname;
let lastname;
let i = 0;

startBtn.addEventListener('click', () => {
    header.style.visibility = 'hidden'
    container[0].style.transform = 'translateX(0)'

})

form[0].addEventListener('submit', e => {
    i++
    e.preventDefault()
    container[0].style.opacity = '0'
    container[0].style.visibility = 'hidden'
    container[1].style.transform = 'translateX(0)'
    container[1].style.visibility = 'visible'
    firstname = document.querySelector('#firstName').value
    lastname = document.querySelector('#lastName').value
    backBtn.style.visibility = 'visible'
})



form[1].addEventListener('submit', e => {
    i++
    e.preventDefault()
    container[1].style.opacity = '0'
    container[1].style.visibility = 'hidden'
    container[2].style.transform = 'translateX(0)'
    container[2].style.visibility = 'visible'
})

form[2].addEventListener('submit', e => {
    i++
    e.preventDefault()
    container[2].style.opacity = '0'
    container[2].style.visibility = 'hidden'
    container[3].style.transform = 'translateX(0)'
    container[3].style.visibility = 'visible'
})
form[3].addEventListener('submit', e => {
    i++
    e.preventDefault()
    container[3].style.opacity = '0'
    container[3].style.visibility = 'hidden'
    container[4].style.transform = 'translateX(0)'
    container[4].style.visibility = 'visible'
})
form[4].addEventListener('submit', e => {
    i++
    e.preventDefault()
    container[4].style.opacity = '0'
    container[4].style.visibility = 'hidden'
    container[5].style.transform = 'translateX(0)'
    container[5].style.visibility = 'visible'
    span.innerText = `${firstname} ${lastname}`
    backBtn.style.visibility = 'hidden'
})
form[5].addEventListener('submit', e => {
    e.preventDefault()
    container[5].style.opacity = '0'
    container[5].style.visibility = 'hidden'
    container[6].style.transform = 'translateX(0)'
    container[6].style.visibility = 'visible'
})



backBtn.addEventListener('click', () => {
    if (i === 1) {
        container[1].style.visibility = 'hidden'
        container[1].style.transform = 'translateX(-100%)'
        container[0].style.visibility = 'visible'
        container[0].style.opacity = '1'
        backBtn.style.visibility = 'hidden'
        i--
    }
    if (i === 2) {
        container[2].style.visibility = 'hidden'
        container[2].style.transform = 'translateX(-100%)'
        container[1].style.visibility = 'visible'
        container[1].style.opacity = '1'
        i--
    }
    if (i === 3) {
        container[3].style.visibility = 'hidden'
        container[3].style.transform = 'translateX(-100%)'
        container[2].style.visibility = 'visible'
        container[2].style.opacity = '1'
        i--
    }
    if (i === 4) {
        container[4].style.visibility = 'hidden'
        container[4].style.transform = 'translateX(-100%)'
        container[3].style.visibility = 'visible'
        container[3].style.opacity = '1'
        i--
    }
})

