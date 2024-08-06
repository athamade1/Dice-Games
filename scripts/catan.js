let h3DiceScoreEl = document.querySelector('.h3-dice-score');
let imgDice1El  = document.querySelector('.img-dice-1');
let imgDice2El  = document.querySelector('.img-dice-2');
let imgDice3El  = document.querySelector('.img-dice-3');
let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');


init();






btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice1 = Math.trunc(Math.random() * 6) + 1;
    let dice2 = Math.trunc(Math.random() * 6) + 1;
    let dice3 = Math.trunc(Math.random() * 6) + 1;

    console.log(`dice 1 : ${dice1} / dice 2 : ${dice2} / dice 3 : ${dice3} // sum = ${dice1+dice2}`);
    h3DiceScoreEl.textContent = dice1 + dice2;

    rollTheDice(dice1,dice2,dice3);
    
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked')
    init();
});


function rollTheDice(dice1, dice2,dice3){
    console.log('rollthedice function run successfully')
    switch (dice1){
        case 1:
            imgDice1El.src = '../images/dice-1.png';
            break;
        case 2:
            imgDice1El.src = '../images/dice-2.png';
            break;
        case 3:
            imgDice1El.src = '../images/dice-3.png';
            break;
        case 4:
            imgDice1El.src = '../images/dice-4.png';
            break;
        case 5:
            imgDice1El.src = '../images/dice-5.png';
            break;
        case 6:
            imgDice1El.src = '../images/dice-6.png';
            break;
    }

    switch (dice2){
        case 1:
            imgDice2El.src = '../images/dice-1.png';
            break;
        case 2:
            imgDice2El.src = '../images/dice-2.png';
            break;
        case 3:
            imgDice2El.src = '../images/dice-3.png';
            break;
        case 4:
            imgDice2El.src = '../images/dice-4.png';
            break;
        case 5:
            imgDice2El.src = '../images/dice-5.png';
            break;
        case 6:
            imgDice2El.src = '../images/dice-6.png';
            break;
    }

    if (dice3 === 1) {
        imgDice3El.src = '../images/yellow.png';
       

      } else if (dice3 === 2) {
        imgDice3El.src = '../images/green.png';

         
      } else if (dice3 === 3) {
        imgDice3El.src = '../images/blue.png';
        
      } else if (dice3 === 4) {
        imgDice3El.src = '../images/pirate.png';
        
      } else if (dice3 === 5) {
        imgDice3El.src = '../images/pirate.png';
        
      } else {
        imgDice3El.src = '../images/pirate.png';
      } 
}

function init(){
    console.log('init() function run successfully');
    h3DiceScoreEl.textContent = 'Ρίξε τα ζάρια';
    imgDice1El.src = '../images/dice-1.png';
    imgDice2El.src = '../images/dice-1.png';
}