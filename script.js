window.onload = function () {
  openTab(1, event, "Team");
};

function responsive() {
  var x = document.getElementById("mainMenu");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

// reveal team images as you scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//change between alumni, members, mentors tabs
var i, tabcontent, tablinks;
const width = window.innerWidth;

function openTab(load, evt, tab) {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (load == 1) {
    // <<<<<<< Updated upstream
    document.getElementById("center").className += " active";
    //center the members tab
    document.getElementById("slide").left += width / 2;
  }
  document.getElementById(tab).style.display = "block";
  //apply active trait for new css properties
  // =======
  document.getElementById("init").className += " active";
}
document.getElementById(tab).style.display = "block";
// >>>>>>> Stashed changes
if (evt.currentTarget.classList.contains("active")) {
  evt.currentTarget.className -= " active";
} else {
  evt.currentTarget.className += " active";
}

// <<<<<<< Updated upstream
// control animation for centering the horizontal tab buttons
const l = document.getElementById("left");
const r = document.getElementById("right");
const c = document.getElementById("center");
const tabs = document.querySelectorAll(".tablinks");

function sort() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("slideLeft");
    tabs[i].classList.remove("slideRight");
    tabs[i].classList.remove("slideCenterLeft");
    tabs[i].classList.remove("slideCenterRight");
    tabs[i].classList.remove("slideCrossLeft");
    tabs[i].classList.remove("slideCrossRight");
  }
}
function add(givenClass) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.add(givenClass);
  }
}

function left() {
  if (tabs[0].classList.contains("slideLeft")) {
    sort();
    add("slideCrossRight");
  } else {
    sort();
    add("slideRight");
  }
}
function center() {
  if (
    tabs[0].classList.contains("slideLeft") ||
    tabs[0].classList.contains("slideCrossLeft")
  ) {
    sort();
    add("slideCenterLeft");
  } else if (
    tabs[0].classList.contains("slideRight") ||
    tabs[0].classList.contains("slideCrossRight")
  ) {
    sort();
    add("slideCenterRight");
  }
}
function right() {
  if (tabs[0].classList.contains("slideRight")) {
    sort();
    add("slideCrossLeft");
  } else {
    sort();
    add("slideLeft");
  }
}

// // Slideshow on covid years page
//  Stashed changes

// let slideIndex = 1;
// showSlides(slideIndex);

// <<<<<<< Updated upstream
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

// =======
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

//////
// >>>>>>> Stashed changes
///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
