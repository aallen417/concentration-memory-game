/*-------------------------------- Constants --------------------------------*/
const sortedDeck = ["hM", "hP", "hR", "hS", "hT", "hW", "hM", "hP", "hR", "hS", "hT", "hW"]


/*---------------------------- Variables (state) ----------------------------*/
let deck
let card
let turn
let score
let lives
let win


let gameDeck = []
let selectedCard1
let selectedCard2


/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const currentScoreEl = document.getElementById("score")
const currentLivesEl = document.getElementById("lives")
/*-------------------------------- Functions --------------------------------*/
easyDiffInit()


function easyDiffInit() {
    gameDeck = []
    score = 0
    lives = 5
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

function handleCardClick(cardEl) {
    console.log("clicked")
    cardEl.className = `${"card large"} + ${gameDeck[cardEl.id]}`
    if (turn === 1) {
        selectedCard1 = cardEl
        turn = 2
    }   else {
        selectedCard2 = cardEl    
        compare(selectedCard1, selectedCard2)
        turn = 1
    }   
   
    console.log(selectedCard1)
    console.log(selectedCard2)

        
}

function compare(selectedCard1, selectedCard2) {
    if (gameDeck[selectedCard2.id] !== gameDeck[selectedCard1.id]) {
        lives -= 1
        setTimeout(() => selectedCard1.className = "card large back-easy", 2500)
        setTimeout(() => selectedCard2.className = "card large back-easy", 2500)
        console.log("not a match")
        render()
    }   else {
            score += 5
            console.log("Is a match")
            render()
    }
        console.log(selectedCard1)
        console.log(selectedCard2)
}


function checkForVictory() {
   if (score === 30) {
    win = true
   } else {
    return
   }
}

function render() {
    currentScoreEl.textContent = "Score: " + score
    currentLivesEl.textContent = "Lives: " + lives
    checkForVictory()
        }


/*----------------------------- Event Listeners -----------------------------*/
cardEls.forEach((cardEl) => {
    cardEl.addEventListener("click", event => {handleCardClick(cardEl)})
})