const h1 = document.querySelector('h1')
const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')
colors = ['red', 'aqua', 'green', 'yellow', 'gray', 'lime', 'maroon', 'navy', 'olive', 'purple', 'sandybrown', 'silver', 'magenta', 'indigo', 'teal', 'blue', 'white', 'black', 'wheat', 'tomato', 'salmon', 'powderblue', 'pink', 'bisque', 'gold']
let count = 0;
let i = -300;
let int;

const infinite = () => {
    let setColor = colors[count]
    count++
    i++
    console.log(i)
    h1.style.setProperty('--color', setColor)
    h1.style.setProperty('--num', `${i}px`)
    if (count === colors.length) {
        count = 0
    }
    if (i === 10) {
        i = -300
    }
}
btnStart.addEventListener('click', () => {
    int = setInterval(infinite, 100)
})
btnStop.addEventListener('click', () => {
    clearInterval(int)
})



