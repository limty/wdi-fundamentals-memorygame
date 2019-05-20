/*console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	//if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	//}
};

function flipCard(cardId) {
	checkForMatch();
	/*
	var cardOne = cards[0];
	var cardTwo = cards[2];

	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);
	*/
	console.log("User flipped "+ cards[cardId]);
	
	/*
	console.log("User flipped "+cardOne);
	console.log("User flipped "+cardTwo);
	*/
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);