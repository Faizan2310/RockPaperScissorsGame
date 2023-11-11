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
            break;
        case "Paper":
            message.textContent = "You Lost!";
            break;
        case "Scissors":
            message.textContent = "You Won!";
            player.classList.add('celebrate');
            setTimeout(() => {
                player.classList.remove('celebrate');
            }, 1000);
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