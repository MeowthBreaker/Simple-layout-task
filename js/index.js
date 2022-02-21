const arrow = document.querySelector(".header__anchor");
const about = document.querySelector(".about");
const serviceCards = [...document.querySelectorAll(".services__card")];

arrow.addEventListener("click", scrollToAbout);

serviceCards.forEach(card => {
    let a = card.querySelector(".services__card-button");
    let toggle = () => {
        a.classList.toggle('button_theme_transparent-onhover');
    }
    card.addEventListener("mouseenter", toggle);
    card.addEventListener("mouseleave", toggle);
});

function scrollToAbout() {
    about.scrollIntoView({behavior: "smooth", block: "center"});
}