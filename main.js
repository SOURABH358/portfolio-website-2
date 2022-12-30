const navbar = document.getElementById('navbar')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close');
const navLinks = document.querySelector('.navLinks')

window.addEventListener('scroll', (e)=>{
    navbar.classList.add('scrollNav')
    if (scrollY === 0) {
        navbar.classList.remove('scrollNav')
    }
})

menu.addEventListener('click',()=>{
    navLinks.classList.add('show')
})
close.addEventListener('click',()=>{
    navLinks.classList.remove('show')
})