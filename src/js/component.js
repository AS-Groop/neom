jQuery(document).ready(function ($){
  $('.comfort__slider-items').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    slideBy:5,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    // autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })
  let owl = $('.comfort__slider-items');
  owl.owlCarousel();
  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  })
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })






  // number counter animation



let interval = 4000;
  let  boolCounter = true;
  // number counter animation
  function counter (){
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
      counter();
      boolCounter = false;
    }
  };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector('.statistic__counter');
  observer.observe(target);
})