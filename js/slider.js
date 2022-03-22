const sliders = [...document.querySelectorAll(".slider")];

sliders.forEach(slider => {
    const slides = [...slider.children];

    if(!slides.length) {
        return;
    }

    const buttons = document.createElement("div");
    buttons.classList.add("slider__buttons");

    const container = document.createElement("div");
    container.classList.add("slider__container");

    const buttonOriginal = document.createElement("div");
    buttonOriginal.classList.add("slider__button");

    let index = 0;
    let x = null;

    slider.addEventListener("pointerup", (e) => {
        if(x - e.clientX < -50) {
            if(index === 0)
                buttons.children[buttons.children.length - 1].click();
            else 
                buttons.children[index - 1].click();
        } else if (x - e.clientX > 50) {

            if(index === buttons.children.length - 1)
                buttons.children[0].click();
            else
                buttons.children[index + 1].click();
        }
    });

    slider.addEventListener("pointerdown", (e) => {
        x = e.clientX;
    });

    slides.forEach((slide, i) => {
        const button = buttonOriginal.cloneNode(true);

        slide.classList.add("slider__item");

        if(i === index) {
            button.classList.add("slider__button_active");
        }

        button.addEventListener("click", () => {
            if(i === index) {
                return;
            }

            buttons.children[index].classList.remove("slider__button_active");

            button.classList.add("slider__button_active");

            index = i;

            container.style.transform = `translate(${i * -100}%)`;
        });

        container.appendChild(slide);
        buttons.appendChild(button);
    });

    slider.appendChild(container);
    slider.appendChild(buttons);
});