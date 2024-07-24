// color: rgb(245, 245, 220);
const btn = document.querySelector('#btn')
const bg = document.body.style
const h1 = document.querySelector('h1')


function randcolor() {
    let b = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let r = Math.floor(Math.random() * 256)
    const rand = bg.backgroundColor = `rgb(${r},${b},${g})`
    number = r + b + g
    console.log(number)
    if (number <= 110) {
        h1.style.color = 'white'
    } else h1.style.color = 'black'
    h1.innerText = rand
    return rand
}

btn.addEventListener('click', randcolor)
