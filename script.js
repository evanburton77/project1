const button = document.querySelector(".randomNHL")
const nhlHeading = document.querySelector("#my-NHL-header")
const textInput = document.querySelector("#textInput")

async function getTeam(event){
    event.preventDefault()
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${textInput.value}`)
    .then(res => {
        return res.json()
      })
    .then(res => 
        nhlHeading.innerText = `NHL Venue: ${res.teams[0].venue.name}`)
        
}

button.addEventListener("click", getTeam)