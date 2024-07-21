/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board
let deck
let score
let win


/*------------------------ Cached Element References ------------------------*/
const cardPlaceholderEl = document.querySelectorAll(".empty-card-placeholder")
const currentScoreEl = document.getElementById("current-score")



/*-------------------------------- Functions --------------------------------*/
easyDiffInit()

function easyDiffInit() {
    board = ["", "", "", "", "", "", "", "", "", "", "", "" ]
    // deck = easyDeck
    currentScoreEl.textContent = 0 
    win = false
    render()
}

function render() {
    
}


/*----------------------------- Event Listeners -----------------------------*/



