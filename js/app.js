/*-------------------------------- Constants --------------------------------*/
const deckOfSortedCards = ["hM", "hP", "hR", "hS", "hT", "hW", "hM", "hP", "hR", "hS", "hT", "hW"]
/*---------------------------- Variables (state) ----------------------------*/
let cantClick = false
let turn
let score
let lives
let win
let defeat
let selectedCard1
let selectedCard2
let deckOfGameCards = []
let newDeck = []
/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const currentScoreEl = document.getElementById("score")
const currentLivesEl = document.getElementById("lives")
const resetButtonEl = document.getElementById("reset")
/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    newDeck = [...deckOfSortedCards]
    deckOfGameCards = []
    score = 0
    lives = 5
    win = false
    defeat = false
    turn = 1
    cardEls.forEach((cardEl) =>  {
    cardEl.className = "card large back-easy"
    })
    shuffleDeck()
    render()   
}

function shuffleDeck() {
    while (newDeck.length > 0) {
        let randomIdx = Math.floor(Math.random() * newDeck.length)
        let randomCard = newDeck.splice(randomIdx, 1)[0]
        deckOfGameCards.push(randomCard)
    }
}

function handleCardClick(cardEl) {
    if (cantClick === true) {
        return
    }
    if (defeat === true) {
        return
    }
    if (win === true) {
        return
    }
    if (cardEl.className !== "card large back-easy") {
        return
    }
    cardEl.className = `${"card large"} + ${deckOfGameCards[cardEl.id]}`    
    if (turn === 1) {
        selectedCard1 = cardEl
        turn = 2
    }   else {
        selectedCard2 = cardEl    
        compare(selectedCard1, selectedCard2)
        turn = 1
    }    
    checkForVictory()   
    checkForDefeat()        
}

function compare(selectedCard1, selectedCard2) {
    if (deckOfGameCards[selectedCard2.id] !== deckOfGameCards[selectedCard1.id]) {
        cantClick = true
        lives -= 1
        setTimeout(() => cantClick = false, 2500)
        setTimeout(() => selectedCard1.className = "card large back-easy", 2500)
        setTimeout(() => selectedCard2.className = "card large back-easy", 2500)        
        render()
    }   
    if (deckOfGameCards[selectedCard2.id] === deckOfGameCards[selectedCard1.id]) {
        score += 5
        render()
    }        
}

function checkForVictory() {
   if (score === 30) {
    win = true
   } else {
    return
   }
}

function checkForDefeat() {
    if (lives === 0) {
    defeat = true
    }   else {
        return
    }
}

function render() {
    currentScoreEl.textContent = "Score: " + score
    currentLivesEl.textContent = "Lives: " + lives
    }
/*----------------------------- Event Listeners -----------------------------*/
cardEls.forEach((cardEl) => {
    cardEl.addEventListener("click", event => {handleCardClick(cardEl)})    
})
resetButtonEl.addEventListener("click", init)