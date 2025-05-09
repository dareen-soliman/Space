const ghost= document.getElementById("ghost");

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
