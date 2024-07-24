const p = document.querySelectorAll('p')
const forms = document.querySelectorAll('form')

forms.forEach(e => {
    e.addEventListener('submit', () => e.preventDefault())
});

const checkQ1 = () => {
    if (document.querySelectorAll('input')[0].value.toLowerCase() === 'adam') {
        p[0].innerText = 'Correct!'
        p[0].style.color = 'green'
    }
    else {
        p[0].innerText = 'Wrong!'
        p[0].style.color = 'red'
    }
}
const checkQ2 = () => {
    if (document.querySelectorAll('input')[1].value === '3.14') {
        p[1].innerText = 'Correct!'
        p[1].style.color = 'green'
    }
    else {
        p[1].innerText = 'Wrong!'
        p[1].style.color = 'red'
    }
}
const checkQ3 = () => {
    if (document.querySelectorAll('input')[2].value.toLowerCase() === 'all') {
        p[2].innerText = 'Correct!'
        p[2].style.color = 'green'
    }
    else {
        p[2].innerText = 'Wrong!'
        p[2].style.color = 'red'
    }
}
const checkQ4 = () => {
    if (document.querySelectorAll('input')[3].value.toLowerCase() === 'idk') {
        p[3].innerText = 'Correct!'
        p[3].style.color = 'green'
    }
    else {
        p[3].innerText = 'Wrong!'
        p[3].style.color = 'red'
    }
}


