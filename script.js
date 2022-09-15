let container=document.querySelector(".container");
console.log(container);
function createDiv(numberDivs){
    for(let i=0;i<numberDivs;i++){
        let div=document.createElement("div");
        container.appendChild(div);
    }
}
createDiv(64);
let grid=container.querySelectorAll("div");
function colorDiv(){
this.style.backgroundColor="black";
console.log(this);  
}
grid.forEach(div=>div.addEventListener("pointerover",colorDiv.bind(div)));

