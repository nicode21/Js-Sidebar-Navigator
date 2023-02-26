"use strict";




// let sidebar = document.querySelector('.sidebar');

// let closeIcon = document.querySelector('.sidebar .close');

// let openIcon = document.querySelector(`.sidebar .open`);

// openIcon.addEventListener("click", function () {
//   sidebar.classList.remove('hide');
//   this.classList.add('d-none');
//   closeIcon.classList.remove('d-none');
// })

// closeIcon.addEventListener("click", function () {
//   sidebar.classList.add('hide');
//   this.classList.add('d-none');
//   openIcon.classList.remove('d-none');
// })



// let button = document.querySelector("button");

// console.log(button.parentNode.parentNode);

// console.log(button.previousElementSibling.innerHTML);

// console.log(button.nextElementSibling);

// console.log(button.parentNode.children[1]);

// let elems = button.parentNode.children;

// for (const item of elems) {
//   if (item.innerText == "Hello") {
//     item.style.color = "red";
//   }
// }


// console.log (butotn.closest(".heads"));

// let elem1 = document.querySelector(".gultac");

// console.log(elem.parentNode.parentNode.parentNode.parentNode.lastElementChild.innerText);

// console.log(elem1.closest(".head").lastElementChild.innerHTML);


// let elem2 = document.querySelector(".anar");

// console.log(elem2.closest(".heads").firstElementChild.firstElementChild.firstElementChild.firstElementChild.innerHTML);


// console.log(elem2.closest(".heads").previousSibling.firstelementChild.firstelementChild.firstelementChild.firstelementChild.innerHTML);



let elemInput = document.querySelector("input");

// console.log(elemInput);

function inputEvent(e) {
  // if (e.target.value == "c") {
  //   console.log("input event");
  // }

  // console.log(e.target);

  console.log("input event");
}

elemInput.addEventListener(/* "change" */ /* "focus" */ /* "blur" */ /* "keyup" */ "keydown", inputEvent);


// document.getElementById("test").addEventListener("change", function (e) {
//   if (this.value == "1") {
//     elemInput.value = "Html";
//   }
// })


elemInput.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    document.querySelector("button").click();
  }
})


document.querySelector("button").addEventListener("click", function (e) {
  alert(e.target.previousElementSibling.value);
})