const marks = ["rock", "paper", "scissors"];

const colors = ["green", "yellow", "red"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const getRandom = document.getElementById("getRandom");
let botRandom = document.getElementById("botRandom");
const restart = document.getElementById("restart-btn");

function randomChoice() {

    return Math.floor(Math.random() * marks.length) 

}



rock.addEventListener("click", function () {

    const computeranswer = randomChoice();

    // console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

        document.body.style.backgroundColor = colors[1]

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

        document.body.style.backgroundColor = colors[2]

    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

        document.body.style.backgroundColor = colors[0]

    }

});


paper.addEventListener("click", function () {

    const computeranswer = randomChoice();

    console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

        document.body.style.backgroundColor = colors[0]

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

        document.body.style.backgroundColor = colors[1]

    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

        document.body.style.backgroundColor = colors[2]

    }

});


scissors.addEventListener("click", function () {

    const computeranswer = randomChoice();

    console.log(computeranswer);

    if (marks[computeranswer] === marks[0]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You loose!!";

        document.body.style.backgroundColor = colors[2]

    }
    if (marks[computeranswer] === marks[1]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "You win!!";

        document.body.style.backgroundColor = colors[0]
    }
    if (marks[computeranswer] === marks[2]) {

        botRandom.textContent = marks[computeranswer];

        getRandom.textContent = "It's a tie!!";

        document.body.style.backgroundColor = colors[1]

    }

});

function refreshPage() {

    window.location.reload();
}