// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader');
//     loader.classList.add('loader-hidden');

//     loader.addEventListener("transitionend", () => {
//         loader.remove(); // Remove the loader element from the DOM
//     });
// });


function loaderAnimation() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"

    },4200)
}

loaderAnimation();