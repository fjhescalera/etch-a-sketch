let container=document.querySelector(".container");

function createDiv(numberDivs){
    for(let i=0;i<numberDivs;i++){
        let div=document.createElement("div");
        container.appendChild(div);
    }
}
createDiv(100);
let grid=container.querySelectorAll("div");
function colorDiv(){
    /*this.style.backgroundColor="black";*/ 
    this.classList.add("on");
    console.log(this)
}
grid.forEach(div=>div.addEventListener("pointerover",colorDiv.bind(div)));
let button=document.querySelector(".reset");
function resetDiv(){
    grid.forEach(div=>div.classList.remove("on"));
}
button.addEventListener("click",resetDiv); /*when using () after a function we are calling it, not referencing it */

