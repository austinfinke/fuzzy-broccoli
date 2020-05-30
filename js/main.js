function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(() => {
  coursehover();
});

const coursehover = () => {
  const courseLI = document.querySelector(".js--main-nav-courses-li");
  const hoverMenu = document.querySelector(".menu-courses");

  courseLI.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  courseLI.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });

  hoverMenu.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  hoverMenu.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });
};
