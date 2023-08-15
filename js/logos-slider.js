$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600, // Set to the desired autoplay speed
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
