var score = 0;

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function updateScore(inputScore){
	document.getElementById('score-text').textContent = inputScore;
};

function resetGame(){
	/*
	//Doesn't work
	document.getElementById('cardElement').setAttribute('src', "images/back.png");//"flip" cards back into back images
	score = 0;
	updateScore(score);
	*/
	location.reload(); //reloads page
}

function checkForMatch() {
	if (cardsInPlay.length > 1){
		if (cardsInPlay[-1] === cardsInPlay[-2]) {
			window.alert("You found a match!");
			console.log("You found a match!");
			score++; //add 1 to score
			updateScore(score); //update score
		} else {
			window.alert("Sorry, try again.");
			console.log("Sorry, try again.");
		}
	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click',flipCard); // No '' in function parameters!
    	document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();
document.getElementById("button-reset").addEventListener('click',resetGame);