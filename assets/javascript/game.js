//reset-button, num-resets, teamone-numshots,teamone-numgoals,teamone-shootbutton//
const resetButton = document.querySelector('#reset-button')
const teamoneNumshots = document.querySelector('#teamone-numshots')
const teamoneNumgoals = document.querySelector('#teamone-numgoals')
const teamoneShootbutton = document.querySelector('#teamone-shoot-button')
const teamtwoNumshots = document.querySelector('#teamtwo-numshots')
const teamtwoNumgoals = document.querySelector('#teamtwo-numgoals')
const teamtwoShootbutton = document.querySelector('#teamtwo-shoot-button')
const numResets = document.querySelector('#num-resets')

let t1shots = 0
let t1goals = 0
let t2shots = 0
let t2goals = 0
let nr = 0



teamoneShootbutton.addEventListener('click', function() {
    teamoneNumshots.innerHTML = t1shots += 1
    let random = Math.random()
    if (random <0.5) {
        teamoneNumgoals.innerHTML = t1goals += 1
        } 
})

teamtwoShootbutton.addEventListener('click', function() {
    teamtwoNumshots.innerHTML =t2shots += 1
    let random = Math.random() 
    if (random <0.5) {
        teamtwoNumgoals.innerHTML = t2goals += 1
        } 
})

resetButton.addEventListener('click', function() {
    teamoneNumshots.innerHTML = t1shots = 0
    teamoneNumgoals.innerHTML = t1goals = 0
    teamtwoNumshots.innerHTML = t2shots = 0
    teamtwoNumgoals.innerHTML = t2goals = 0
    numResets.innerHTML = nr += 1
    
})

