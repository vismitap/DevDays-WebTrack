let simpleCounterText = document.getElementById("simpleCounterText");
let value = 0;
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
simpleCounterText.value = value;

// code for add button of simple counter
addBtn.addEventListener("click", function () {
  value += 1;
  simpleCounterText.value = value;
});

// code for subtract button of simple counter
subBtn.addEventListener("click", function () {
  value -= 1;
  simpleCounterText.value = value;
});

//Like Counter Code
let heart = document.getElementById("heart");
let heartVal = document.getElementById("val");
let val = 0;
heartVal.innerText = val.toString();
heart.addEventListener("click", function (e) {
  e.stopPropagation();
  if (heart.classList.contains("fa-heart-o")) {
    heart.classList.replace("fa-heart-o", "fa-heart");
    val += 1;
    heartVal.innerText = val.toString();
  } else {
    heart.classList.replace("fa-heart", "fa-heart-o");
    val -= 1;
    heartVal.innerText = val.toString();
  }
});
