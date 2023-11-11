const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const message = document.querySelector("#message");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const container = document.querySelector("#container");



rockBtn.addEventListener("click",()=>{
    const computerChoice = getRandom(arr);
    player.textContent = "Rock";
    computer.textContent = computerChoice;
    
    switch (computerChoice) {
        case "Rock":
            message.textContent = "Draw";
            container.style.background = "";
            break;
        case "Paper":
            message.textContent = "You Lost!";
            container.style.background = "linear-gradient(red,yellow)";
            break;
        case "Scissors":
            message.textContent = "You Won!";
            container.style.background= "linear-gradient(green,blue)"
            break;

    }
})

paperBtn.addEventListener("click",()=>{
    const computerChoice = getRandom(arr);
    player.textContent = "Paper";
    computer.textContent = computerChoice;
    
    switch (computerChoice) {
        case "Paper":
            message.textContent = "Draw";
            container.style.background = "";
            break;
        case "Scissors":
            message.textContent = "You Lost!";
            container.style.background = "linear-gradient(red,yellow)";
            break;
        case "Rock":
            message.textContent = "You Won!";
            container.style.background= "linear-gradient(green,blue)"
            break;

    }
})

scissorsBtn.addEventListener("click",()=>{
    const computerChoice = getRandom(arr);
    player.textContent = "Scissors";
    computer.textContent = computerChoice;
    
    switch (computerChoice) {
        case "Scissors":
            message.textContent = "Draw";
            container.style.background = "";
            break;
        case "Rock":
            message.textContent = "You Lost!";
            container.style.background = "linear-gradient(red,yellow)";
            break;
        case "Paper":
            message.textContent = "You Won!";
            container.style.background= "linear-gradient(green,blue)"
            break;

    }
})


const arr = ["Rock", "Paper", "Scissors"];
    function getRandom(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
    return item;
    }

console.log(getRandom(arr))