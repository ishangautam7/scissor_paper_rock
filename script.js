let user = 0;
let computer = 0;

let name = prompt("Enter your Name");
document.querySelector(".user_text").innerHTML = name;

document.querySelector(".user_score").innerHTML = user;
document.querySelector(".comp_score").innerHTML = computer;
let buttonElement = document.querySelector("button");

function checkWinner(buttonElement){
    const computer_choice = ["rock", "paper", "scissor"];
    const computerx = computer_choice[Math.floor(Math.random()*computer_choice.length)];

    let userx = buttonElement.className;

    if(userx == "rock" && computerx == "rock" || userx == "paper" && computerx == "paper" || userx == "scissor" && computerx == "scissor"){
        document.querySelector(".result").innerHTML = "It is a Draw";
        document.querySelector(".result").style.background = "rgb(40,52,68";
    }

    if(userx == "rock" && computerx =="scissor" || userx == "paper" && computerx == "rock" || userx == "scissor" && computerx == "paper"){
        document.querySelector(".result").innerHTML = "Congrats! You Won";
        document.querySelector(".result").style.background = "green";
        user += 1;
    }

    if(userx == "rock" && computerx =="paper" || userx == "paper" && computerx == "scissor" || userx == "scissor" && computerx == "rock"){
        document.querySelector(".result").innerHTML = "Oops! You Lost";
        document.querySelector(".result").style.background = "red";
        computer += 1;
    }


    document.querySelector(".user_score").innerHTML = user;
    document.querySelector(".comp_score").innerHTML = computer;
}