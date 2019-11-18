$(function(){
  

  
// 部分程式碼來自：[lodash](https://github.com/lodash/lodash)

const typed3 = new Typed('#typed', {
  strings: ['你知道嗎？<br>拖延...<br><br>可以拯救世界喔'],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true,
  fadeOut: true,
});


  $('.judge__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.judge__nav'
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
          dots: false
        }
      }
    ]
  }); 
  
  /*
  nav 縮小
  from: https://benmarshall.me/attaching-javascript-handlers-to-scroll-events/
  */
  document.addEventListener('wheel', () => {
    if (window.scrollY > 50) {
      document.querySelector('.nav').classList.add('nav-scrolled')
    } else {
      document.querySelector('.nav').classList.remove('nav-scrolled')
    }
  }, {capture: false, passive: true })
});
const updatSrc = (picture) => {
  const img = $(picture).find('img');
  const webp = $(picture).find('source');
  console.log($(webp).data('srcset'));
  $(webp).attr('srcset', $(webp).data('srcset'));
  $(webp).removeData('data-srcset');
  $(img).attr('src', $(img).data('src'));// 把值塞回 src
  $(img).removeData('data-src');
}
// 為了 chrome 無法顯示 slick list 裡的大圖 slick 縮圖進入畫面才顯示
const updateSlick = () => {
  const pictures = $('picture.lazyload.img_q');
  $(pictures).each((i, picture) => {
    updatSrc(picture);
  });
};


const lazyload = () => {
  const watcher = new IntersectionObserver(onEnterView)
  const lazyImages = document.querySelectorAll('picture.lazyload:not(.img_q)')
  for (let image of lazyImages) {
      watcher.observe(image) // 開始監視
  }

  function onEnterView(entries, observer) {
    for (let entry of entries) {
        if (entry.isIntersecting) {
          // 監視目標進入畫面
          const picture = entry.target;
          if ($(picture).is('#judge_first')) {
            updateSlick();
          }
          updatSrc(picture);
          observer.unobserve(picture); //取消監視
        }
    }
  }
} 

$(document).ready(() => {
  lazyload();
})


