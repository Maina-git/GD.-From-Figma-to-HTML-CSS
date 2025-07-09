const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menutoggle');
const mobileNav = document.querySelector('.mobile');
const close = document.getElementById('close');


window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }  
})
menuToggle.addEventListener('click', () => {
    mobileNav.style.display="block"
}
)

close.addEventListener('click', () => {
    mobileNav.style.display="none"

});




