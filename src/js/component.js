jQuery(document).ready(function ($){
  $('.owl__slider-items').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    slideBy:5,
    dots: false,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:5
      },
      600:{
        items:5
      },
      1000:{
        items:5
      }
    }
  })
  let owl = $('.owl__slider-items');
  owl.owlCarousel();
  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  })
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })






  // number counter animation




  let  boolCounter = true;
  // number counter animation
  function counter (interval){
    $('.statistic__counter-item .count').each(function (i){
      const elm = $(this);
      let startValue = 0;
      // let endValue = parseInt($(this).attr('data-val'));
      let endValue = parseInt(elm.attr('data-val'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 5;
        if(startValue >= endValue){
          startValue = endValue;
          clearInterval(counter)
        }
        elm.text(startValue+'+');
      }, duration)
    })
  }

  let options = {
    rootMargin: '0px',
    threshold: 1.0
  }
  let callback = function(entries, observer) {
    /* Content excerpted, show below */
    if (entries[0].isIntersecting && boolCounter){
      counter(4000);
      boolCounter = false;
    }
  };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector('.statistic__counter');
  observer.observe(target);
})


//
// import Swiper, {Navigation, Autoplay, } from 'swiper';
//
// const swiper = new Swiper('.swiper', {
//   modules:[Navigation, Autoplay],
//   slidesPerView: 5,
//   centeredSlides: false,
//   slidesPerGroupSkip: 5,
//   grabCursor: true,
//   keyboard: {
//     enabled: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     pauseOnMouseEnter: true,
//
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
//
//
// document.querySelector('.swiper-button-next').addEventListener('click',(e)=>{
//   swiper.autoplay.start()
//   console.log(swiper);
// })



