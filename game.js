

function getComputerChoice(){

    let choiceC = Math.floor((Math.random()*3)+1)

    return choiceC

}

function getHumanChoice(){
    let choiceH = 0
    let y = prompt("Rock Paper Scissors?").toLowerCase()
    

    if(y==="rock"){
        choiceH=1
    }else if(y==="paper"){
        choiceH=2
    }else if(y==="scissors"){
        choiceH=3
    }else{choiceH = "No option"}

    return choiceH
}




function playRound(human,computer,h,c){
    
    if(computer===1){
        nameC = "rock"
    }else if(computer===2){
        nameC = "paper"
    }else if(computer===3){
        nameC = "scissors"
    }

    if(human===1){
        nameH = "rock"
    }else if(human===2){
        nameH = "paper"
    }else if(human===3){
        nameH = "scissors"
    }

    if(human===computer){
        console.log(`It's a tie you both chose ${nameH}`)
    }else if(human===1 && computer===2){
        console.log(`The Computer wins since ${nameC} beats ${nameH}`)
        c++
    }else if(human===1 && computer===3){
        console.log(`The Human wins since ${nameH} beats ${nameC}`)
        h++
    }else if(human===2 && computer===1){
        console.log(`The Human wins since ${nameH} beats ${nameC}`)
        h++
    }else if(human===2 && computer===3){
        console.log(`The Computer wins since ${nameC} beats ${nameH}`)
        c++
    }else if(human===3 && computer===1){
        console.log(`The Computer wins since ${nameC} beats ${nameH}`)
        c++
    }else if(human===3 && computer===2){
        console.log(`The Human wins since ${nameH} beats ${nameC}`)
        h++
    }

    let scores = [h,c]

    console.log(`Human Score: ${h}`)

    console.log(`Computer Score: ${c}`)

    return scores

}

function playGame(){

    let humanScore = 0
    let computerScore = 0

    for(let i=0;i<5;i++){
        let human = getHumanChoice()
        let computer = getComputerChoice()
        let scores = playRound(human,computer,humanScore,computerScore)
        humanScore = scores[0]
        computerScore = scores[1]
    }


    console.log(`The final scores are:
    HUMAN: ${humanScore}
    COMPUTER: ${computerScore}`)

    if(humanScore>computerScore){
        console.log(`The human Wins`)
    }else if(computerScore>humanScore){
        console.log(`The Computer Wins`)
    }else{console.log(`it's a Tie`);}

}

playGame()




