const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");



rockBtn.addEventListener("click",()=>{
    player.textContent = "Player: Rock"
    computer.textContent = "Computer:" + getRandom(arr);
    
})



const arr = ["Rock", "Paper", "Scissors"];
    function getRandom(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
    return item;
    }

console.log(getRandom(arr))