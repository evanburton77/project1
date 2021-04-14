const button = document.querySelector(".randomNHL")
const nhlHeading = document.querySelector("#my-NHL-header")
const textInput = document.querySelector("#textInput")
const textInput2 = document.querySelector("#textInput2")
const button2 = document.querySelector(".answer")

async function getTeam(event){
    event.preventDefault()
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${textInput.value}`)
    .then(res => {
        return res.json()
      })
    .then(res => {
        nhlHeading.innerText = `NHL Team Name: ${res.teams[0].teamName}`
        
    
        if(textInput2.value === res.teams[0].locationName){
           alert("CORRECT!")
           var score = document.querySelector(".score").innerText
           var scoreNum = parseInt(score, 10)
           scoreNum += 10
           document.querySelector(".score").innerText = scoreNum
           var myAudio = document.createElement("audio");
myAudio.src = "https://www.myinstants.com/media/sounds/chicago-blackhawks-2014-goal-horn-mp3cut.mp3";
myAudio.play();
;
        }})
}

button.addEventListener("click", getTeam)
button2.addEventListener("click", getTeam)

