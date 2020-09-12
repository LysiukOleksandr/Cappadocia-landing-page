//burger menu

function menuBurger() {
  const burger = document.querySelector(".header__burger");
  const list = document.querySelector(".header__list");
  const items = document.querySelectorAll(".header__list-item");
  burger.addEventListener("click", () => {
    burger.classList.toggle("header__burger--active");
    list.classList.toggle("header__list--active");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("header__burger--active");
      list.classList.toggle("header__list--active");
    });
  });
}

menuBurger();
