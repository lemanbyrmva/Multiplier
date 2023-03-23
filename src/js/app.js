var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    991: {
      spaceBetween: 200,
    },
    320: {
      spaceBetween: 50,
    },
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 200,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const Lokal = document.querySelectorAll(".lokal");
const Tabs = document.querySelectorAll(".tabs");

for (let j = 0; j < Lokal.length; j++) {
  Lokal[j].addEventListener("click", () => {
    for (let k = 0; k < Lokal.length; k++) {
      if (k != j && Lokal[k].classList.contains("active-lokal")) {
        Lokal[k].classList.remove("active-lokal");
        Tabs[k].classList.remove("active-tabs");
      }
    }
    Lokal[j].classList.add("active-lokal");
    Tabs[j].classList.add("active-tabs");
  });
}

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const Brk = document.querySelectorAll(".break");
const flagimg = document.querySelectorAll(".flag-img");
const Flag = document.querySelectorAll(".flag");

for (let i = 0; i < Brk.length; i++) {
  Flag[i].addEventListener("click", () => {
    for (let j = 0; j < Brk.length; j++) {
      if (j != i && Brk[j].classList.contains("active-b")) {
        Brk[j].classList.remove("active-b");
        flagimg[j].classList.remove("active-flag");
      }
    }
    flagimg[i].classList.add("active-flag");
    setTimeout(function () {
      Brk[i].classList.add("active-b");
    }, 600);
  });
}

const Countries = document.querySelector(".global-body");
const India = document.querySelector(".card-india");
const China = document.querySelector(".card-china");
const Russia = document.querySelector(".card-russia");
const Thailand = document.querySelector(".card-thailand");

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
    320: {
      spaceBetween: 20,
    },
  },
});
const CloseBtn = document.querySelector(".bi-x-lg");
const Overlay = document.querySelector(".overlay");
const DemoBtn2 = document.querySelector(".demo-btn2");
const BookDemo = document.querySelector("#book-demo");
const Msgbox = document.querySelectorAll(".msg-box");

const SubmitBtn = document.getElementById("submit");
const Inputs = document.querySelectorAll(".input");
const DemoBtn = document.querySelector(".demo-btn");
if (DemoBtn) {
  DemoBtn.addEventListener("click", () => {
    BookDemo.style.display = "block";
    Overlay.style.display = "block";
  });
}
if (DemoBtn2) {
  DemoBtn2.addEventListener("click", () => {
    BookDemo.style.display = "block";
    Overlay.style.display = "block";
  });
}

if (CloseBtn) {
  CloseBtn.addEventListener("click", () => {
    BookDemo.style.display = "none";
    Overlay.style.display = "none";
    for (let j = 0; j < Msgbox.length; j++) {
      Msgbox[j].innerHTML = "";
      Inputs[j].style.borderColor = "grey";
    }
  });
}

if (SubmitBtn) {
  SubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < Inputs.length; i++) {
      if (Inputs[i].value.length == 0 && i < 4) {
        Msgbox[i].innerHTML = "Please complete this required field.";
        Inputs[i].style.borderColor = "#f2545b";
      } else if (Inputs[i].value.length == 0 && i >= 4) {
        Msgbox[i].innerHTML = "Please select an option from the dropdown menu.";
        Inputs[i].style.borderColor = "#f2545b";
      } else {
        Msgbox[i].innerHTML = "";
        Inputs[i].style.borderColor = "grey";
      }
    }
  });
}

const MenuBtn = document.querySelector("#menu-icon");
const MobileMenu = document.querySelector(".mobile-menu");
const x_sign = document.querySelector(".bi-list");
const MenuIcon = document.querySelector(".fa-bars");
if (MenuBtn) {
  MenuBtn.addEventListener("click", () => {
    // console.log("salam");
    MobileMenu.classList.toggle("active-menu");
    MenuIcon.classList.toggle("none");
    x_sign.classList.toggle("block");
  });
}

const listDrp = document.querySelectorAll(".drop-list");
const MenuDrp = document.querySelectorAll(".drop-menu");
const Caret = document.querySelectorAll(".caret");

if (listDrp) {
  for (let k = 0; k < listDrp.length; k++) {
    listDrp[k].addEventListener("click", () => {
      MenuDrp[k].classList.toggle("active-dropdown");
      Caret[k].classList.toggle("active-caret");
    });
  }
}
