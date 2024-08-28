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

let btnHistoryEl = document.querySelector('.btn-history');
let historyListEl = document.querySelector('.history-list');
let popupOverlayEl = document.querySelector('.popup-overlay');
let historyPopupEl = document.querySelector('.popup');
let closePopupEl = document.querySelector('.close-btn');

let diceHistory = [];

var howManyDice = 1;




init();










btn1DiceEl.addEventListener('click', function(){
    howManyDice=1;
    btn1DiceEl.style.backgroundColor = "aqua"; // Αλλαγή του φόντου σε μπλε
    btn2DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn3DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn4DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn2DiceEl.addEventListener('click', function(){
    howManyDice=2;
    btn1DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn2DiceEl.style.backgroundColor = "aqua"; // Αλλαγή του φόντου σε μπλε
    btn3DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn4DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn3DiceEl.addEventListener('click', function(){
    howManyDice=3;
    btn1DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn2DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn3DiceEl.style.backgroundColor = "aqua"; // Αλλαγή του φόντου σε μπλε
    btn4DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    console.log(`clicked ${howManyDice} plays`);
    init()
})
btn4DiceEl.addEventListener('click', function(){
    howManyDice=4;
    btn1DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn2DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn3DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn4DiceEl.style.backgroundColor = "aqua"; // Αλλαγή του φόντου σε μπλε
    console.log(`clicked ${howManyDice} plays`);
    init()
})

btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    let dice1,dice2,dice3,dice4;
    switch(howManyDice){
        case 1:
            dice1 = Math.trunc(Math.random() * 6) + 1;
            // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
            diceHistory.push({dice1});
            console.log(`${howManyDice} dice: ${dice1}`);
            break;
        case 2:
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = Math.trunc(Math.random() * 6) + 1;
            // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
            diceHistory.push({ dice1, dice2, sum: dice1 + dice2 });
            console.log(`${howManyDice} dice: ${dice1} ${dice2}`);
            break;
        case 3:
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = Math.trunc(Math.random() * 6) + 1;
            dice3 = Math.trunc(Math.random() * 6) + 1;
            // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
            diceHistory.push({ dice1, dice2, dice3 , sum: dice1 + dice2 + dice3 });
            console.log(`${howManyDice} dice: ${dice1} ${dice2} ${dice3}`);
            break;
        case 4:
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = Math.trunc(Math.random() * 6) + 1;
            dice3 = Math.trunc(Math.random() * 6) + 1;
            dice4 = Math.trunc(Math.random() * 6) + 1;
            // Αποθηκεύει τα αποτελέσματα των ζαριών της εκάστοτε ρίψης στον πίνακα
            diceHistory.push({ dice1, dice2, dice3 , dice4 , sum: dice1 + dice2 + dice3 + dice4 });
            console.log(`${howManyDice} dice: ${dice1} ${dice2} ${dice3} ${dice4}`);
            break;
    }
    
    switch (howManyDice){
        case 1:
            h3DiceScoreEl.textContent = dice1;
            break;
        case 2:
            h3DiceScoreEl.textContent = dice1 + dice2;
            break;
        case 3:
            h3DiceScoreEl.textContent = dice1 + dice2 + dice3;
            break;
        case 4:
            h3DiceScoreEl.textContent = dice1 + dice2 + dice3 + dice4;
            break;
    }
    

    rollTheDice(dice1,dice2,dice3,dice4);
    
});

btnHistoryEl.addEventListener('click', function(){
    console.log('btnHistory Clicked');
    popupOverlayEl.style.display = 'block';
    historyPopupEl.style.display = 'block';
    historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση
    switch (howManyDice){
        case 1:
            diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
                let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
                //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
                listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>`;
                historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
            });
            break;
        case 2:
            diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
                let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
                //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
                listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span> \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: <span style="color: blue;">${entry.sum}</span>`;
                historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
            });
            break;
        case 3:
            diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
                let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
                //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
                listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice3}</span> \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: <span style="color: blue;">${entry.sum}</span>`;
                historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
            });
            break;
        case 4:
            diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
                let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
                //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
                listItem.innerHTML = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice3}</span>\u00A0\u00A0\u00A0\u00A0<span style="color: blue;">${entry.dice4}</span> \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: <span style="color: blue;">${entry.sum}</span>`;
                historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
            });
            break;
    }
    
});

closePopupEl.addEventListener('click', function() {
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
});

popupOverlayEl.addEventListener('click', function() {
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
});

btnClearEl.addEventListener('click', function(){
    console.log('btn clear clicked')
    howManyDice=1;
    btn1DiceEl.style.backgroundColor = "aqua"; // Αλλαγή του φόντου σε μπλε
    btn2DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn3DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    btn4DiceEl.style.backgroundColor = "white"; // Αλλαγή του φόντου σε μπλε
    diceHistory = [];
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
    historyListEl.innerHTML = '';
    init();
});


function rollTheDice(dice1,dice2,dice3,dice4){
    console.log('rollthedice function run successfully')

    switch(howManyDice){
        case 1:
            switch (dice1){
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
            break;
        case 2:
            switch (dice1){
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
            break;
        case 3:
            switch (dice1){
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
            switch (dice3){
                case 1:
                    imgDice3El.src = '../images/dice-1.png';
                    break;
                case 2:
                    imgDice3El.src = '../images/dice-2.png';
                    break;
                case 3:
                    imgDice3El.src = '../images/dice-3.png';
                    break;
                case 4:
                    imgDice3El.src = '../images/dice-4.png';
                    break;
                case 5:
                    imgDice3El.src = '../images/dice-5.png';
                    break;
                case 6:
                    imgDice3El.src = '../images/dice-6.png';
                    break;
            }
            break;
        case 4:
            switch (dice1){
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
            switch (dice3){
                case 1:
                    imgDice3El.src = '../images/dice-1.png';
                    break;
                case 2:
                    imgDice3El.src = '../images/dice-2.png';
                    break;
                case 3:
                    imgDice3El.src = '../images/dice-3.png';
                    break;
                case 4:
                    imgDice3El.src = '../images/dice-4.png';
                    break;
                case 5:
                    imgDice3El.src = '../images/dice-5.png';
                    break;
                case 6:
                    imgDice3El.src = '../images/dice-6.png';
                    break;
            }
            switch (dice4){
                case 1:
                    imgDice4El.src = '../images/dice-1.png';
                    break;
                case 2:
                    imgDice4El.src = '../images/dice-2.png';
                    break;
                case 3:
                    imgDice4El.src = '../images/dice-3.png';
                    break;
                case 4:
                    imgDice4El.src = '../images/dice-4.png';
                    break;
                case 5:
                    imgDice4El.src = '../images/dice-5.png';
                    break;
                case 6:
                    imgDice4El.src = '../images/dice-6.png';
                    break;
            }
            break;
    }


}


function init(){
    console.log('init() function run successfully');
    h3DiceScoreEl.textContent = 'Ρίξε το ζάρι';
    diceHistory = [];
    
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