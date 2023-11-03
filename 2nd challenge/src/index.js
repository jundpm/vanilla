const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  //heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);

function widthColor() {
    if (window.innerWidth >1100) {
        body.style.backgroundcolor = "red";
    } else {
        
    }
}



window.addEventListener("innerWidth", widthColor);