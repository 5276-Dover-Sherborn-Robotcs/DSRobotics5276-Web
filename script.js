window.onload = function() {
  openTab(1, event, 'Team');
};

function responsive() {
  var x = document.getElementById("mainMenu");
  if (x.className === "nav-bar"){
    x.className += " responsive";
  } 
  else {
    x.className = "nav-bar";
  }
}

// reveal team images and section titles as you scroll
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

function slide() {
  var reveals = document.querySelectorAll(".slide");

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

window.addEventListener("scroll", slide);
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
  if (load == 1){
    document.getElementById('center').className += " active";
    //center the members tab
    document.getElementById('slide').left += width / 2;
  }
  document.getElementById(tab).style.display = "block";
  //apply active trait for new css properties
  if (evt.currentTarget.classList.contains("active")){
    evt.currentTarget.className -= " active";
  }
  else{
    evt.currentTarget.className += " active";
  }
}

// control animation for centering the horizontal tab buttons
const l = document.getElementById('left');
const r = document.getElementById('right');
const c = document.getElementById('center');
const tabs = document.querySelectorAll(".tablinks");

function sort(){
  for (let i = 0; i < tabs.length; i++){
    tabs[i].classList.remove("slideLeft");
    tabs[i].classList.remove("slideRight");
    tabs[i].classList.remove("slideCenterLeft");
    tabs[i].classList.remove("slideCenterRight");
    tabs[i].classList.remove("slideCrossLeft");
    tabs[i].classList.remove("slideCrossRight");
  }
}
function add(givenClass){
  for (let i = 0; i < tabs.length; i++){
    tabs[i].classList.add(givenClass);
  }
}

function left(){
  if (tabs[0].classList.contains("slideLeft")){
    sort();
    add("slideCrossRight");
  }
  else{
    sort()
    add("slideRight");
  }
}
function center(){
  if (tabs[0].classList.contains("slideLeft") || tabs[0].classList.contains("slideCrossLeft")){
    sort();
    add("slideCenterLeft");
  }
  else if (tabs[0].classList.contains("slideRight") || tabs[0].classList.contains("slideCrossRight")){
    sort();
    add("slideCenterRight");
  }
}
function right(){
  if (tabs[0].classList.contains("slideRight")){
    sort();
    add("slideCrossLeft");
  }
  else{
    sort()
    add("slideLeft");
  }
}


// Slideshow on covid years page

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
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
