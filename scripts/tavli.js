let h3DiceScoreEl = document.querySelector('.h3-dice-score');
let imgDice1El  = document.querySelector('.img-dice-1');
let imgDice2El  = document.querySelector('.img-dice-2');
let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');

let btnHistoryEl = document.querySelector('.btn-history');
let historyListEl = document.querySelector('.history-list');
let popupOverlayEl = document.querySelector('.popup-overlay');
let historyPopupEl = document.querySelector('.popup');
let closePopupEl = document.querySelector('.close-btn');

let diceHistory = [];


init();






btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice1 = Math.trunc(Math.random() * 6) + 1;
    let dice2 = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice 1 : ${dice1} / dice 2 : ${dice2} // sum = ${dice1+dice2}`);
    h3DiceScoreEl.textContent = dice1 + dice2;

    // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
    diceHistory.push({ dice1, dice2, sum: dice1 + dice2 });

    rollTheDice(dice1,dice2);
    
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked');
    diceHistory = [];
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
    historyListEl.innerHTML = '';
    init();
});

btnHistoryEl.addEventListener('click', function(){
    console.log('btnHistory Clicked');
    popupOverlayEl.style.display = 'block';
    historyPopupEl.style.display = 'block';
    historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση

    diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
        let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
        //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
        listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span> \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: <span style="color: blue;">${entry.sum}</span>`;
        historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
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




function rollTheDice(dice1, dice2){
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

}

function init(){
    console.log('init() function run successfully');
    h3DiceScoreEl.textContent = 'Ρίξε τα ζάρια';
    imgDice1El.src = '../images/dice-1.png';
    imgDice2El.src = '../images/dice-1.png';
}