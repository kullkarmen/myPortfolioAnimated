



const frameImage = document.querySelector ("#frame");
const images = ["3.jpg", "4.png", "5.png", "6.png", "7.jpg", "8.jpg"]

let currentImageIndex = 0; 

frameImage.addEventListener("click", ()=> {
    currentImageIndex++;

    if(currentImageIndex >= 5) {
        currentImageIndex = 0;
    }
    frameImage.src = "images/" + images[currentImageIndex];

});