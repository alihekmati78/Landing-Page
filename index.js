const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const navBar = document.querySelector(".nav-container");

if (bar && navBar) {
    bar.addEventListener("click", () => {
        navBar.classList.add("active");
    });
}

if (close && navBar) {
    close.addEventListener("click", () => {
        navBar.classList.remove("active");
    });
}