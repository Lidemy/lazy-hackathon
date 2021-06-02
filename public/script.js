(() => {
  // src/index.js
  $(function() {
    const typed3 = new Typed("#typed", {
      strings: ["\u4F60\u77E5\u9053\u55CE\uFF1F<br>\u62D6\u5EF6...<br><br>\u53EF\u4EE5\u62EF\u6551\u4E16\u754C\u5594"],
      typeSpeed: 120,
      backSpeed: 50,
      loop: true,
      fadeOut: true
    });
    $(".judge__gallery").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".judge__nav"
    });
    $(".judge__nav").slick({
      centerMode: true,
      centerPadding: "20px",
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".judge__gallery",
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
            dots: false
          }
        }
      ]
    });
    window.addEventListener("hashchange", function(event) {
      event.preventDefault();
      const url = location.hash.substr(1);
      const target = document.querySelector(`.${url}`).offsetTop - 60;
      window.scrollTo({
        top: target,
        left: 0,
        behavior: "smooth"
      });
    });
    document.addEventListener("wheel", () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("nav-scrolled");
      } else {
        document.querySelector(".nav").classList.remove("nav-scrolled");
      }
    }, { capture: false, passive: true });
  });
})();
