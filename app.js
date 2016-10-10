'use strict';

var players = [];

function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  players.push(this);
};

// function check(form){
//   if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
//   { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
//   } else {
//     alert('Please sign-in using the correct username and password.'); //or another message?
//   }
// };


new Player('Jonny', '1234', 'Mark');

//add create an account

//life source = incrementing and decrementing oxygen/health level

var lifeSource = 0 //decide on a number to start with.

function drawScore(score) {
    ctx.font = "16px Teko";
    ctx.fillStyle = "#0095DD";
    ctx.fillText('Score: ' + score);
}

//need a for loop for each question
if (userAnswer === correctAnswer){
  lifeSource += 1;
  console.log(lifeSource);
  break;
} else {
  lifeSource -= 1;
  console.log(lifeSource);
  break;
}
drawScore(lifeSource);
