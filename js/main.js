const choices=document.querySelectorAll(".choice")
const score=document.querySelector("#score")
const result=document.querySelector("#result")
const restart=document.querySelector("#restart")
const modal=document.querySelector(".modal")

const scoreboard={
  player:0,
  computer:0
}

//EventListener
choices.forEach(choice => choice.addEventListener("click",playGame))
// choices.forEach(function(choice){
//   choice.addEventListener("click",playGame)
// })
window.addEventListener("click",clearModal)
restart.addEventListener("click",restartGame)


function playGame(e){
  restart.style.display="inline-block"
  const playerChoice=e.target.id
  const computerChoice=getComputerChoice()
 let winner=getWinner(playerChoice,computerChoice)
 showWinner(winner,computerChoice)
}

function getComputerChoice(){
  const randomNumber=Math.random()*100
  if(randomNumber<33)
  return 'rock'
  else if(randomNumber>=33 && randomNumber<=66)
  return 'paper'
  else
  return 'scissor'
}

function getWinner(p,c){
  if(p===c)
  return 'draw'
  else if(p==='rock'){
    if(c==='paper')
    return 'computer'
    else
    return 'player'
  }
  else if(p==='paper'){
    if(c==='scissors')
    return 'computer'
    else
    return 'player'
  }
  else if(p==='scissors'){
    if(c==='rock')
    return 'computer'
    else
    return 'player'
  }
}

function showWinner(winner,computerChoice){
  if(winner==='player'){
    scoreboard.player++
    result.innerHTML=`
    <h1 class="text-win">You Win!!!</h1>
    <i class='fas fa-hand-${computerChoice} fa-10x'/>
    `
  }
  else if(winner==='computer')
  {
    scoreboard.computer++
    result.innerHTML=`
    <h1 class="text-lose">You Lose:(</h1>
    <i class='fas fa-hand-${computerChoice} fa-10x'/>
    `
  } 
  else
  {
    result.innerHTML= `
    <h1>It's a Draw</h1>
    <i class='fas fa-hand-${computerChoice} fa-10x'/>
    `
  }

  score.innerHTML=`
   <p>Player : ${scoreboard.player}</p>
   <p>Computer : ${scoreboard.computer}</p>
  `
  modal.style.display="block"

}

function clearModal(e){
  if(e.target ==modal){
    modal.style.display="none"
  }
}

function restartGame(){
  scoreboard.player=0;
  scoreboard.computer=0;
  score.innerHTML=`
  <p>Player : 0</p>
  <p>Computer : 0</p>
  `;
}