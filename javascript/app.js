console.log('hello, world')

const root = document.getElementById('root')
const btn = document.querySelector('.submit-btn')
const numbers = document.querySelectorAll('.btn')

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        let ratio = e.target.dataset.id
        root.textContent = ratio
    })
})