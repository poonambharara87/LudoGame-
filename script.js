'use strict';


//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl  = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll  = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
//Starting Conditions
const init = function(){

	scores = [0, 0 ];
	currentScore = 0;
	activePlayer = 0;
	playing = true;	
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0
	current1El.textContent = 0
	diceEl.classList.add('hidden'); //img hidden
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
}

	init();
const switchPlayer = function(){
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;	
	activePlayer = activePlayer === 0 ? 1 : 0 ;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
}

//Rolling dice Functionality

btnRoll.addEventListener('click', function(){

	if( playing ){
	//Generate a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;

	// Display Dice
	diceEl.classList.remove('hidden');
	diceEl.src = `dice-${dice}.png`;
	//Check dice roll no. 
	if(dice !== 1){
		// Add dice to current score
		// currentScore = currentScore + dice;
		currentScore += dice;

		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		// activePlayer is for dynamically changing player score
	} else {
		//if 1 switch to next player
			switchPlayer();
		}
	}
});

	btnHold.addEventListener('click', function(){

		if( playing ){
		// 1. Add current score to active player's score 
		//dynamically active player changes here
		// score[activePlayer]  = score[activePlayer] + currentScore;
		scores[activePlayer] += currentScore;
		currentScore = 0;

		document.getElementById(`score--${activePlayer}`).textContent = 
		scores[activePlayer];


		// 2. Check if player score's is >=100
			
		if(scores[activePlayer] >= 100){
			
			playing = false;
		// Finish the game
			 document.querySelector(`.player--${activePlayer}`)
			.classList.add('player--winner');


			document.querySelector(`.player--${activePlayer}`)
			.classList.remove('player--active');
		}else{

		//Switch to next player

		switchPlayer();

		}
}

	});


	btnNew.addEventListener('click', init);

	// 	//Code By Own
	// btnNew.addEventListener('click', function(){


	// 	// console.log('hllo');
		 
	// 	// let activePlayer = 0;

	// 	// scores[activePlayer] = 0;
	// 	// currentScore = 0;

	// 	// let playing = true;
	// 	// diceEl.classList.add('hidden');
	// 	// document.getElementById(`score--${activePlayer}`).textContent = 
	// 	// scores[activePlayer];

	// 	// document.getElementById(`current--${activePlayer}`).textContent = currentScore;

		// init();
	// });