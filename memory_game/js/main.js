/*console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
*/
//var cards = ["queen", "queen", "king", "king"];
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

function checkForMatch() {
	if (cardsInPlay.length > 1){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			//console.log("Sorry, try again.");
			window.alert("Sorry, try again.");
		}
	}
};

function flipCard(cardId) {
	/*
	var cardOne = cards[0];
	var cardTwo = cards[2];

	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);
	*/
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	/*
	console.log("User flipped "+cardOne);
	console.log("User flipped "+cardTwo);
	*/
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};

flipCard(0);
flipCard(2);