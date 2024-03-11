window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');

    loader.addEventListener("transitionend", () => {
        loader.remove(); // Remove the loader element from the DOM
    });
});
