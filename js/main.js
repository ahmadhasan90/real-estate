/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header =document.querySelector('.header')
    if(this.scrollY>= 50) {
      header.classList.add('scroll-header')
    }
    else{
      header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll',scrollHeader)


/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView :'auto',
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/


                            

 const accordionItems = document.querySelectorAll('.value__accordion-item')                 
 const accordionHeader = document.querySelector('.value__accordion-header')                    



  accordionItems.forEach(function(item){
  item.addEventListener('click',()=>{

    if(item.classList.contains('accordion-open')){
      item.classList.remove('accordion-open')
    }
    else{
      accordionItems.forEach(item=>{item.classList.remove('accordion-open')})

      item.classList.add('accordion-open')

    }
    
  
  })

}) 




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.scrollY

  sections.forEach(current=>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }
      else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }         
  })
}
window.addEventListener('scroll', ()=>{
  scrollActive()
  scrollUp()
})

/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
  const scrollUp= document.querySelector('#scrollup')

  if(scrollY>=350){
    scrollUp.classList.add('show-scroll')
  }
  else{
    scrollUp.classList.remove('show-scroll')
  }
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


themeButton.addEventListener('click',()=>{

  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
})

 
  /* obtain the current theme by validating dark theme class 

  const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


 // save theme and icon that user chose 

  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())

  // previously selected topics 
  
    const selectedTheme =localStorage.getItem('selected-theme')
    const selectedIcon =localStorage.getItem('selected-icon')


//validate if user previously chose a topic 

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

*/







