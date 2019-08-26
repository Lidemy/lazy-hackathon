$(document).ready(() => {

  $('.judge__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.judge__nav',
  });

  const typed3 = new Typed('#typed', {
    strings: ['你知道嗎？<br>拖延...<br><br>可以拯救世界喔'],
    typeSpeed: 120,
    backSpeed: 50,
    loop: true,
    fadeOut: true,
  });

  $('.judge__nav').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.judge__gallery',
    autoplay: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  // tag 變換滑動效果
  window.addEventListener('hashchange', (event) => {
    event.preventDefault();
    const url = location.hash.substr(1);
    const target = document.querySelector(`.${url}`).offsetTop - 60;
    window.scrollTo({
      top: target,
      left: 0,
      behavior: 'smooth', // => 滑動效果
    });
  });

  /*
  nav 縮小
  from: https://benmarshall.me/attaching-javascript-handlers-to-scroll-events/
  */
  document.addEventListener('wheel', () => {
    if (window.scrollY > 50) {
      document.querySelector('.nav').classList.add('nav-scrolled');
    } else {
      document.querySelector('.nav').classList.remove('nav-scrolled');
    }
  }, { capture: false, passive: true });

});
