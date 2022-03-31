const arrow = document.querySelector(".header__anchor");
const about = document.querySelector(".about");
const serviceCards = [...document.querySelectorAll(".services__card")];
const pricingCards = [...document.querySelectorAll(".pricing-plan__card")];
const headerLinks = [...document.querySelectorAll(".header__list-item")];
const BackToTop = document.querySelector(".top-arrow");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    let menu = document.querySelector(".header__top");

    burger.classList.toggle("burger_active");
    menu.classList.toggle("header__top_active");
});

arrow.addEventListener("click", scrollToAbout);

headerLinks.forEach(link => {
    let id = link.getAttribute("data-id");

    link.addEventListener("click", () => {
        document.querySelector(`.${id}`).scrollIntoView({behavior: "smooth", block: "start"});
        if(window.innerWidth > 1250) {
            setTimeout(() => {
                window.scrollTo({top: window.scrollY - 120, behavior: "smooth"});
            }, 750);
        }
        burger.click();
    });
});

BackToTop.addEventListener("click", () => {
    document.body.scrollIntoView({behavior: "smooth", block: "start"});
});

document.addEventListener("scroll", (e) => {
    if(window.scrollY > 600)
        BackToTop.style.opacity = 1;
    else
        BackToTop.style.opacity = 0;
});

serviceCards.forEach(card => {
    let a = card.querySelector(".services__card-button");
    let toggle = () => {
        a.classList.toggle('button_theme_transparent-onhover');
    }
    card.addEventListener("mouseenter", toggle);
    card.addEventListener("mouseleave", toggle);
});

pricingCards.forEach(card => {
    let a = card.querySelector(".pricing-plan__card-button");
    let toggle = () => {
        a.classList.toggle('button_theme_green-onhover');
    }
    card.addEventListener("mouseenter", toggle);
    card.addEventListener("mouseleave", toggle);
});

function scrollToAbout() {
    about.scrollIntoView({behavior: "smooth", block: "center"});
}