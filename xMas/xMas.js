//Katharine LoScalzo
//14 November 2016

//Updated version of my xMas Instrument project
//Turn the volume up!
//click the canvas for snowflakes
//hover over a place on the screen and click the UP arrowkey for Santa and his reindeer and click the DOWN arrowkey to make presents!
//Happy Holidays!

var letitsnow;
var chime;
var hohoho;
var sleighbells;

var tree;
var snowflake;
var present;

var santa;


function preload() {
    letitsnow = loadSound("assets/letitsnow.mp3");
    chime = loadSound("assets/chime.wav");
    hohoho = loadSound("assets/hohoho.wav");
    sleighbells = loadSound("assets/sleighbells.wav");

    tree = loadImage("assets/tree.png");
    snowflake = loadImage("assets/decor/snowflake.png");
    present = loadImage("assets/presents/present3.png")
    santa = loadImage("assets/santa.png");
}

function setup() {
    createCanvas(800, 600);
    background(0, 0, 128);
    letitsnow.play();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {

        rotate(radians(-10));

        image(santa, pmouseX, pmouseY, 290, 110);


        hohoho.stop();
        sleighbells.setVolume(0.1);
        sleighbells.play();
    } else if (keyCode == DOWN_ARROW) {
        image(present, pmouseX, pmouseY, 75, 75);
        sleighbells.stop();
        hohoho.setVolume(0.1);
        hohoho.play();
    }
}


function draw() {

    if (mouseIsPressed) {
        image(snowflake, pmouseX, pmouseY, 23, 25);
        hohoho.stop();
        sleighbells.stop();
        chime.setVolume(0.1);
        chime.play();
        chime.fade();
    }


    image(tree, 230, 100, 300, tree.height / 2);
}
