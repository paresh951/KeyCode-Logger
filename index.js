

const heading = document.getElementById("heading");
const span = document.getElementById("span");

document.addEventListener("keydown",function(e){
    //console.log(e.key, e.keyCode)
    const key = e.key;
    const keyCode = e.keyCode;

    heading.textContent = keyCode;
    span.textContent = key;

})


