jQuery(document).ready(function ($) {
  jQuery(".quote-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>',
  });
});
