$(() => {
  animateArrow();
  // mobileLogo();
  mobileNav();
});

function onScroll() {
  const arrow = document.querySelector(".fa-arrow-circle-down");
  document.addEventListener("scroll", () => {
    arrow.style.display = "none";
  });
}

function animateArrow() {
  const arrow = $(".fa-arrow-circle-down");
  arrow.animate({ top: "90%" }, 30);
  arrow.animate({ top: "91%" }, 30);
  arrow.animate({ top: "92%" }, 30);
  arrow.animate({ top: "93%" }, 30);
  arrow.animate({ top: "94%" }, 30);
  arrow.animate({ top: "95%" }, 30);
  arrow.animate({ top: "96%" }, 30);
  arrow.animate({ top: "95%" }, 50);
  arrow.animate({ top: "94%" }, 50);
  arrow.animate({ top: "93%" }, 60);
  arrow.animate({ top: "94%" }, 50);
  arrow.animate({ top: "95%" }, 40);
  arrow.animate({ top: "96%" }, 30);
  onScroll();
}

function mobileNav() {
  const nav = document.querySelector(".js--main-nav");
  const bar = document.querySelector(".fa-bars");
  if (window.innerWidth < 1140) {
    nav.classList.remove("span-2-of-3");
    nav.classList.add("mobile-nav");
    const mobNav = document.querySelector(".mobile-nav");
    nav.classList.add("span-1-of-1");

    bar.addEventListener("click", (e) => {
      e.preventDefault();
      nav.style.display = "block";
    });

    document.addEventListener("scroll", () => {
      mobNav.style.display = "none";
    });
  }
}

// function mobileLogo() {
//   const logo = document.querySelector(".main-logo");
//   const path = `./css/assets/images/gti_logo_mobile.png`;
//   if (window.innerWidth < 900) {
//     logo.src = path;
//   }
// }

/**
 * DOCUMENT READY WITHOUT JQUERY
 */
// function docReady(fn) {
//   // see if DOM is already available
//   if (
//     document.readyState === "complete" ||
//     document.readyState === "interactive"
//   ) {
//     // call on next available tick
//     setTimeout(fn, 1);
//   } else {
//     document.addEventListener("DOMContentLoaded", fn);
//   }
// }

// docReady(() => {
// // DOM ready for manipulation
// });
