

const heading = document.getElementById("heading");
const span = document.getElementById("span");

document.addEventListener("keydown",function(e){
    //console.log(e.key, e.keyCode)
    const key = e.key;
    const keyCode = e.keyCode;

    heading.textContent = keyCode;
    span.textContent = key;

})

// document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     const keyCode = event.keyCode;

//     // Update the HTML content with the key and keyCode
//     document.getElementById('heading').textContent = key;
//     document.getElementById('span').textContent = keyCode;
// });
