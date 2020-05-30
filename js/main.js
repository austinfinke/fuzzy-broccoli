$(() => {
  itemHover("courses");
  itemHover("about");
  itemHover("home");
});

const itemHover = (item) => {
  const link = document.querySelector(`.js--main-nav-${item}-li`);
  const arrow = document.querySelector(`.js--arrow-${item}`);
  const hoverMenu = document.querySelector(`.menu-${item}`);

  link.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
    arrow.classList.add("arrow-yellow-up");
    arrow.classList.remove("arrow-yellow-down");
  });

  link.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
    arrow.classList.remove("arrow-yellow-up");
    arrow.classList.add("arrow-yellow-down");
  });

  hoverMenu.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
    arrow.classList.add("arrow-yellow-up");
  });

  hoverMenu.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
    arrow.classList.remove("arrow-yellow-up");
    arrow.classList.add("arrow-yellow-down");
  });
};

function itemClick(e) {
  const linkname = e.getAttribute("data-linkName");
  console.log(linkname);
  const link = document.querySelector(`.js--main-link-${linkname}`);
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const view = document.querySelector(".section-testimonials");
    view.scrollIntoView();
  });
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
