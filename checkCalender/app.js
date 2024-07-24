const p = document.querySelectorAll('p')

p.forEach(e => {
    e.addEventListener('click', () => e.classList.add('checked')
    )
});