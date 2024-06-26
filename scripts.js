//Плавный скролл
document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll(
    ".nav_link, .nav_link_menu, .nav_link_footer, .button_shop"
  );

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Форма
function clearForm(event) {
  event.preventDefault();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
}

// Бургер меню
const burgerButton = document.getElementById("nav_burger");
const modal = document.getElementById("modal");

burgerButton.addEventListener("click", function () {
  modal.classList.add("active");
});

// Закрыть бургер меню
const xButton = document.getElementById("x");
const xmodal = document.getElementById("xmodal");

xButton.addEventListener("click", function () {
  modal.classList.remove("active");
});

const delButton = document.getElementById("nav_link_menu");
const delmodal = document.getElementById("delmodal");

xButton.addEventListener("click", function () {
  modal.classList.remove("active");
});
