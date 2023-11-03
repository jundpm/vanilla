const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    //console.log("title was clicked!");
    h1.style.color = "red";
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";

}


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize",handleWindowResize);

function handleWindowCopy() {
    alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);


function handleWindowOffline() {
    alert("SoS no Wifi");
}

window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline() {
    alert("all good");
}

window.addEventListener("online", handleWindowOnline);