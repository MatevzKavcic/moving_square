let square = document.getElementById("insideSquare");
const imageList = [
    'images/lemur1.jpg',
    'images/lemur2.jpg',
    'images/lemur3.jpg',
    'images/lemur4.jpg',
    'images/lemur5.jpg',
    'images/lemur6.jpg',
    'images/lemur7.jpg',
    'images/lemur8.jpg',
    'images/lemur9.jpg',
    'images/lemur10.jpg',
    'images/lemur11.jpg'
];

let posY = 0; // initial top in pixels
let posX = 0;

let maxY = 524; // limit of movement (e.g., bottom of the container)
let minY = 0;
let maxX=674;
let minX =0;

let movingDown=true;

let movingUp=false;

let movingLeft=false;

let movingRight=true;

var myVar = setInterval(moveDiv, 10);

let index = 0;
let img = document.getElementById("myImage");

function changeImage() {
    index = (index + 1) % imageList.length;
    img.src = imageList[index];
}

function moveDiv() {

    //if moving down
        //edge on down
        //else no edge
    if (movingDown) {
        if (posY >= maxY) {
            movingDown = false;
            movingUp = true;
            changeImage();
        } else {
            posY += 1;
        }
    } else if (movingUp) {
        if (posY <= minY) {
            movingUp = false;
            movingDown = true;
            changeImage();

        } else {
            posY -= 1;
        }
    }

    if (movingRight) {
        if (posX >= maxX) {
            movingRight = false;
            movingLeft = true;
            changeImage();

        } else {
            posX += 1;
        }
    } else if (movingLeft) {
        if (posX <= minX) {
            movingLeft = false;
            movingRight = true;
            changeImage();

        } else {
            posX -= 1;
        }
    }

// <3
    

    square.style.top = posY + "px";
    square.style.left = posX + "px";


    console.log(movingRight)

}