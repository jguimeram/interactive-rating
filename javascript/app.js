console.log('hello, world')

const ratioNumber = document.getElementById('ratio-number')
const submit = document.querySelectorAll('.submit-btn')
const numbers = document.querySelectorAll('.btn')
const container = document.querySelector('.container');
const containerReverse = document.querySelector('.container-reverse');
let ratio = null;

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        ratio = e.target.dataset.id
    })
})

submit.forEach(e => {
    e.addEventListener('click', () => {
        e.preventDefault;
        ratioNumber.textContent = ratio
        if (ratio) {
            if (!container.classList.contains('hidden')) {
                container.classList.add('hidden')
                containerReverse.classList.remove('hidden')
            } else {
                container.classList.remove('hidden')
                containerReverse.classList.add('hidden')
                ratio = null;
            }
        } else {
            window.alert('select a number, madafaka')
        }

    })
})

