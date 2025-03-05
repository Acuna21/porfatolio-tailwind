
const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');
const navList = document.querySelectorAll('#nav-menu li');

const mainTitle = document.querySelector('#main-title');

menuBtn.addEventListener("click",()=>{
    navMenu.classList.remove('hidden', 'animate-slide-out');
    navMenu.classList.add('flex', 'animate-slide-in');
});

mainTitle.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior:"smooth"})
});

navList.forEach((liElement)=>{
    liElement.addEventListener('click',()=>{
        if(window.innerWidth > 640) return
        navMenu.classList.remove('animate-slide-in');
        navMenu.classList.add('animate-slide-out');
    })
})

navMenu.addEventListener('animationend',(event)=>{
    if( event.animationName !== 'slide-out') return
    navMenu.classList.add('hidden');
    navMenu.classList.remove('flex');
})

window.addEventListener('resize', ()=>{
    // console.log("Cambio de pantalla..")
    if(window.innerWidth > 640){
        navMenu.classList.remove('animate-slide-out', 'animate-slide-in')
    }
})




