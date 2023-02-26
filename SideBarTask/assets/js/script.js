"use strict";



let rightOpen = document.querySelector(".all-body .body .right-part .right-bar i");


let rightClose = document.querySelector(".all-body .body .right-part .bar-body i");

let barBody = document.querySelector(".all-body .body .right-part .bar-body");


rightOpen.addEventListener("click", function () {
  this.style.display = "none";
  rightClose.style.display = "block";
  barBody.style.transform = "translateX(0%)";
})


rightClose.addEventListener("click", function () {
  rightOpen.style.display = "block";
  // this.style.display = "none";
  barBody.style.transform = "translateX(100%)";
})


let bottomOpenClose = document.querySelector(".all-body .bottom-part .bottom-bar .icon i");


let bottomBar = document.querySelector(".all-body .bottom-part .bottom-bar");


bottomOpenClose.addEventListener("click", function () {
  if (bottomBar.style.transform == "translateY(-110px)") {
    bottomBar.style.transform = "translateY(-40px)";
  } else {
    bottomBar.style.transform = "translateY(-110px)";
  }
})


