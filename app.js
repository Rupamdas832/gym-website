const changingText = document.querySelector("#changing-text")

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 0,

    //spaceBetween={50}
    //slidesPerView={3}
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const textArray = ["STRONG","HEALTY","GREAT"]
  let index = 0;

  setInterval(() => {
    if(index > textArray.length - 1){
      index = 0;
    }
    index = index +1;
    changingText.innerText = textArray[index -1]
  },2000)

  

  

