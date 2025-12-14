let boxes = document.querySelectorAll(".btn");
let resBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");


let turnO = true; // PlayerO  

let winningPattern = [
    [0, 1, 2],
    [3, 4, 7],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let count = 0 ; //Count the clicks

// Add click function to each button
for (let box of boxes) {
    box.addEventListener("click", () => {
        console.log("click");
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "#FF5656" ; 
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#FFA239"
            turnO = true;
        }
        box.disabled = true;
        count++; 

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }

    });
}

// If nonone win the game : 
function gameDraw() {
    msg.innerText = "Nobody Won the Game , Match Draw !" ; 
    msgContainer.classList.remove("hide") ; 
    DisableBoxes() ; 
}


// Here we'll check winner via winning patterns 
function checkWinner() {
    for (let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != " " && pos3Val != "") {
            if (pos1Val === pos2Val && pos1Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

// Disable Buttons
function DisableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// Enable Buttons
function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#AEDEFC" ; 
    }
}

// This will show the winner on the webpage or Desktop 
function showWinner(winner) {
    msg.innerText = `Congratulations ! Winner is : player ${winner} `
    msgContainer.classList.remove("hide");
    DisableBoxes();
}

// ResetGame function 
function resetGame() {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

    
}

// Reset game : 
resBtn.addEventListener("click", resetGame); 