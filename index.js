const header1 = document.getElementById('header1');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('menumb');
const mobileNavCloseIcon = document.getElementById('closeIcon');
const mobileNavOpacityBG = document.getElementById('dimbg');
let images = document.querySelectorAll('.img');
let imagesmbs=document.querySelectorAll('.imgmb');
let paragraphs =document.querySelectorAll('.paragraph');
let number = 0;
let headers = [
    document.getElementById('header1'),document.getElementById('header2'),document.getElementById('header3')]


setInterval(() => {
    number = (number + 1) % headers.length;
    nextSlide(number);
}, 4000)

const nextSlide =  (index) => {

    paragraphs.forEach((elem,indx) => {
        if(indx === index){
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })

    headers.forEach((elem,indx) => {
        if(indx === index){
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })

    images.forEach((elem, indx) => {
        if(indx === index){
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
    imagesmbs.forEach((elem, indx) => {
        if(indx === index){
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
    
}

mobileNavCloseIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNavOpacityBG.classList.toggle('hidden')
})

burger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNavOpacityBG.classList.toggle('hidden')
})

nextBtn.addEventListener('click', () => {
    number = (number + 1) % headers.length;
    nextSlide(number);
    
})

prevBtn.addEventListener('click', () => {
    number = (number - 1 + headers.length) % headers.length;
    nextSlide(number);
    
})