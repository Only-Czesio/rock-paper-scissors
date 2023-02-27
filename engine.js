const marks = ["rock", "paper", "scissors"];

const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");
const getRandom = document.querySelector("getRandom");

function randomChoice() {

    return Math.floor(Math.random() * marks.length) 

}

rock.addEventListener("click", function () {

    const computeranswer = randomChoice();

    if (marks[computeranswer] === marks[0]) {

        getRandom.textContent = "It's a tie!!";

    }
    if (marks[computeranswer] === marks[1]) {

        getRandom.textContent = "You win!!";

    }
    if (marks[computeranswer] === marks[2]) {

        getRandom.textContent = "You loose!!";

    }

})




function whoIsWinner() {


}