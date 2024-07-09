const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissor = document.querySelector("#scissor")
const ui = document.querySelector("#ui")

const result = document.createElement("p")
const score = document.createElement("p")
const finalOutcome = document.createElement("h3")

let humanScore = 0
let computerScore = 0
let choiceH = 0


function getComputerChoice(){

    let choiceC = Math.floor((Math.random()*3)+1)

    console.log(choiceC);
    return choiceC

}
    
    rock.addEventListener('click',()=>{
        choiceH = 1
    })
    
    paper.addEventListener('click',()=>{
        choiceH = 2
    })
    
    scissor.addEventListener('click',()=>{
        choiceH = 3
    })
    
    console.log(choiceH)




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
        result.textContent = `It's a tie you both chose ${nameH}`
    }else if(human===1 && computer===2){
        result.textContent = `The Computer wins since ${nameC} beats ${nameH}`
        c++
    }else if(human===1 && computer===3){
        result.textContent = `The Human wins since ${nameH} beats ${nameC}`
        h++
    }else if(human===2 && computer===1){
        result.textContent = `The Human wins since ${nameH} beats ${nameC}`
        h++
    }else if(human===2 && computer===3){
        result.textContent = `The Computer wins since ${nameC} beats ${nameH}`
        c++
    }else if(human===3 && computer===1){
        result.textContent = `The Computer wins since ${nameC} beats ${nameH}`
        c++
    }else if(human===3 && computer===2){
        result.textContent = `The Human wins since ${nameH} beats ${nameC}`
        h++
    }

    let scores = [h,c]

    return scores

}

function playGame(){

        let human = choiceH
        let computer = getComputerChoice()
        let scores = playRound(human,computer,humanScore,computerScore)
        humanScore = scores[0]
        computerScore = scores[1]


    score.textContent = `The points till now are:
    HUMAN: ${humanScore}
    COMPUTER: ${computerScore}`

    if(humanScore>computerScore){
        finalOutcome.textContent=`The human is in the lead`
    }else if(computerScore>humanScore){
        finalOutcome.textContent=`The Computer is in the lead`
    }else{finalOutcome.textContent=`Both are in a Tie`}

}

ui.appendChild(result)
ui.appendChild(finalOutcome)
ui.appendChild(score)


rock.addEventListener('click',playGame)
paper.addEventListener('click',playGame)
scissor.addEventListener('click',playGame)




