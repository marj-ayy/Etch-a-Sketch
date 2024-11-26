function drawGrid(numberBoxes){
    if(numberBoxes <= 100){
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
        boxes.forEach((box) => box.style["background-color"] = '');
    });
    }
    else
        alert("You have inputed a number of boxes superior to 100. Please try again with a different valid number .");
}

const newGridButton = document.querySelector(".newGrid");
newGridButton.addEventListener("click", (e) => {
    let numberBoxes = parseInt(prompt("How many boxes do you want your new grid to be ( Maximum 100 ) ? "));
    const rowBoxes = document.querySelectorAll(".rowbox");
    rowBoxes.forEach((rowbox) => rowbox.remove());
    drawGrid(numberBoxes);
});
