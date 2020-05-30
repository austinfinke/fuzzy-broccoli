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
  abouthover();
  homehover();
});

//TODO: optimize single function

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

const abouthover = () => {
  const aboutLI = document.querySelector(".js--main-nav-about-li");
  const hoverMenu = document.querySelector(".menu-about");

  aboutLI.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  aboutLI.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });

  hoverMenu.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  hoverMenu.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });
};

const homehover = () => {
  const homeLI = document.querySelector(".js--main-nav-home-li");
  const hoverMenu = document.querySelector(".menu-home");

  homeLI.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  homeLI.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });

  hoverMenu.addEventListener("mouseover", (e) => {
    hoverMenu.classList.add("show");
  });

  hoverMenu.addEventListener("mouseout", (e) => {
    hoverMenu.classList.remove("show");
  });
};
