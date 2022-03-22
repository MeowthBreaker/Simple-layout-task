const sliders = [...document.querySelectorAll(".slider")];

function erase(elem) {
    const newElem = elem.cloneNode(true);

    elem.remove();

    return newElem;
}

sliders.forEach(slider => {
    const children = [...slider.children].map(erase);

    const items = document.createElement("div");
    items.classList.add("slider__items");

    const container = document.createElement("div");
    container.classList.add("slider__container");

    items.appendChild(container);

    let index = 0;
    let activeButton;

    const buttons = document.createElement("div");
    buttons.classList.add("slider__buttons");
    
    const buttonOriginal = document.createElement("div");
    buttonOriginal.classList.add("slider__button");
    
    if(children[0]) {
        children[0].classList.add("slider__item_active");
    }

    children.forEach((child, i) => {
        child.classList.add("slider__item");
        
        const button = buttonOriginal.cloneNode(true);
        if(i == 0) {
            activeButton = button;
            activeButton.classList.add("slider__button_active");
        }

        button.addEventListener("click", () => {
            if(index == i)
                return;
            
            activeButton.classList.remove("slider__button_active");
            button.classList.add("slider__button_active");
            activeButton = button;

            children[index].classList.remove("slider__item_active");
            child.classList.add("slider__item_active");
            index = i;

            container.style.transform = `translate(-${index * 100}%)`;
        })

        container.appendChild(child);

        buttons.appendChild(button);
    });

    slider.appendChild(items);
    slider.appendChild(buttons);
});