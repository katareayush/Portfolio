window.addEventListener('load', () => {
    const loader=document.querySelector('.loader');
    loader.classList.add('loader-hidden');

    loader.addEventListener("transitionend", () => {
        element.classList.remove("loader-container");

    })

})