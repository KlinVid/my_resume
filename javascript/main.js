const carouselSlide = document.querySelector('.slider__inner');
const carouselImages = document.querySelectorAll('.slider__inner img');
const prevBtn = document.querySelector('#before');
const nextBtn = document.querySelector('#next');


let counter = 1;
let timerId;
let size = carouselImages[0].clientWidth;
carouselSlide.style.transform = `translateX(${-size * counter}px)`;


//Button Listener
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});


//auto-slider
function timer() {
    size = carouselImages[0].clientWidth;
    timerId = setTimeout(timer, 4000);
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}


carouselSlide.addEventListener('mouseover', () => {
    clearTimeout(timerId);
});

prevBtn .addEventListener('mouseover', () => {
    clearTimeout(timerId);
});

nextBtn .addEventListener('mouseover', () => {
    clearTimeout(timerId);
});

carouselSlide.addEventListener('mouseout', () => {
    timerId = setTimeout(timer, 4000);
});

prevBtn .addEventListener('mouseover', () => {
    timerId = setTimeout(timer, 4000);
});

nextBtn .addEventListener('mouseover', () => {
    timerId = setTimeout(timer, 4000);
});



// бургер меню
function navToggle() {
    let arrBurger = ['.nav', '#fa-bars', '#fa-xmark'];
    for (i = 0; i < arrBurger.length; i++) {
        // добавление и удаление класса .active 
        if (document.querySelector(arrBurger[i]).classList.contains('active')) {
            document.querySelector(arrBurger[i]).classList.remove('active');
        } else {
            document.querySelector(arrBurger[i]).classList.add('active');
        }
    }
}

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY; //определение скролла по координате Y

    //добавление .fixed чтобы стиль header стал position 'fixed'
    let headerFixed = document.querySelector('.header');
    if (scrollPos >= 300) {
        headerFixed.classList.add('fixed');
    } else {
        headerFixed.classList.remove('fixed');
    }


    //добавление класса .scrolled для section 'skills'
    let progressBar = document.getElementsByClassName('progress__bar');
    for (i = 0; i < progressBar.length; i++) {
        if (scrollPos >= 400){
            progressBar[i].classList.add('scrolled');
        } else {
            progressBar[i].classList.remove('scrolled');
        }
    }

  });


  