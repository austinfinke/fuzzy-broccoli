$(() => {
  animateArrow();
});

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

function onScroll() {
  const arrow = document.querySelector(".fa-arrow-circle-down");
  document.addEventListener("scroll", () => {
    arrow.style.display = "none";
  });
}
