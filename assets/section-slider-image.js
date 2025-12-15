document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance = null;
  const selector = '.testimonials-swiper';

  const updateSwiper = () => {
    if (window.innerWidth <= 850 && !swiperInstance) {
      swiperInstance = new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.testimonials-swiper-pagination', clickable: true }
      });
    } else if (window.innerWidth > 850 && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  };

  updateSwiper();
  window.addEventListener('resize', updateSwiper);
});