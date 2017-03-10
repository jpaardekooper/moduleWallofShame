'use strict'
var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    // endgame
    if (seconds >= 20){
        alert("u lost");
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("mySidenav").style.padding = "10px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


