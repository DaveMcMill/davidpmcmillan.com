document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const tTrack = document.getElementById("tTrack");
if (tTrack) {
  const prev = document.getElementById("tPrev");
  const next = document.getElementById("tNext");
  const step = () => {
    const card = tTrack.querySelector(".t-card");
    return card ? card.getBoundingClientRect().width + 20 : 300;
  };
  const update = () => {
    const max = tTrack.scrollWidth - tTrack.clientWidth - 2;
    prev.disabled = tTrack.scrollLeft <= 2;
    next.disabled = tTrack.scrollLeft >= max;
  };
  prev.addEventListener("click", () => tTrack.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => tTrack.scrollBy({ left: step(), behavior: "smooth" }));
  tTrack.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
