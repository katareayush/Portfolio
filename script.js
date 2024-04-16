// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader');
//     loader.classList.add('loader-hidden');

//     loader.addEventListener("transitionend", () => {
//         loader.remove(); // Remove the loader element from the DOM
//     });
// });


// function loaderAnimation() {
//     var loader = document.querySelector(".loader")
//     setTimeout(function () {
//         loader.style.top = "-100%"

//     },4200)
// }
  
// loaderAnimation();


window.onload = function() {
    const movingImages = document.querySelector('.moving-images');
    const logos = document.querySelectorAll('.moving-images img');
    const gap = 20; 
    let totalWidth = 0;
    
    
    while (totalWidth < movingImages.offsetWidth) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        movingImages.appendChild(clone);
      });
      totalWidth += logos[0].offsetWidth + gap; 
    }
  
    let distance = totalWidth;
    let animationDuration = Infinity; 
    
    function animateImages() {
      movingImages.style.transition = `transform ${animationDuration}ms linear`; 
      movingImages.style.transform = `translateX(-${distance}px)`; 
      setTimeout(() => {
        movingImages.style.transition = 'none'; 
        movingImages.style.transform = 'translateX(0)'; 
        setTimeout(animateImages, 0); 
      }, animationDuration); 
    
    animateImages(); 
  };
  
  
}


document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach(function(navbarLink) {
    navbarLink.addEventListener("click", function(event) {
      navbarLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
      localStorage.setItem("activeLink", this.getAttribute("href"));
    });

    const currentLink = navbarLink.getAttribute("href");
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink && currentLink === activeLink) {
      navbarLink.classList.add("active");
    }
  });
});




