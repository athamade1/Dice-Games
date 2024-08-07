let h3DiceScore2zariaEl = document.querySelector('.h3-dice-score-2zaria');
let imgDice12zariaEl  = document.querySelector('.img-dice-1-2zaria');
let imgDice22zariaEl  = document.querySelector('.img-dice-2-2zaria');
let btnRollDice2zariaEl  = document.querySelector('.btn-roll-dice-2zaria');
let btnClear2zariaEl  = document.querySelector('.btn-clear-2zaria');

let btnHistoryEl = document.querySelector('.btn-history');
let historyContainerEl = document.querySelector('.history-container');
let historyListEl = document.querySelector('.history-list');

let diceHistory = [];


init();






btnRollDice2zariaEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice1 = Math.trunc(Math.random() * 6) + 1;
    let dice2 = Math.trunc(Math.random() * 6) + 1;
    console.log(`dice 1 : ${dice1} / dice 2 : ${dice2} // sum = ${dice1+dice2}`);
    h3DiceScore2zariaEl.textContent = dice1 + dice2;

    // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
    diceHistory.push({ dice1, dice2, sum: dice1 + dice2 });

    rollTheDice(dice1,dice2);
    
});

btnClear2zariaEl.addEventListener('click', function(){
    console.log('btn clear clicked');
    diceHistory = [];
    historyContainerEl.style.display = 'none';
    historyListEl.innerHTML = '';
    init();
});

btnHistoryEl.addEventListener('click', function(){
    console.log('btnHistory Clicked');
    historyContainerEl.style.display = 'block';
    historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση

    diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
        let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
        listItem.textContent = `Roll ${index + 1}: Dice 1 = ${entry.dice1}, Dice 2 = ${entry.dice2}, Sum = ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
        historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    });
});


function rollTheDice(dice1, dice2){
    console.log('rollthedice function run successfully')
    switch (dice1){
        case 1:
            imgDice12zariaEl.src = '../images/dice-1.png';
            break;
        case 2:
            imgDice12zariaEl.src = '../images/dice-2.png';
            break;
        case 3:
            imgDice12zariaEl.src = '../images/dice-3.png';
            break;
        case 4:
            imgDice12zariaEl.src = '../images/dice-4.png';
            break;
        case 5:
            imgDice12zariaEl.src = '../images/dice-5.png';
            break;
        case 6:
            imgDice12zariaEl.src = '../images/dice-6.png';
            break;
    }

    switch (dice2){
        case 1:
            imgDice22zariaEl.src = '../images/dice-red-1.png';
            break;
        case 2:
            imgDice22zariaEl.src = '../images/dice-red-2.png';
            break;
        case 3:
            imgDice22zariaEl.src = '../images/dice-red-3.png';
            break;
        case 4:
            imgDice22zariaEl.src = '../images/dice-red-4.png';
            break;
        case 5:
            imgDice22zariaEl.src = '../images/dice-red-5.png';
            break;
        case 6:
            imgDice22zariaEl.src = '../images/dice-red-6.png';
            break;
    }

}

function init(){
    console.log('init() function run successfully');
    h3DiceScore2zariaEl.textContent = 'Ρίξε τα ζάρια';
    imgDice12zariaEl.src = '../images/dice-1.png';
    imgDice22zariaEl.src = '../images/dice-red-1.png';
}
