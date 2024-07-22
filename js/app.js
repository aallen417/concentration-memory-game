/*-------------------------------- Constants --------------------------------*/
const sortedDeck = ["hM", "hP", "hR", "hS", "hT", "hW", "hM", "hP", "hR", "hS", "hT", "hW"]


/*---------------------------- Variables (state) ----------------------------*/
let deck
let card
let turn
let score
let win


let gameDeck = []
let selectedCard1
let selectedCard2


/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const currentScoreEl = document.getElementById("current-score")

/*-------------------------------- Functions --------------------------------*/
easyDiffInit()


function easyDiffInit() {
    gameDeck = []
    currentScoreEl.textContent = 0 
    win = false
    turn = 1
    cardEls.forEach((cardEl) =>  {
    cardEl.className = "card large back-easy"
    })
    shuffleDeck()
    render()   
}



function shuffleDeck() {
    while (sortedDeck.length > 0) {
        let randomIdx = Math.floor(Math.random() * sortedDeck.length)
        let randomCard = sortedDeck.splice(randomIdx, 1)[0]
        gameDeck.push(randomCard)
        console.log(gameDeck)
        }
}

function handleCardClick(cardEl, idx) {
    console.log("clicked")
    cardEl.className = `${"card large"} + ${gameDeck[cardEl.id]}`
}

function render() {
    
        }


/*----------------------------- Event Listeners -----------------------------*/
cardEls.forEach((cardEl) => {
    cardEl.addEventListener("click", event => {handleCardClick(cardEl)})
})


