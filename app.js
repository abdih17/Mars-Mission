'use strict';

/*************
DATA Declarations
*************/
var players = [];
var currentQuestion = 0;
function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  this.question = 0;
  players.push(this);
};

/*************
Define Actions
*************/
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
  // login.addEventListener('click', getUserLogin);
}

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};

var button = document.getElementById('button');

function displayQuestion() {
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    currentQuestion +=1;
  } else if (currentQuestion === 1) {
    q0.removeAttribute('style');
    q1.setAttribute('style', 'display:block');
    currentQuestion +=1;
  } else if (currentQuestion === 2) {

  } else if (currentQuestion === 3) {

  } else if (currentQuestion === 4) {

  } else if (currentQuestion === 5) {

  } else if (currentQuestion === 6) {

  } else if (currentQuestion === 7) {

  } else if (currentQuestion === 8) {

  } else if (currentQuestion === 9) {

  } else if (currentQuestion === 10) {

  } else if (currentQuestion === 11) {

  } else if (currentQuestion === 12) {

  } else if (currentQuestion === 13) {

  } else if (currentQuestion === 14) {

  } else if (currentQuestion === 15) {

  } else if (currentQuestion === 16) {

  }
}

button.addEventListener('click', displayQuestion);

//Event question 1


//Event question 2


//life source = incrementing and decrementing oxygen/health level
// var lifeSource = 0; //decide on a number to start with.

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

// // Q1 Event Handler
// function handleImgClick(event) {
//   if (event.target.class === 'leftImg') {
//     console.log('left image clicked');
//   } else if (event.target.class === 'rightImg') {
//     console.log('right image clicked');
//   } else if (event.target.class === 'centerImg') {
//     console.log('center image clicked');
//   } else {
//     console.log('you need to click on an image');
//   }
// }

/*************
Execute Actions
*************/
// Q1 Event Listener (which image clicked)
// q1ImgContainer.addEventListener('click', handleImgClick);
