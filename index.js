const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const yourScore= document.querySelector('[data-your-score]')
const computerScore= document.querySelector('[data-computer-score]')
const SELECTIONS = [
    {
        name: 'rock', 
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click',e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name===selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner=isWinner(selection,computerSelection)
    const computerWinner=isWinner(computerSelection,selection)
    
    //computer has selected first so when first computer then u, to overcome this u have to show computer first  
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) increament(yourScore)
    if (computerWinner) increament(computerScore)
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerHTML = selection.name
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}
function isWinner(selection, opponentSelection){
    return selection.beats===opponentSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function increament(scoreSpan){
    scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) +1
}