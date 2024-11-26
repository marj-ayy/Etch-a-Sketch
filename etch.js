const numberBoxes = 16;
const containerBox = document.querySelector(".container");
for(let j = 1; j <= numberBoxes; ++j){
    const rowBox = document.createElement("div");
    rowBox.classList.add("rowbox");
    for(let i = 1; i <= numberBoxes; ++i){
        const box = document.createElement("div");
        box.classList.add("box");
        rowBox.appendChild(box);
    }
    containerBox.appendChild(rowBox);
}   