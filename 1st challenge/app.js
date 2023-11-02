const title = document.querySelector("h2");

const superEventHandler = {
    Mouseenter : function(){
        title.style.color = "blue";
        title.innerText = "mouse is here";
    },
    Mouseleave : function(){
        title.style.color = "red";
        title.innerText = "mouse is left";
    },
    Resize : function(){
        title.style.color = "green";
        title.innerText = "you just resized";
    },
    Contextmenu : function(){
        title.style.color = "tomato";
        title.innerText = "clicked right";
    }
    
}


title.addEventListener("mouseenter",superEventHandler.Mouseenter);
title.addEventListener("mouseleave",superEventHandler.Mouseleave);

window.addEventListener("resize",superEventHandler.Resize);
window.addEventListener("contextmenu",superEventHandler.Contextmenu);