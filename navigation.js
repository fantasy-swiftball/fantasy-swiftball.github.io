hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
var li1 = document.getElementById("li-1");
var li2 = document.getElementById("li-2");
var li3 = document.getElementById("li-3");
var li4 = document.getElementById("li-4");
var li5 = document.getElementById("li-5");

function home() {
    li1.classList.add("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    hamburger.click();
    document.getElementById('home').style.display="block";
    document.getElementById('ballots').style.display="none";
    document.getElementById('updates').style.display="none";
    document.getElementById('calculate').style.display="none";
    document.getElementById('answers').style.display="none";
    window.scrollTo(0,0);
}
function latestballots() {
    li1.classList.remove("active");
    li2.classList.add("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    hamburger.click();
    document.getElementById('home').style.display="none";
    document.getElementById('ballots').style.display="block";
    document.getElementById('updates').style.display="none";
    document.getElementById('calculate').style.display="none";
    document.getElementById('answers').style.display="none";
    window.scrollTo(0,0);
}
function liveupdates() {
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.add("active");
    li4.classList.remove("active");
    li5.classList.remove("active");
    hamburger.click();
    document.getElementById('home').style.display="none";
    document.getElementById('ballots').style.display="none";
    document.getElementById('updates').style.display="block";
    document.getElementById('calculate').style.display="none";
    document.getElementById('answers').style.display="none";
    window.scrollTo(0,0);
}
function calculate() {
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.add("active");
    li5.classList.remove("active");
    hamburger.click();
    document.getElementById('home').style.display="none";
    document.getElementById('ballots').style.display="none";
    document.getElementById('updates').style.display="none";
    document.getElementById('calculate').style.display="block";
    document.getElementById('answers').style.display="none";
    window.scrollTo(0,0);
}
function latest() {
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
    li4.classList.remove("active");
    li5.classList.add("active");
    hamburger.click();
    document.getElementById('home').style.display="none";
    document.getElementById('ballots').style.display="none";
    document.getElementById('updates').style.display="none";
    document.getElementById('calculate').style.display="none";
    document.getElementById('answers').style.display="block";
    window.scrollTo(0,0);
}
