/*============= NAVBAR REVEAL ===============*/ 
const navBtn = document.getElementById("menu-btn");
const navbarReveal = () => {
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.toggle('show');
}
navBtn.addEventListener("click", navbarReveal)


// <!--==================== SCROLL REVEAL ====================-->

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2500,
    delay: 300,
    // reset: true
  })

sr.reveal('.home__data, .skills__data')
sr.reveal('.home__img, .skills__img', {delay: 600, origin: 'bottom'})


  /*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 300})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__social', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img, .contact__text', {interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__input')
sr.reveal('.contact__button')