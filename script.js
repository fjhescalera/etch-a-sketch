let container=document.querySelector(".container");
console.log(container);
function createDiv(numberDivs){
    for(let i=0;i<numberDivs;i++){
        let div=document.createElement("div");
        container.appendChild(div);
    }
}
createDiv(5);
