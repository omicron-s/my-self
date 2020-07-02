//study-slider
$(document).ready(function () {
  $('.study__slider').owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
  });
  $('#individual .slider-btn__left').click(function () {
    $('#individual .owl-carousel').trigger('prev.owl.carousel');
  });
  $('#individual .slider-btn__right').click(function () {
    $('#individual .owl-carousel').trigger('next.owl.carousel');
  });
  $('#kid .slider-btn__left').click(function () {
    $('#kid .owl-carousel').trigger('prev.owl.carousel');
  });
  $('#kid .slider-btn__right').click(function () {
    $('#kid .owl-carousel').trigger('next.owl.carousel');
  });
  $('#aboutSlider>.slider-btn__left').click(function () {
    $('#aboutSlider>.owl-carousel').trigger('prev.owl.carousel');
  });
  $('#aboutSlider>.slider-btn__right').click(function () {
    $('#aboutSlider>.owl-carousel').trigger('next.owl.carousel');
  });
});

//staff-slider
$(document).ready(function () {
  $('.staff__slider').owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    margin: 30,
    // responsive: {
    //   450: {
    //     items: 2
    //   },
    //   768: {
    //     items: 3
    //   },
    //   1200: {
    //     items: 4
    //   }
    // }
  });
  $('#staff .slider-btn-round[data="prev"]').click(function () {
    $('#staff .owl-carousel').trigger('prev.owl.carousel');
  });
  $('#staff .slider-btn-round[data="next"]').click(function () {
    $('#staff .owl-carousel').trigger('next.owl.carousel');
  });
});

//Certificates-slider
$(document).ready(function () {
  $('.about__slider').owlCarousel({
    loop: true,
    items: 4,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    margin: 30,
    // responsive: {
    //   450: {
    //     items: 2
    //   },
    //   768: {
    //     items: 3
    //   },
    //   1200: {
    //     items: 4
    //   }
    // }
  });
  $('#certSlider .slider-btn-round[data="prev"]').click(function () {
    $('#certSlider>.owl-carousel').trigger('prev.owl.carousel');
  });
  $('#certSlider .slider-btn-round[data="next"]').click(function () {
    $('#certSlider>.owl-carousel').trigger('next.owl.carousel');
  });
});

//Comments-slider
$(document).ready(function () {
  $('.comments__slider').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
  });
  $('#comments .slider-btn-round[data="prev"]').click(function () {
    $('#comments .owl-carousel').trigger('prev.owl.carousel');
  });
  $('#comments .slider-btn-round[data="next"]').click(function () {
    $('#comments .owl-carousel').trigger('next.owl.carousel');
  });
});

//Staff-radio-btn
$(document).ready(function () {
  $('#staff .staff__btn').on('click', function () {
    $('#staff .staff__btn').removeClass('active');
    $(this).addClass('active');
  });
});

//ScrollUp
$(document).ready(function () {
  var btn = $('#footer .footer__scrollUp');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
  });
});
