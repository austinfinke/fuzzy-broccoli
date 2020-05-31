$(() => {
  itemHover("courses");
  itemHover("about");
  itemHover("home");
  itemClick("home");
  itemClick("about");
  onScroll();
  animateArrow();
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

function itemClick(item) {
  const menu = document.querySelector(`.menu-${item}`);
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    const linkname = e.target.getAttribute("data-linkname");
    const view = document.querySelector(`.section-${linkname}`);
    view ? view.scrollIntoView() : 0;
  });
}

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
