const ghost= document.getElementById("ghost");
const alien= document.getElementById("alien");

function float(){
if(ghost.classList != "float"){
    ghost.classList.add("float");

    setTimeout(function(){
        ghost.classList.remove("float");
    },300)
}
}

document.addEventListener("keydown",function (event){
    float();
})

let isAlive = setInterval(function () {
    let ghostTop = parseInt(window.getComputedStyle(ghost).getPropertyValue("top"));
    let alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));

    // Ghost fixed horizontal position (x = 30px from left of game)
    const ghostLeft = 30;
    const ghostRight = ghostLeft + 30; // ghost width = 30
    const alienRight = alienLeft + 30; // alien width = 30

    // Check for horizontal overlap
    const isHorizontalOverlap = ghostRight > alienLeft && ghostLeft < alienRight;

    // Check for vertical overlap (ghost is on ground)
    const isVerticalOverlap = ghostTop >= 30;

    if (isHorizontalOverlap && isVerticalOverlap) {
        console.log("collision");
    }
}, 10);
