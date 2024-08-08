let h3DiceScoreEl = document.querySelector('.h3-dice-score');
let imgDiceEl = document.querySelector('.img-dice');
let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');


init();



btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice 1 : ${dice}`);
    h3DiceScoreEl.textContent = dice;

    rollTheDice(dice);
    
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked')
    init();
});


function rollTheDice(dice){
    console.log('rollthedice function run successfully')
    switch (dice){
        case 1:
            imgDiceEl.src = '../images/dice-1.png';
            break;
        case 2:
            imgDiceEl.src = '../images/dice-2.png';
            break;
        case 3:
            imgDiceEl.src = '../images/dice-3.png';
            break;
        case 4:
            imgDiceEl.src = '../images/dice-4.png';
            break;
        case 5:
            imgDiceEl.src = '../images/dice-5.png';
            break;
        case 6:
            imgDiceEl.src = '../images/dice-6.png';
            break;
    }

}

function init(){
    console.log('init() function run successfully');
    h3DiceScoreEl.textContent = 'Ρίξε το ζάρι';
    imgDiceEl.src = '../images/dice-1.png';
}