var colors = ["red", "blue", "green", "yellow", "pink", "orange", "gold", "gray", "lightblue"];

function changeColor() {
    var rand = Math.floor(Math.random() * (9 - 0 + 1));
    document.getElementById("bo").style.backgroundColor = colors[rand];
}

function changeTextColor() {
    var rand = Math.floor(Math.random() * (9 - 0 + 1));
    document.getElementById("dank").style.color = colors[rand];
}

setInterval(changeColor, 100);
setInterval(changeTextColor, 100);


