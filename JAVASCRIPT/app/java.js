window.addEventListener("scroll", () => {

    const element = document.querySelector(".reveal");

    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight * 0.8) {
        element.classList.add("show");
    }
});