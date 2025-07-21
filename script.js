let b1 = document.getElementById("btnRed");
let b2 = document.getElementById("btnYellow");
let b3 = document.getElementById("btnGreen");
let c1 = document.getElementById("red");
let c2 = document.getElementById("yellow");
let c3 = document.getElementById("green");

function onRed() {
    b1.style.backgroundColor = "red"
    c1.style.backgroundColor = "red"
    b2.style.backgroundColor = "gray"
    c2.style.backgroundColor = "gray"
    b3.style.backgroundColor = "gray"
    c3.style.backgroundColor = "gray"   
}

function onYellow() {
    b1.style.backgroundColor = "gray"
    c1.style.backgroundColor = "gray"
    b2.style.backgroundColor = "yellow"
    c2.style.backgroundColor = "yellow"
    b3.style.backgroundColor = "gray"
    c3.style.backgroundColor = "gray"   
}

function onGreen() {
    b1.style.backgroundColor = "gray"
    c1.style.backgroundColor = "gray"
    b2.style.backgroundColor = "gray"
    c2.style.backgroundColor = "gray"
    
    b3.style.backgroundColor = "green"
    c3.style.backgroundColor = "green"   
}