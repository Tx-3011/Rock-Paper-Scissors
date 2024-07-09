let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let choice = ""
    let x = Math.floor((Math.random()*3)+1)
    console.log(x)

    if(x=1){
        choice = "rock"
    }else if(x=2){
        choice = "paper"
    }else if(x=3){
        choice = "scissors"
    }

}

function getHumanChoice(){
    
    let y = prompt("Rock Paper Scissors?").toLowerCase()
    console.log(y)
}


getHumanChoice()
getComputerChoice()