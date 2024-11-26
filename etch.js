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

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => box.addEventListener("mouseover", (e) => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    e.target.style["background-color"] = `rgb(${red}, ${green}, ${blue})`;
}));

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", (e) => {
    boxes.forEach((box) => box.style["background-color"] = '')
});