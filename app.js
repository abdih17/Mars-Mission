'use strict';

// check local storage

var players = [];

// check and load local storage
if (localStorage.getItem('playerData')){
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
} else {
/************************
Handle user input
*************************/
  var login = document.getElementById('createUser');
  function getUserLogin(event){
    event.preventDefault();
    var player = event.target.username.value;
    var password = event.target.password.value;
    new Player (player,password);
  };
  login.addEventListener('submit', getUserLogin);
};

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
  return;
};
setLocalStorage();


function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  this.question = 0;
  players.push(this);
};


// function check(form){
//   if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
//   { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
//   } else {
//     alert('Please sign-in using the correct username and password.'); //or another message?
//   }
// };

// check();

//add create an account

//life source = incrementing and decrementing oxygen/health level

var lifeSource = 0 //decide on a number to start with.

//function drawScore(score) {
//    ctx.font = "16px Teko";
//    ctx.fillStyle = "#0095DD";
//    ctx.fillText('Score: ' + score);
//}

//need a for loop for each question
// if (userAnswer === correctAnswer){
//   lifeSource += 1;
//   console.log(lifeSource);
// } else {
//   lifeSource -= 1;
//   console.log(lifeSource);
// }
//drawScore(lifeSource);
