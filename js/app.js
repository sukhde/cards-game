//class holds all the cards
const deck = document.querySelector(".deck");

let openCards = [];
const sameCards = [];


 //shuffling list of cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
 }
//event listenerfor cards
 
deck.addEventListener('click', function(event){
    if(event.target.classList.contains('card') && openCards.length < 2 && !(event.target.classList.contains('open','show'))) {
    event.target.classList.add('show','open');

    openCards.push(event.target);

    if(openCards.length == 2) {
        compareCards();
    }   
    }
});
//function to compare the cards
function compareCards() {

    if(openCards[0].innerHTML == openCards[1].innerHTML) {
        sameCards.push(openCards[0]);
        sameCards.push(openCards[1]);

            openCards[0].classList.add('match');
            openCards[0].classList.remove('open','show');

            openCards[1].classList.add('match');
            openCards[1].classList.remove('open','show');
        
        
        openCards = [];
     
        
       // matchGame();
    if (sameCards.length == 16) {
        alert("congrats");
    }
     countMoves();
    }

        else {
        setTimeout(function() {
        openCards[0].classList.remove('open','show');
        openCards[1].classList.remove('open','show');

        openCards = [];
        }, 1000);
       

    }
    countMoves();
} 
//update moves
  let movesCount = document.querySelector('.moves');
    function countMoves(){
       let moves = movesCount.textContent;
       moves++;
    movesCount.textContent = moves;
}

//restart 

let restart = document.querySelector('.restart');
 
      restart.addEventListener("click",function(eve){
      window.location.reload();
});




