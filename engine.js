const marks = ["rock", "paper", "scissors"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const getRandom = document.getElementById("getRandom");
const botRandom = document.getElementById("botRandom");

function randomChoice() {

    return Math.floor(Math.random() * marks.length) 

}

rock.addEventListener("click", function () {

    const computeranswer = randomChoice();

    // console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

    }

});


paper.addEventListener("click", function () {

    const computeranswer = randomChoice();

    console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

    }

});


scissors.addEventListener("click", function () {

    const computeranswer = randomChoice();

    console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

    }

});




function whoIsWinner() {


}