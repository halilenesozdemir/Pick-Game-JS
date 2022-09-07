'use strict';

// Resetting scores

const p0ScoreEl = document.querySelector('#score--0')
const p1ScoreEl = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')



// let switchPlayer = function(index){
//     if(index === 0){
//         player1.classList.remove('player--active');
//         player2.classList.add('player--active')
//     } else {
//         player2.classList.remove('player--active')
//         player1.classList.add('player--active')

//     }
// }


// Starting Conditions 
p0ScoreEl.textContent = 0;
p1ScoreEl.textContent = 0;
diceEl.classList.add('hidden')

let scores = [0,0] ;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
 //1.Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    if(dice){
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
    }


    //3.Check for rolled 1
    if(dice !== 1) {
        //Add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    // players.forEach(player => {
    //     let hasChildren = !player.querySelector('.player--active');
    //     console.log(`${player.classList[1]} has children with . player--active ${hasChildren}`);
    // })


    } else {
        // Switch to next player
    switchPlayer()

    }
    }
})

   

btnHold.addEventListener('click', function(){
if(playing){
     // Add current score to total score;
    scores[activePlayer] += currentScore;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // scores[1] = scores[1] + currentScore

    // Score >= 50 
    if(scores[activePlayer] >= 50){

    playing = false;
    //Finish the game
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.querySelector('.dice').classList.add('hidden')
    } else{
            switchPlayer()
    }

}

})

btnNew.addEventListener('click',function(){
    scores= [0,0];
    currentScore = 0;
    scores[player1] = 0;
    scores[player2] = 0;
    playing= true;
    activePlayer = 0;
    

    current0El.textContent =currentScore;
    current1El.textContent =currentScore;
     p1ScoreEl.textContent = 0;
     p0ScoreEl.textContent = 0;
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.remove('player--winner')

     document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
     


    // scores = [0,0];
    // currentScore = 0;
    // activePlayer = 0;
    // p1ScoreEl.textContent = 0;
    // p0ScoreEl.textContent = 0;
    // current0El.textContent =0;
    // current1El.textContent = 0;
    // playing = true;
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')

})






