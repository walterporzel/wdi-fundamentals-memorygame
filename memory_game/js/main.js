const cards = [
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
var matchCount = 0;
var missCount = 0;

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			matchCount++;
			document.getElementById('match').textContent = "Matches: " + matchCount
		}
		else{
			alert("Sorry, try again.");
			missCount++;
			document.getElementById('miss').textContent = "Misses: " + missCount
		}
	}	
}


function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage)
	console.log("User Fliped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
}

function createBoard(){
	
	for(var i = 0; i < cards.length; i++){
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', 'images/back.png');
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);

    	var board = document.getElementById('game-board');
    	board.appendChild(cardElement);
	}
}
createBoard();

function resetBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardId = document.getElementsByTagName('img')[i];
		cardId.setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}
var reset = document.getElementById('reset-button');
reset.addEventListener('click', resetBoard);