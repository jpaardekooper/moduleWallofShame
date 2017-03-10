'use strict'
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 804;
canvas.height = 501;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.jpg";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/tim.png";


// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/coffee.png";

// bomb0 image
var bombReady = false;
var bombImage = new Image();
bombImage.onload = function () {
    bombReady = true;
};
bombImage.src = "images/sem_360.png";

// bomb1 image
var bomb1Ready = false;
var bomb1Image = new Image();
bomb1Image.onload = function () {
    bomb1Ready = true;
};
bomb1Image.src = "images/ferry_360.png";

// bomb2 image lars
var bomb2Ready = false;
var bomb2Image = new Image();
bomb2Image.onload = function () {
    bomb2Ready = true;
};
bomb2Image.src = "images/lars_360.png";

// bomb3 image
var bomb3Ready = false;
var bomb3Image = new Image();
bomb3Image.onload = function () {
    bomb3Ready = true;
};
bomb3Image.src = "images/mike_360.png";

// bomb4 image ali
var bomb4Ready = false;
var bomb4Image = new Image();
bomb4Image.onload = function () {
    bomb4Ready = true;
};
bomb4Image.src = "images/ali_360.png";

// bomb5 image
var koenReady = false;
var koenImage = new Image();
koenImage.onload = function () {
    koenReady = true;
};
koenImage.src = "images/koen_360.png";

// life image
var lifeReady = false;
var lifeImage = new Image();
lifeImage.onload = function () {
    lifeReady = true;
};
lifeImage.src = "images/peter_360.png";

// BEMM mike
var bem1Ready = false;
var bem2Ready = false;
var bem3Ready = false;
var bem4Ready = false;
var bem5Ready = false;

var bem1Image = new Image();
var bem2Image = new Image();
var bem3Image = new Image();
var bem4Image = new Image();
var bem5Image = new Image();
bem1Image.onload = function () {
    bem1Ready = true;
};
bem2Image.onload = function () {
    bem2Ready = true;
};
bem3Image.onload = function () {
    bem3Ready = true;
};
bem4Image.onload = function () {
    bem4Ready = true;
};
bem5Image.onload = function () {
    bem5Ready = true;
};
bem1Image.src = "images/bomb.png";
bem2Image.src = "images/bomb.png";
bem3Image.src = "images/bomb.png";
bem4Image.src = "images/bomb.png";
bem5Image.src = "images/bomb.png";


// Game objects
var hero = {
    speed: 400 // movement in pixels per second
};
var monster = {};
var bomb = {};
var bomb1 = {};
var bomb2 = {};
var bomb3 = {};
var bomb4 = {};

var bem1 = {};
var bem2 = {};
var bem3 = {};
var bem4 = {};
var bem5 = {};
var koen = {};
var life = {};
var monstersCaught = 15;
//life left
var bombsCaught = 4;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

var start = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
}
// Reset the game when the player catches a monster
var reset = function () {
    // Throw the monster somewhere on the screen randomly
    monster.x = 31 + (Math.random() * (canvas.width - 65));
    monster.y = 31 + (Math.random() * (canvas.height - 65));

    // Throw the monster somewhere on the screen randomly
    bomb.x = 32 + (Math.random() * (canvas.width - 63));
    bomb.y = 32 + (Math.random() * (canvas.height - 63));

    bomb1.x = 32 + (Math.random() * (canvas.width - 60));
    bomb1.y = 32 + (Math.random() * (canvas.height - 60));

    bomb2.x = 32 + (Math.random() * (canvas.width - 58));
    bomb2.y = 32 + (Math.random() * (canvas.height - 58));

    //mike
    bomb3.x = 32 + (Math.random() * (canvas.width - 56));
    bomb3.y = 32 + (Math.random() * (canvas.height - 56));

    bomb4.x = 32 + (Math.random() * (canvas.width - 68));
    bomb4.y = 32 + (Math.random() * (canvas.height - 68));

    koen.x = 32 + (Math.random() * (canvas.width - 50));
    koen.y = 32 + (Math.random() * (canvas.height - 50));

    life.x = 32 + (Math.random() * (canvas.width - 55));
    life.y = 32 + (Math.random() * (canvas.height - 55));


};


