// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = '#FF69B4';

document.addEventListener("keydown", function(e){
    if (e.key == "ArrowLeft"){
        moveDodgerLeft();
    } 
    if (e.key == "ArrowRight"){
        moveDodgerRight();
    }
    if (e.key == "ArrowUp"){
        moveDodgerUp();
    }

});

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0){
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);

    if (left < 400){
    dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerUp(){
    let upNumbers = dodger.style.top.replace("px", "");
    let up = parseInt(upNumbers, 10);

    if (up < 400){
        dodger.style.top = `${up + 1}px`
    }
}