const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

const body = document.querySelector("body");

const h2 = document.querySelector("h2");
h2.style.color = "white";
console.dir(body);

function updateSize() {
  //heightOutput.textContent = window.innerHeight;
  //widthOutput.textContent = window.innerWidth;
  if (window.innerWidth < 600) {
    body.style.background = "blue";
  } else if (window.innerWidth < 1000) {
    body.style.background = "purple";
  } else {
    body.style.background = "yellow";
  }
}

updateSize();
window.addEventListener("resize", updateSize);



