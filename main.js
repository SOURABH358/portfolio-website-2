const navbar = document.getElementById('navbar')

window.addEventListener('scroll', (e)=>{
    navbar.classList.add('scrollNav')
    if (scrollY === 0) {
        navbar.classList.remove('scrollNav')
    }
})
