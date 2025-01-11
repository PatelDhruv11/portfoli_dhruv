// nav scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// owl carouseel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 15,
    center: true,
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

const secondaryCarousel = $(".secondary-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// backToTopButton
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Auto Typing JavaScript
const textArray = ["I’M DHRUV"];
const typingSpeed = 100; // Speed of typing in ms
const erasingSpeed = 50; // Speed of erasing in ms
const delayBetweenTexts = 1000; // Delay before typing the next text
let textIndex = 0;
let charIndex = 0;

const autoTypeElement = document.getElementById("auto-type");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    autoTypeElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    autoTypeElement.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length; // Move to the next text
    setTimeout(typeText, delayBetweenTexts);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  typeText();
});

// mousemove
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});
