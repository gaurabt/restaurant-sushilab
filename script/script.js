// gsap.from('article',{duration: 1, y: '100vh', opacity: 0, ease: 'circ'});
// // gsap.from('.card',{duration:1, y: '100vh', opacity: 0, stagger: 0.5, ease: 'power1.inOut'})
// gsap.from('.image',{duration: 1, x: '-100vw', ease: 'power1.out', opacity: 0})
// gsap.from('.intro',{duration: 1.5, opacity: 0, ease: 'power1.in', delay: 1})


/////selectors///////////////////////////////////////
//////////////////////////////////////////////////

const menuBtn = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const article = document.querySelector('article')



//menu button///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let isOpen = false

menuBtn.addEventListener('click',() =>{

    if(!isOpen){
        article.style.opacity = '0.6'
        nav.classList.add('menuActive')
        menuBtn.classList.add('open')
        document.body.style.overflow = 'hidden'
        isOpen = true
    }
    else{
        article.style.opacity = '1'
        nav.classList.remove('menuActive')
        menuBtn.classList.remove('open')
        document.body.style.overflow = 'visible'
        isOpen = false
    }
})