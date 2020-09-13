//burger menu

function menuBurger() {
  const burger = document.querySelector(".header__burger");
  const list = document.querySelector(".header__list");
  const items = document.querySelectorAll(".header__list-item");
  const body = document.body;
  burger.addEventListener("click", () => {
    burger.classList.toggle("header__burger--active");
    list.classList.toggle("header__list--active");
    body.classList.toggle("scroll-hidden");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("header__burger--active");
      list.classList.toggle("header__list--active");
      body.classList.toggle("scroll-hidden");
    });
  });
}

menuBurger();

function fairyTailSlider() {
  let sliderImages = document.querySelectorAll(".fairy-tail__slider-image");
  let count = 0;

  function slider() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].classList.add("fairy-tail__slider-image--hidden");
    }
    sliderImages[count].classList.remove("fairy-tail__slider-image--hidden");
  }

  document.querySelector(".fairy-tail__button-prev").onclick = function () {
    if (count - 1 == -1) {
      count = sliderImages.length - 1;
    } else {
      count--;
    }
    slider();
  };

  document.querySelector(".fairy-tail__button-next").onclick = function () {
    if (count + 1 == sliderImages.length) {
      count = 0;
    } else {
      count++;
    }
    slider();
  };
}

fairyTailSlider();

function ourTripSlider() {
  let sliderImages = document.querySelectorAll(".our-trip__slider-img");
  let count = 0;

  function slider() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].classList.add("our-trip__slider-img--hidden");
    }
    sliderImages[count].classList.remove("our-trip__slider-img--hidden");
  }

  document.querySelector(".our-trip__button-prev").onclick = function () {
    if (count - 1 == -1) {
      count = sliderImages.length - 1;
    } else {
      count--;
    }
    slider();
  };

  document.querySelector(".our-trip__button-next").onclick = function () {
    if (count + 1 == sliderImages.length) {
      count = 0;
    } else {
      count++;
    }
    slider();
  };
}

ourTripSlider();