// Update game objects
var update = function (modifier) {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
    }


    // Are they touching?
    if (
        hero.x <= (monster.x + 60)
        && monster.x <= (hero.x + 60)
        && hero.y <= (monster.y + 60)
        && monster.y <= (hero.y + 60)
    ) {
        --monstersCaught;

        document.getElementById("man").innerHTML = "";
        document.getElementById("secret").innerHTML = "";


        reset();
    }

    // trying to leave te game?
    //thanks tim
    if (hero.x >= (canvas.width)) {
        hero.x = 1;
    }
    if (hero.x <= (0)) {
        hero.x = canvas.width - 1;
    }
    if (hero.y >= (canvas.height)) {
        hero.y = 1;
    }
    // Are they touching?
    if (hero.y <= (0)) {
        hero.y = canvas.height - 1;
    }

    //bomb 0
    if (
        hero.x <= (bomb.x + 60)
        && bomb.x <= (hero.x + 60)
        && hero.y <= (bomb.y + 60)
        && bomb.y <= (hero.y + 60)
    ) {

        var audio = new Audio('sound.mp3');
        audio.play();

        --bombsCaught;


        reset();
    }
    //bomb1
    if (
        hero.x <= (bomb1.x + 60)
        && bomb1.x <= (hero.x + 60)
        && hero.y <= (bomb1.y + 60)
        && bomb1.y <= (hero.y + 60)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        --bombsCaught;


        reset();
    }
    //bombs2
    if (
        hero.x <= (bomb2.x + 60)
        && bomb2.x <= (hero.x + 60)
        && hero.y <= (bomb2.y + 60)
        && bomb2.y <= (hero.y + 60)
    ) {
        // --bombsCaught;

        bomb1.x = bomb1.x + Math.floor((Math.random() * 2));
        bomb1.y = bomb1.y + Math.floor((Math.random() * 2));

        bomb2.x = bomb2.x + Math.floor((Math.random() * 2))
        bomb2.y = bomb2.y + Math.floor((Math.random() * 2))

        //mike
        bomb3.x = bomb3.x + Math.floor((Math.random() * 2))
        bomb3.y = bomb3.y + Math.floor((Math.random() * 2))

        bomb4.x = bomb4.x + Math.floor((Math.random() * 2))
        bomb4.y = bomb4.y + Math.floor((Math.random() * 2))

        // reset();
    }
    //bomb3 mike
    if (
        hero.x <= (bomb3.x + 60)
        && bomb3.x <= (hero.x + 60)
        && hero.y <= (bomb3.y + 60)
        && bomb3.y <= (hero.y + 60)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem1.x = 32 + (Math.random() * (canvas.width - 88));
        bem1.y = 32 + (Math.random() * (canvas.height - 88));

        bem2.x = 32 + (Math.random() * (canvas.width - 88));
        bem2.y = 32 + (Math.random() * (canvas.height - 88));

        bem3.x = 32 + (Math.random() * (canvas.width - 88));
        bem3.y = 32 + (Math.random() * (canvas.height - 88));

        bem4.x = 32 + (Math.random() * (canvas.width - 88));
        bem4.y = 32 + (Math.random() * (canvas.height - 88));

        bem5.x = 32 + (Math.random() * (canvas.width - 88));
        bem5.y = 32 + (Math.random() * (canvas.height - 64));

        reset();

    }
    //bomb4 ali
    if (
        hero.x <= (bomb4.x + 60)
        && bomb4.x <= (hero.x + 60)
        && hero.y <= (bomb4.y + 60)
        && bomb4.y <= (hero.y + 60)
    ) {

        var audio = new Audio('man.mp3');
        audio.play();

        --bombsCaught;

        document.getElementById("man").innerHTML = "MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN MAN";
        document.getElementById("secret").innerHTML = "";

        reset();
    }
    //koen
    if (
        hero.x <= (koen.x + 60)
        && koen.x <= (hero.x + 60)
        && hero.y <= (koen.y + 60)
        && koen.y <= (hero.y + 60)
    ) {
        var audio = new Audio('rewind.mp3');
        audio.play();

        document.getElementById("secret").innerHTML = "KOEN MOET JE DOEN";
        document.getElementById("man").innerHTML = "";

        h1.textContent = "00:00:00";
        seconds = 0;
        minutes = 0;
        hours = 0;

        reset();
    }

    //+life
    if (
        hero.x <= (life.x + 60)
        && life.x <= (hero.x + 60)
        && hero.y <= (life.y + 60)
        && life.y <= (hero.y + 60)
    ) {
        var audio = new Audio('heart.mp3');
        audio.play();

        ++bombsCaught;

        document.getElementById("secret").innerHTML = "Peter gave you +1 health";
        document.getElementById("man").innerHTML = "";
        reset();
    }

    //bem1
    if (
        hero.x <= (bem1.x + 60)
        && bem1.x <= (hero.x + 50)
        && hero.y <= (bem1.y + 60)
        && bem1.y <= (hero.y + 50)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem1.x = 3200 + (Math.random() * (canvas.width - 3200));
        bem1.y = 3200 + (Math.random() * (canvas.height - 3200));

        --bombsCaught;
    }
    //bem2
    if (
        hero.x <= (bem2.x + 60)
        && bem2.x <= (hero.x + 50)
        && hero.y <= (bem2.y + 60)
        && bem2.y <= (hero.y + 50)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem2.x = 3200 + (Math.random() * (canvas.width - 3200));
        bem2.y = 3200 + (Math.random() * (canvas.height - 3200));

        --bombsCaught;

    }
    //bem3
    if (
        hero.x <= (bem3.x + 60)
        && bem3.x <= (hero.x + 50)
        && hero.y <= (bem3.y + 60)
        && bem3.y <= (hero.y + 50)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem3.x = 3200 + (Math.random() * (canvas.width - 3200));
        bem3.y = 3200 + (Math.random() * (canvas.height - 3200));

        --bombsCaught;
    }
    //bem4
    if (
        hero.x <= (bem4.x + 60)
        && bem4.x <= (hero.x + 50)
        && hero.y <= (bem4.y + 60)
        && bem4.y <= (hero.y + 50)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem4.x = 3200 + (Math.random() * (canvas.width - 3200));
        bem4.y = 3200 + (Math.random() * (canvas.height - 3200));

        --bombsCaught;


    }

    //bem5
    if (
        hero.x <= (bem5.x + 60)
        && bem5.x <= (hero.x + 50)
        && hero.y <= (bem5.y + 60)
        && bem5.y <= (hero.y + 50)
    ) {
        var audio = new Audio('sound.mp3');
        audio.play();

        bem5.x = 3200 + (Math.random() * (canvas.width - 3200));
        bem5.y = 3200 + (Math.random() * (canvas.height - 3200));

        --bombsCaught;


    }
};

// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    //bomb0
    if (bombReady) {
        ctx.drawImage(bombImage, bomb.x, bomb.y);
    }
    //bomb 1
    if (bomb1Ready) {
        ctx.drawImage(bomb1Image, bomb1.x, bomb1.y);
    }
    //bomb2
    if (bomb2Ready) {
        ctx.drawImage(bomb2Image, bomb2.x, bomb2.y);
    }
    //bomb3
    if (bomb3Ready) {
        ctx.drawImage(bomb3Image, bomb3.x, bomb3.y);
    }
    //bomb4
    if (bomb4Ready) {
        ctx.drawImage(bomb4Image, bomb4.x, bomb4.y);
    }
    //bomb5
    if (koenReady) {
        ctx.drawImage(koenImage, koen.x, koen.y);
    }
    if (lifeReady) {
        ctx.drawImage(lifeImage, life.x, life.y);
    }

    if (bem1Ready) {
        ctx.drawImage(bem1Image, bem1.x, bem1.y);
    }

    if (bem2Ready) {
        ctx.drawImage(bem2Image, bem2.x, bem2.y);
    }

    if (bem3Ready) {
        ctx.drawImage(bem3Image, bem3.x, bem3.y);
    }

    if (bem4Ready) {
        ctx.drawImage(bem4Image, bem4.x, bem4.y);
    }

    if (bem5Ready) {
        ctx.drawImage(bem5Image, bem5.x, bem5.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("deadline: " + monstersCaught, 670, 32);

    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "20px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("health: " + bombsCaught, 32, 32);

    if (monstersCaught < 1) {
        document.write("u won ");
    }
    if (bombsCaught === 0) {
        document.write("u lost ");
    }
};

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};


// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


// Let's play this game!
var then = Date.now();
reset();
start();
main();