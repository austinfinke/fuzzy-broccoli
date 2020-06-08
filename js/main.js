$(() => {
  mobileNav();
});

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
