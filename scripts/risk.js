let btnSoundEl = document.querySelector('.play');

//Poso strato exei o kathenas starts here
let buttonok=document.querySelector('.btnok');
var input1 = document.getElementById("myInput1");
var input2 = document.getElementById("myInput2");
var inputValue1 = input1.value;
var inputValue2 = input2.value;
//Poso strato exei o kathenas ends here

let h3AttackArmyScoreEl = document.querySelector('.h3-attack-army-score');
let h3DefenseArmyScoreEl = document.querySelector('.h3-defense-army-score');
let h3AttackArmyEl=document.querySelector('.h3-attack-army');
let h3defencearmyEl=document.querySelector('.h3-defence-army');

let imgDiceEl = document.querySelector('.img-dice');
let imgDice2El = document.querySelector('.img-dice2');
let imgDice3El = document.querySelector('.img-dice3');
let imgDice4El = document.querySelector('.img-dice4');
let imgDice5El = document.querySelector('.img-dice5');

let btnRollDiceEl  = document.querySelector('.btn-roll-dice');
let btnClearEl  = document.querySelector('.btn-clear');

let btnHistoryEl = document.querySelector('.btn-history');
let historyListEl = document.querySelector('.history-list');
let popupOverlayEl = document.querySelector('.popup-overlay');
let historyPopupEl = document.querySelector('.popup');
let closePopupEl = document.querySelector('.close-btn');

let diceHistory = [];

var howManyDice = 5;
let flag=false;//flag = 1 symainei mute sound

let flagArmy=false; //simainei den dilwses strato ara de paizoun zaria




init();




//dilonoume poso strato exei o kathenas kai pairnoyme to value starts here
buttonok.addEventListener('click',function(){
    init();
    
    console.log(`flagArmy = ${flagArmy}`);
    input1 = document.getElementById("myInput1");
    inputValue1 = input1.value;
    console.log('input1', inputValue1);

    input2 = document.getElementById("myInput2");
    inputValue2 = input2.value;
    console.log('input2', inputValue2);

    if (inputValue1 != 0 && inputValue2 != 0){
        flagArmy=true;
        btnRollDiceEl.style.opacity = '1';


        if (inputValue1 >= 3){
            imgDiceEl.style.opacity = '1';
            imgDice2El.style.opacity = '1';
            imgDice3El.style.opacity = '1';
        } else if (inputValue1 == 2) {
            imgDiceEl.style.opacity = '1';
            imgDice2El.style.opacity = '1';
        } else if ( inputValue1 == 1){
            imgDiceEl.style.opacity = '1';
        } else if ( inputValue1 == 0 ){
            flagArmy = false;
            console.log("ERROR ARMY 1 CANNOT BE ZERO");
        }
    
    
        if (inputValue2 >= 2){
            imgDice4El.style.opacity = '1';
            imgDice5El.style.opacity = '1';
        } else if (inputValue2 == 1){
            imgDice4El.style.opacity = '1';
        } else if (inputValue2 == 0){
            flagArmy = false;
            console.log("ERROR ARMY 2 CANNOT BE ZERO");
        }

        h3AttackArmyScoreEl.textContent = inputValue1;
        h3DefenseArmyScoreEl.textContent = inputValue2;
    }


})
//dilonoume poso strato exei o kathenas kai pairnoyme to value ends here

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
    this.classList.toggle('muted');
    flag=!flag;
    console.log('sound pressed');})
//----------koumpi gia anoigma kleisimo ixou ends here--------




btnRollDiceEl.addEventListener('click', function(){
    console.log('btnRollDice Clicked');
    
    let dice1,dice2,dice3,dice4,dice5;

    if (flagArmy){
        playMusic1();
        if (inputValue1 >= 3){
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = Math.trunc(Math.random() * 6) + 1;
            dice3 = Math.trunc(Math.random() * 6) + 1;
        } else if (inputValue1 == 2){
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = Math.trunc(Math.random() * 6) + 1;
            dice3 = 0;
        } else if (inputValue1 == 1){
            dice1 = Math.trunc(Math.random() * 6) + 1;
            dice2 = 0;
            dice3 = 0;
        }
        
        if (inputValue2 >= 2){
            dice4 = Math.trunc(Math.random() * 6) + 1;
            dice5 = Math.trunc(Math.random() * 6) + 1;
        } else if (inputValue2 == 1) {
            dice4 = Math.trunc(Math.random() * 6) + 1;
            dice5 = 0;
        }
        

        rollTheDice(dice1,dice2,dice3,dice4,dice5);
        diceHistory.push({ dice1, dice2,dice3,dice4,dice5 });
    } else {
        console.log('ERROR! Δηλωσε τη δυναμη του στρατου σου')
    }
    
});

