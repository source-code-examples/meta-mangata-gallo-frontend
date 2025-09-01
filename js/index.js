const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const promotionBlog = document.getElementById("promotion");

if (burger && navLinks && promotionBlog) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    promotionBlog.classList.toggle("fade-out");
  });
}
