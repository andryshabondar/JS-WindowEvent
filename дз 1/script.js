window.addEventListener('scroll', () => {
    console.log(window.scrollY);
})


const downWidht = document.querySelector('.scrollDown');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 60 && window.scrollY <= 200) {
        downWidht.style.fontSize = `${window.scrollY / 3}px`
    }
})

downWidht.addEventListener('click', () =>{
    document.querySelector('.main').scrollIntoView({behavior: 'smooth'});
})

const fromLeft = document.querySelector('.mainSlide')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 290 && window.scrollY <= 350) {
        fromLeft.style.left = `${window.scrollY / 3}px`
    }
})

const redLine = document.querySelector('.redLine')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 290 && window.scrollY <= 400) {
        redLine.style.width = `${window.scrollY}px`
    }
})

const image = document.querySelector('.image');
function imageGoLeft() {
    if (window.scrollY <= 550) {
        image.style.right = `70px`
    }
    else if (window.scrollY >= 550 && window.scrollY <= 850) {
        image.style.right = `${window.scrollY / 7.8}px`
    }
    else {
        window.removeEventListener('scroll', imageGoLeft);
    }
}
window.addEventListener('scroll', imageGoLeft);


const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 900 && window.scrollY <= 1500) {
        scrollUp.style.fontSize = `${window.scrollY / 18}px`
    }
})

scrollUp.addEventListener('click', () =>{
    document.querySelector('.heder').scrollIntoView({behavior: 'smooth'})
})