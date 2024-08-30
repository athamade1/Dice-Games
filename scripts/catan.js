let h3DiceScoreEl = document.querySelector('.h3-dice-score');
let scorepiratesEl= document.querySelector('.score');
let imgDice1El  = document.querySelector('.img-dice-1');
let imgDice2El  = document.querySelector('.img-dice-2');
let imgDice3El  = document.querySelector('.img-dice-3');
let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');
let btnSoundEl = document.querySelector('.play');


let btnHistoryEl = document.querySelector('.btn-history');
let historyListEl = document.querySelector('.history-list');
let popupOverlayEl = document.querySelector('.popup-overlay');
let historyPopupEl = document.querySelector('.popup');
let closePopupEl = document.querySelector('.close-btn');

let diceHistory = [];
var pirate=0;
let flag=false;//flag = 1 symainei mute sound



//----------ixos gia zaria starts here----------------

function playMusic1(){

    var music1 = new Audio('../sound/sound_check.mp3');
    
    
    
    if (flag){
        music1.pause();
        console.log('dice sound OFF');
    }
    else{
        music1.play();
        console.log('dice sound ON');
    }

}
    
//----------ixos gia zaria ends here----------------

//----------koumpi gia anoigma kleisimo ixou starts here--------
btnSoundEl.addEventListener('click',function(){
    flag=!flag;
    console.log('sound pressed');})
//----------koumpi gia anoigma kleisimo ixou ends here--------

//----------ixos gia peirates starts here----------------
function playMusic2(){
    var music2 = new Audio('../sound/7pirates.wav');
    if (flag){
        music2.pause();
        
    }
    else{
        music2.play();

    }
    
}
//----------ixos gia peirates ends here----------------


init();






btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice1 = Math.trunc(Math.random() * 6) + 1;
    let dice2 = Math.trunc(Math.random() * 6) + 1;
    let dice3 = Math.trunc(Math.random() * 6) + 1;

    console.log(`dice 1 : ${dice1} / dice 2 : ${dice2} / dice 3 : ${dice3} // sum = ${dice1+dice2}`);
    h3DiceScoreEl.textContent = dice1 + dice2;
    playMusic1();
        

    rollTheDice(dice1,dice2,dice3);
    diceHistory.push({ dice1, dice2, test });
    scorepiratesEl.textContent=pirate;

    
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked')
    diceHistory = [];
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
    historyListEl.innerHTML = '';
    flag=false;
    init();
});
btnHistoryEl.addEventListener('click', function(){
    console.log('btnHistory Clicked');
    popupOverlayEl.style.display = 'block';
    historyPopupEl.style.display = 'block';
    historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση

    diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
        let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
        // listItem.textContent = `Roll ${index + 1}: Dice 1 = ${entry.dice1}, Dice 2 = ${entry.dice2}, Dice 3 ${entry.test}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
        listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span> \u00A0\u00A0 <span style="color: blue;">${entry.test}</span>`;
        historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    
   // console.log(pirate);
    
    });
});

closePopupEl.addEventListener('click', function() {
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
});

popupOverlayEl.addEventListener('click', function() {
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
});


function rollTheDice(dice1, dice2,dice3){
    console.log('rollthedice function run successfully')
    document.querySelector('.container').style.backgroundColor='transparent';

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
            imgDice2El.src = '../images/dice-red-1.png';
            break;
        case 2:
            imgDice2El.src = '../images/dice-red-2.png';
            break;
        case 3:
            imgDice2El.src = '../images/dice-red-3.png';
            break;
        case 4:
            imgDice2El.src = '../images/dice-red-4.png';
            break;
        case 5:
            imgDice2El.src = '../images/dice-red-5.png';
            break;
        case 6:
            imgDice2El.src = '../images/dice-red-6.png';
            break;
    }

    if (dice3 === 1) {
        imgDice3El.src = '../images/yellow.png';
        test='yellow';


      } else if (dice3 === 2) {
        imgDice3El.src = '../images/green.png';
        test='green'

         
      } else if (dice3 === 3) {
        imgDice3El.src = '../images/blue.png';
        test='blue';


      } else if (dice3 === 4) {
        imgDice3El.src = '../images/pirate.png';
        test='pirate'
        pirate++

        
      } else if (dice3 === 5) {
        imgDice3El.src = '../images/pirate.png';
        test='pirate'
        pirate++

      } else {
        imgDice3El.src = '../images/pirate.png';
        test='pirate'
        pirate++

      } 
      if (pirate===7){
        playMusic2();
        //flag=0;
        init();
        // flag=0;
        // init();
        pirate=0;  //prepei na allaksei se synarthsh
        document.querySelector('.container').style.backgroundColor='red';

      }
      
}

function init(){
    console.log('init() function run successfully');
    h3DiceScoreEl.textContent = 'Ρίξε τα ζάρια';
    
    document.querySelector('.container').style.backgroundColor='transparent';
    scorepiratesEl.textContent=0;
    pirate=0;
    
    
    imgDice1El.src = '../images/dice-1.png';
    imgDice2El.src = '../images/dice-red-1.png';
    imgDice3El.src = "../images/pirate.png";
}