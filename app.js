'use strict';
var players = [];
function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  this.question = 0;
  players.push(this);
};

// check and load local storage
if (localStorage.getItem('playersData')){
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
} else {
//event listener for player login
  var login = document.getElementById('submit_login');

  function getUserLogin(){
    var player = createUser.username.value;
    var password = createUser.password.value;
    new Player (player,password);
    setLocalStorage();
  }

  login.addEventListener('click', getUserLogin);
}

// Q2 Event Handler
function handleImgClick(event) {
  if (event.target.id === 'leftImg2') {
    console.log('left image clicked');
  } else if (event.target.id === 'rightImg2') {
    console.log('right image clicked');
  } else if (event.target.id === 'centerImg2') {
    console.log('center image clicked');
  } else {
    console.log('you need to click on an image');
  }
}

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
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

var lifeSource = 0; //decide on a number to start with.

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

// Q1 Event Listener (which image clicked)
q2ImgContainer.addEventListener('click', handleImgClick);
