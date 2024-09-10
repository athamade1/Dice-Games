// let h3PointsEl = document.querySelector('.h3-dice-points');
// let imgDice1El = document.querySelector('.img-dice-1');
// let imgDice2El = document.querySelector('.img-dice-2');
// let btnRollDiceEl = document.querySelector('.btn-roll-the-dice');
// let btnClearEl = document.querySelector('.btn-clear');


// init();












// function init(){
//   h3PointsEl.textContent = 1;
//   imgDice1El.src = 'images/dice-1.png';
//   imgDice2El.src = 'images/dice-red-1.png';
// }


// btnRollDiceEl.addEventListener('click', function(){
//   let dice1Number = Math.trunc(Math.random() * 6) + 1;
//   let dice2Number = Math.trunc(Math.random() * 6) + 1;

//   h3PointsEl.textContent = dice1Number + dice2Number;

//   console.log(`button clicked: dice1 number: ${dice1Number}`);
//   console.log(`button clicked: dice2 number: ${dice2Number}`);

//   switch (dice1Number){
//     case 1:
//       imgDice1El.src = 'images/dice-1.png';
//       break;
//     case 2:
//       imgDice1El.src = 'images/dice-2.png';
//       break;
//     case 3:
//       imgDice1El.src = 'images/dice-3.png';
//       break;
//     case 4:
//       imgDice1El.src = 'images/dice-4.png';
//       break;
//     case 5:
//       imgDice1El.src = 'images/dice-5.png';
//       break;
//     case 6:
//       imgDice1El.src = 'images/dice-6.png';
//       break;
//   }

//   switch (dice2Number){
//     case 1:
//       imgDice2El.src = 'images/dice-red-1.png';
//       break;
//     case 2:
//       imgDice2El.src = 'images/dice-red-2.png';
//       break;
//     case 3:
//       imgDice2El.src = 'images/dice-red-3.png';
//       break;
//     case 4:
//       imgDice2El.src = 'images/dice-red-4.png';
//       break;
//     case 5:
//       imgDice2El.src = 'images/dice-red-5.png';
//       break;
//     case 6:
//       imgDice2El.src = 'images/dice-red-6.png';
//       break;
//   }

// });



// btnClearEl.addEventListener('click', init());


// // btnClearEl.addEventListener('click', function(){
// //   console.log('clear button clicked');
// //   init();
// // });


/*ο κώδικας για το burger menu ξεκινάει εδώ*/
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