//btnHistoryEl.addEventListener('click', function(){
//    console.log('btnHistory Clicked');
    // popupOverlayEl.style.display = 'block';
    // historyPopupEl.style.display = 'block';
    // historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση
    // switch (howManyDice){
    //     case 1:
    //         diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
    //             let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
    //             //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
    //             listItem.innerHTML = `Roll ${index + 1}:\u00A0<span style="color: blue;">${entry.dice1}</span>`;
    //             historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    //         });
    //         break;
    //     case 2:
    //         diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
    //             let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
    //             //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
    //             listItem.innerHTML = `Roll ${index + 1}:\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span>\u00A0\u00A0Sum: <span style="color: blue;">${entry.sum}</span>`;
    //             historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    //         });
    //         break;
    //     case 3:
    //         diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
    //             let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
    //             //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
    //             listItem.innerHTML = `Roll ${index + 1}:\u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice3}</span>\u00A0\u00A0Sum: <span style="color: blue;">${entry.sum}</span>`;
    //             historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    //         });
    //         break;
    //     case 4:
    //         diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
    //             let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
    //             //listItem.textContent = `Roll ${index + 1}: \u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0\u00A0\u00A0${entry.dice2} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 Sum: ${entry.sum}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
    //             listItem.innerHTML = `Roll ${index + 1}:\u00A0\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice3}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice4}</span>\u00A0\u00A0Sum: <span style="color: blue;">${entry.sum}</span>`;
    //             historyListEl.appendChild(listItem); //με τη μέθοδο appendChild, προσθέτει το νέο στοιχείο της λίστας στο γονικό, δλδ στο ιστορικό που έχει δημιουργηθεί
    //         });
    //         break;
    // }
    
