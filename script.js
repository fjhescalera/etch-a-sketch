const container=document.querySelector(".container");


function createDiv(num){
    container.style.gridTemplateColumns=`repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for(let i=0;i<num*num;i++){
        let div=document.createElement("div");
        div.addEventListener("pointerover",colorDiv.bind(div))
        container.appendChild(div);
    }
}



function colorDiv(){
    /*this.style.backgroundColor="black";*/ 
    this.classList.add("on");
}
/*GRID SIZER BUTTON*/
let inputButton=document.querySelector(".sizer");
inputButton.addEventListener("click", resetGrid);
function resetGrid(){
    container.innerHTML='';
    let gridSize=prompt("How many squares do you want per side of the grid?",100);
    createDiv(gridSize);
}

/*RESET COLOR BUTTON*/
let resetButton=document.querySelector(".reset");
function resetColor(){
    grid.forEach(div=>div.classList.remove("on"));
}
resetButton.addEventListener("click",resetColor); /*when using () after a function we are calling it, not referencing it */

let grid=container.querySelectorAll("div");
/*grid won't update with changes to the DOM since it returns a STATIC NodeList a solution is to add the event listeners when creating the DIVs for container*/
grid.forEach(div=>div.addEventListener("pointerover",colorDiv.bind(div)));

window.onload = () => {
    createDiv(100);
  }