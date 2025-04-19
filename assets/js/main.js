/* Show Menu */
const navMenu = document.querySelector('.nav_menu'),
      navToggle = document.querySelector('.nav_toggle'),
      navClose = document.querySelector('.nav_close')

/* Menu Show */
/*Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
} 

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}