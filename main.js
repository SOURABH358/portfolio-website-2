const navbar = document.getElementById('navbar')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close');
const navLinks = document.querySelector('.navLinks')
const moreWork = document.getElementById('more__work__btn')
const moreWorkSection = document.getElementById('more__work__section')
const closeWork = document.getElementById('close__work')

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

moreWork.addEventListener('click',()=>{
    moreWorkSection.classList.toggle('show__more__work')
})

closeWork.addEventListener('click',()=>{
    moreWorkSection.classList.remove('show__more__work')
})