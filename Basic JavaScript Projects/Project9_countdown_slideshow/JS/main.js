// External JavaScript file for countdown and slideshow functionality

// Countdown function
function countdown() {
    var seconds = document.getElementById('seconds').value;
    var countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        seconds--;

        if (seconds >= 0) {
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;

            countdownElement.innerHTML = `${minutes}m ${remainingSeconds}s`;
        } else {
            countdownElement.innerHTML = 'Countdown expired!';
            clearInterval(intervalId);
        }
    }

    // Update countdown every second
    var intervalId = setInterval(updateCountdown, 1000);
}

// Rest of your slideshow functions (plusSlides, currentSlide, etc.) should be here


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}