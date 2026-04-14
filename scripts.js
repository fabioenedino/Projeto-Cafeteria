const menuBtn = document.querySelector('.menu-btn')
const navbar = document.querySelector('.navbar')

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')    
    })
})