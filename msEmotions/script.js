const btn = document.querySelectorAll('.btn')
const main = document.querySelector('.main')
const div = document.querySelectorAll('.select')
const xIcon = document.querySelector('span')


// Her Drawings
btn[0].addEventListener('click', () => {
    main.classList.add('show')
    div[0].classList.add('container')
})
// fav books
btn[1].addEventListener('click', () => {
    main.classList.add('show')
    div[1].classList.add('container')
})
// Her poems
btn[2].addEventListener('click', () => {
    main.classList.add('show')
    div[2].classList.add('container')
})
// About
btn[3].addEventListener('click', () => {
    main.classList.add('show')
    div[3].classList.add('container')
})
// the X Icon !
xIcon.addEventListener('click', () => {
    div.forEach(e => {
        e.classList.remove('container')
        main.classList.remove('show')
    })
})




