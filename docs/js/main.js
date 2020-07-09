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
  $('#staff .staff__slider').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      630: {
        items: 1,
        margin: 10,
      },
      768: {
        items: 1,
        margin: 30,
      },
      1024: {
        items: 2,
        margin: 30,
      },
      1440: {
        items: 3,
        margin: 30,
      },
    },
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
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      550: {
        items: 2,
        margin: 10,
      },
      768: {
        items: 2,
        margin: 30,
      },
      1024: {
        items: 3,
        margin: 30,
      },
      1440: {
        items: 4,
        margin: 30,
      },
    },
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
    var scroll = $(window).scrollTop() + $(window).height();
    var footerOffset = $('#footer').offset().top + $('#footer').height();

    if ($(window).width() >= 1440) {
      footerOffset = footerOffset - 70;
    }

    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
    if (scroll > $('#footer').offset().top - $('#footer').height()) {
      btn.addClass('transition');
    } else {
      btn.removeClass('transition');
    }

    if (scroll > footerOffset) {
      btn.addClass('absolute');
    } else {
      btn.removeClass('absolute');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
  });
});

//Mobile-menu
$(document).ready(function () {
  $('#header .header__menu').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#header .header__tabs').addClass('active');
    } else {
      $('#header .header__tabs').removeClass('active');
    }
  });
});

//path-menu
$(function () {
  $('#price a.price__link').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#path').addClass('active');
    } else {
      $('#path').removeClass('active');
    }
  });
});

// autoclose when resizing
var width = $(window).width();
$(window).on('resize', function () {
  if ($(this).width() !== width) {
    width = $(this).width();
    $('#header .header__menu').removeClass('active');
    $('#header .header__tabs').removeClass('active');
  }
});

//comments-click
// $(function () {
//   $('#comments a').click();
//   $('#specialist-tabs li[data-tab="b"]').click();
// });
