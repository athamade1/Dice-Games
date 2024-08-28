let btn1DiceEl = document.querySelector('.btn-1-dice');
let btn2DiceEl = document.querySelector('.btn-2-dice');
let btn3DiceEl = document.querySelector('.btn-3-dice');
let btn4DiceEl = document.querySelector('.btn-4-dice');

let h3DiceScoreEl = document.querySelector('.h3-dice-score');

let imgDiceEl = document.querySelector('.img-dice');
let imgDice2El = document.querySelector('.img-dice2');
let imgDice3El = document.querySelector('.img-dice3');
let imgDice4El = document.querySelector('.img-dice4');

let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');

var howManyDice = 1;


init();


btn1DiceEl.addEventListener('click', function(){
    howManyDice=1;
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn2DiceEl.addEventListener('click', function(){
    howManyDice=2;
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn3DiceEl.addEventListener('click', function(){
    howManyDice=3;
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn4DiceEl.addEventListener('click', function(){
    howManyDice=4;
    console.log(`clicked ${howManyDice} plays`);
    init()
})

btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice 1 : ${dice}`);
    h3DiceScoreEl.textContent = dice;

    rollTheDice(dice);
    
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked')
    howManyDice=1;
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
    if(howManyDice == 1){
        imgDiceEl.src = '../images/dice-1.png';
        imgDiceEl.style.opacity = "1";
        imgDice2El.src = '../images/dice-1.png';
        imgDice2El.style.opacity = "0.2";
        imgDice3El.src = '../images/dice-1.png';
        imgDice3El.style.opacity = "0.2";
        imgDice4El.src = '../images/dice-1.png';
        imgDice4El.style.opacity = "0.2";
    } else if (howManyDice==2){
        imgDiceEl.src = '../images/dice-1.png';
        imgDiceEl.style.opacity = "1";
        imgDice2El.src = '../images/dice-1.png';
        imgDice2El.style.opacity = "1";
        imgDice3El.src = '../images/dice-1.png';
        imgDice3El.style.opacity = "0.2";
        imgDice4El.src = '../images/dice-1.png';
        imgDice4El.style.opacity = "0.2";

    } else if (howManyDice==3){
        imgDiceEl.src = '../images/dice-1.png';
        imgDiceEl.style.opacity = "1";
        imgDice2El.src = '../images/dice-1.png';
        imgDice2El.style.opacity = "1";
        imgDice3El.src = '../images/dice-1.png';
        imgDice3El.style.opacity = "1";
        imgDice4El.src = '../images/dice-1.png';
        imgDice4El.style.opacity = "0.2";
        
    } else {
        imgDiceEl.src = '../images/dice-1.png';
        imgDiceEl.style.opacity = "1";
        imgDice2El.src = '../images/dice-1.png';
        imgDice2El.style.opacity = "1";
        imgDice3El.src = '../images/dice-1.png';
        imgDice3El.style.opacity = "1";
        imgDice4El.src = '../images/dice-1.png';
        imgDice4El.style.opacity = "1";
        
    }
    
}