//});
btnHistoryEl.addEventListener('click', function(){
    console.log('btnHistory Clicked');
    popupOverlayEl.style.display = 'block';
    historyPopupEl.style.display = 'block';
    historyListEl.innerHTML = ''; // Καθαρισμός της λίστας πριν την ενημέρωση

    diceHistory.forEach((entry, index) => {// κάθε νέα είσοδος (entry) μπαίνει στη λίστα του ιστορικού (diceHistory)
        let listItem = document.createElement('li');//δημιουργείται νέο στοιχείο για τη λίστα
        // listItem.textContent = `Roll ${index + 1}: Dice 1 = ${entry.dice1}, Dice 2 = ${entry.dice2}, Dice 3 ${entry.test}`;//δημιουργεί το περιεχομένο του στοιχείου της λίστας βάσει της εκάστοτε ρίψης
        listItem.innerHTML = `Roll ${index + 1}:\u00A0<span style="color: blue;">${entry.dice1}</span>\u00A0\u00A0<span style="color: blue;">${entry.dice2}</span> \u00A0<span style="color: blue;">${entry.dice3}</span>\u00A0\u00A0Sum: <span style="color: blue;">${entry.dice4}</span></span>\u00A0\u00A0Sum: <span style="color: blue;">${entry.dice5}</span>`;
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

btnClearEl.addEventListener('click', function(){
    input1.value=0;
    input2.value=0;
    h3AttackArmyScoreEl.textContent = 0;
    h3DefenseArmyScoreEl.textContent=0;
    console.log('btn clear clicked')
    howManyDice=5;
    diceHistory = [];
    popupOverlayEl.style.display = 'none';
    historyPopupEl.style.display = 'none';
    historyListEl.innerHTML = '';
    

    

    init();
});


function rollTheDice(dice1,dice2,dice3,dice4,dice5){
    console.log('rollthedice function run successfully')
    console.log(`inputValue1: ${inputValue1}  inputValue2: ${inputValue2}`)

    if (inputValue1 >= 3){
        switch (dice1){
            
            case 1:
                imgDiceEl.src = '../images/dice-red-1.png';
                break;
            case 2:
                imgDiceEl.src = '../images/dice-red-2.png';
                break;
            case 3:
                imgDiceEl.src = '../images/dice-red-3.png';
                break;
            case 4:
                imgDiceEl.src = '../images/dice-red-4.png';
                break;
            case 5:
                imgDiceEl.src = '../images/dice-red-5.png';
                break;
            case 6:
                imgDiceEl.src = '../images/dice-red-6.png';
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
        switch (dice3){
            
            case 1:
                imgDice3El.src = '../images/dice-red-1.png';
                break;
            case 2:
                imgDice3El.src = '../images/dice-red-2.png';
                break;
            case 3:
                imgDice3El.src = '../images/dice-red-3.png';
                break;
            case 4:
                imgDice3El.src = '../images/dice-red-4.png';
                break;
            case 5:
                imgDice3El.src = '../images/dice-red-5.png';
                break;
            case 6:
                imgDice3El.src = '../images/dice-red-6.png';
                break;
        }


    }else if (inputValue1 == 2) {
        switch (dice1){
            case 1:
                imgDiceEl.src = '../images/dice-red-1.png';
                break;
            case 2:
                imgDiceEl.src = '../images/dice-red-2.png';
                break;
            case 3:
                imgDiceEl.src = '../images/dice-red-3.png';
                break;
            case 4:
                imgDiceEl.src = '../images/dice-red-4.png';
                break;
            case 5:
                imgDiceEl.src = '../images/dice-red-5.png';
                break;
            case 6:
                imgDiceEl.src = '../images/dice-red-6.png';
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

    } else if (inputValue1 == 1){
        switch (dice1){
            case 1:
                imgDiceEl.src = '../images/dice-red-1.png';
                break;
            case 2:
                imgDiceEl.src = '../images/dice-red-2.png';
                break;
            case 3:
                imgDiceEl.src = '../images/dice-red-3.png';
                break;
            case 4:
                imgDiceEl.src = '../images/dice-red-4.png';
                break;
            case 5:
                imgDiceEl.src = '../images/dice-red-5.png';
                break;
            case 6:
                imgDiceEl.src = '../images/dice-red-6.png';
                break;
        }

    }

    if (inputValue2 >= 2){
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
        switch (dice5){
            case 1:
                imgDice5El.src = '../images/dice-1.png';
                break;
            case 2:
                imgDice5El.src = '../images/dice-2.png';
                break;
            case 3:
                imgDice5El.src = '../images/dice-3.png';
                break;
            case 4:
                imgDice5El.src = '../images/dice-4.png';
                break;
            case 5:
                imgDice5El.src = '../images/dice-5.png';
                break;
            case 6:
                imgDice5El.src = '../images/dice-6.png';
                break;
        }

    }else if (inputValue2 == 1){
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

    }
            
    console.log(`zaria pou irthane: ${dice1} ,${dice2}, ${dice3}, ${dice4}, ${dice5}`)
    battle(dice1, dice2, dice3, dice4, dice5);

}

function battle(dice1, dice2, dice3, dice4, dice5){
    console.log(`function battle() run successfully`);
    let max1Player1; //to prwto megalitero zari tis epithesis
    let max2Player1; //to deytero megalitero zari tis epithesis

    let max1Player2; //to prwto megalitero zari tis aminas
    let max2Player2; //to deytero megalitero zari tis aminas

    if(dice1>=dice2 && dice1>=dice3){
        max1Player1 = dice1;
        imgDiceEl.style.width = '20%';
        imgDice2El.style.width = '15%';
        imgDice3El.style.width = '15%';

        if(dice2>=dice3){
            max2Player1 = dice2;
            imgDice2El.style.width = '17%';
        } else {
            max2Player1 = dice3;
            imgDice3El.style.width = '17%';
        }
    } else if (dice2>=dice1 && dice2>=dice3){
        max1Player1 = dice2;
        imgDice2El.style.width = '20%';
        imgDiceEl.style.width = '15%';
        imgDice3El.style.width = '15%';
        if(dice1>=dice3){
            max2Player1 = dice1;
            imgDiceEl.style.width = '17%';
        } else {
            max2Player1 = dice3;
            imgDice3El.style.width = '17%';
        }
    } else {
        max1Player1 = dice3;
        imgDice2El.style.width = '15%';
        imgDiceEl.style.width = '15%';
        imgDice3El.style.width = '20%';
        if(dice1>=dice2){
            max2Player1 = dice1;
            imgDiceEl.style.width = '17%';
        } else {
            max2Player1 = dice2;
            imgDice2El.style.width = '17%';
        }
    }
    console.log(`ta megalytera zaria epithesis einai ${max1Player1} kai ${max2Player1}`);
        

    if(dice4>=dice5){
        max1Player2 = dice4;
        max2Player2 = dice5;
       
    } else{
        max1Player2 = dice5;
        max2Player2 = dice4;
    }
    console.log(`ta megalytera zaria aminas einai ${max1Player2} kai ${max2Player2}`);
    
    compareAndKillSholdiers(max1Player1,max2Player1,max1Player2,max2Player2);
}

function compareAndKillSholdiers(max1Player1,max2Player1,max1Player2,max2Player2){
    if (max1Player1 >= max1Player2){
        inputValue2 = inputValue2 - 1;
        
        h3DefenseArmyScoreEl.textContent = inputValue2;
    } else {
        inputValue1 = inputValue1 - 1;
        h3AttackArmyScoreEl.textContent = inputValue1;
       
    }

    if (max2Player1 >= max2Player2){
        inputValue2 = inputValue2 - 1;
        
        h3DefenseArmyScoreEl.textContent = inputValue2;
    } else {
        inputValue1 = inputValue1 - 1;
        h3AttackArmyScoreEl.textContent = inputValue1;
        
    }
    if(inputValue1<=0 || inputValue2<=0){
       // btnRollDiceEl.style.opacity = '0.2';
        //console.log('telos');
        if (inputValue1<=0){
            imgDiceEl.style.opacity = '0.2';
            imgDice2El.style.opacity = '0.2';
            imgDice3El.style.opacity = '0.2';
            h3AttackArmyScoreEl.style.display = 'unset';
            h3defencearmyEl.textContent='Νικητής! Στρατός Αμυνόμενου:';
            h3AttackArmyEl.textContent='Χαμένος :( Στρατός Επιτιθέμενου:';
            input1.value=0;
            input2.value=0;

        }
        else if(inputValue2<=0){
            imgDice4El.style.opacity = '0.2';
            imgDice5El.style.opacity = '0.2';
            h3DefenseArmyScoreEl.style.display = 'unset';
            h3AttackArmyEl.textContent='Στρατός Επιτιθέμενου:';
            h3defencearmyEl.textContent='Χαμένος:';
            input1.value=0;
            input2.value=0;

        }
        
    
        btnRollDiceEl.style.opacity = '0.2';
        flagArmy = false;
        
        if(inputValue1<=0){
            h3AttackArmyScoreEl.textContent = 0;

        }
        else if(inputValue2<=0){
            h3DefenseArmyScoreEl.textContent = 0;


        } 
    } 
  //  else if(inputValue1==2){
    //    imgDice3El.style.opacity = '0.2';
      //  }
        
    
    else if(inputValue1==2){
        imgDice3El.style.opacity = '0.2';
    }
    else if(inputValue1==1){
        imgDice2El.style.opacity = '0.2';
        imgDice3El.style.opacity = '0.2';
    }
    else if(inputValue2==1){
        imgDice5El.style.opacity = '0.2';

    }
}

function init(){
    console.log('init() function run successfully');
    // h3DiceScoreEl.textContent = 'Ρίξε το ζάρι';

    imgDice2El.style.width = '15%';
    imgDiceEl.style.width = '15%';
    imgDice3El.style.width = '15%';

    imgDiceEl.style.opacity = '0.2';
    imgDice2El.style.opacity = '0.2';
    imgDice3El.style.opacity = '0.2';
    imgDice4El.style.opacity = '0.2';
    imgDice5El.style.opacity = '0.2';

    btnRollDiceEl.style.opacity = '0.2';

    imgDiceEl.src = "../images/dice-red-1.png";
    imgDice2El.src = "../images/dice-red-1.png";
    imgDice3El.src = "../images/dice-red-1.png";
    imgDice4El.src = "../images/dice-1.png";
    imgDice5El.src = "../images/dice-1.png";

    h3defencearmyEl.textContent='Στρατός Αμυνόμενου:'
    h3AttackArmyEl.textContent='Στρατός Επιτιθέμενου:'
    
    


    diceHistory = [];

    /*ο κώδικας για το burger menu αρχίζει εδώ*/

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navContainer = document.querySelector('.nav-container');

    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        navContainer.classList.toggle('active'); 
    });

    document.addEventListener('click', function (e) {
        if (!navContainer.contains(e.target) && !burger.contains(e.target)) {
            navContainer.classList.remove('active');
        }
    });
});

/*ο κώδικας για το burger menu τελειώνει εδώ*/

    
    // flag = false;
    const soundButton = document.getElementById('soundButton');
    // soundButton.classList.remove('muted'); 
    
    
}
