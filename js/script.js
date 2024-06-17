const menuBtn = document.querySelector(".menu-burger");
const nav = document.querySelector(".navbar__links");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    if (menuBtn.classList.contains("active")) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});
