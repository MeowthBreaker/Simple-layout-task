const arrow = document.querySelector(".header__anchor");
const about = document.querySelector(".about");

arrow.addEventListener("click", scrollToAbout);

function scrollToAbout() {
    about.scrollIntoView({behavior: "smooth", block: "center"});
}
