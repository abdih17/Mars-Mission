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
  login.addEventListener('click', getUserLogin);
}


var q1ImgContainer = document.getElementById('q1ImgContainer');
var button = document.getElementById('button');

function displayQuestion() {
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    currentQuestion += 1;
  } else if (currentQuestion === 1) {
    q1ImgContainer.addEventListener('click', handleImgClick);
    q0.removeAttribute('style');
    q1.setAttribute('style', 'display:block');
    console.log('Question 1');
  } else if (currentQuestion === 2) {
    q1ImgContainer.removeEventListener('click', handleImgClick);
    q1.removeAttribute('style');
    q2.setAttribute('style', 'display:block');
    submitQ2.addEventListener('click', validateCode);
  } else if (currentQuestion === 3) {
    submitQ2.removeEventListener('click', validateCode);
    q2.removeAttribute('style');
    q3.setAttribute('style', 'display:block');
    displayWaterFilter();
    submitQ3.addEventListener('submit', validateFilterOrder);
  } else if (currentQuestion === 4) {
    submitQ3.removeEventListener('submit', validateFilterOrder);
    q3.removeAttribute('style');
    q4.setAttribute('style', 'display:block');
  } else if (currentQuestion === 5) {
    q4.removeAttribute('style');
    q5.setAttribute('style', 'display:block');
  } else if (currentQuestion === 6) {
    q5.removeAttribute('style');
    q6.setAttribute('style', 'display:block');
  } else if (currentQuestion === 7) {
    q6.removeAttribute('style');
    q7.setAttribute('style', 'display:block');
  } else if (currentQuestion === 8) {
    q7.removeAttribute('style');
    q8.setAttribute('style', 'display:block');
  } else if (currentQuestion === 9) {
    q8.removeAttribute('style');
    q9.setAttribute('style', 'display:block');
  } else if (currentQuestion === 10) {
    q9.removeAttribute('style');
    q10.setAttribute('style', 'display:block');
  } else if (currentQuestion === 11) {
    q10.removeAttribute('style');
    q11.setAttribute('style', 'display:block');
  } else if (currentQuestion === 12) {
    q11.removeAttribute('style');
    q12.setAttribute('style', 'display:block');
  } else if (currentQuestion === 13) {
    q12.removeAttribute('style');
    q13.setAttribute('style', 'display:block');
  } else if (currentQuestion === 14) {
    q0.removeAttribute('style');
    q1.removeAttribute('style');
    q2.removeAttribute('style');
    q3.removeAttribute('style');
    q4.removeAttribute('style');
    q5.removeAttribute('style');
    q6.removeAttribute('style');
    q7.removeAttribute('style');
    q8.removeAttribute('style');
    q9.removeAttribute('style');
    q10.removeAttribute('style');
    q11.removeAttribute('style');
    q12.removeAttribute('style');
    q13.removeAttribute('style');
    q14.setAttribute('style', 'display:block');
  }
}

// Question 0 JS

// Question 1 JS
function handleImgClick(event) {
  if (event.target.id === 'leftImg1') {
    playerDies();
  } else if (event.target.id === 'rightImg1') {
    // Fix your wound
    players[0].oxygen -= 1;
    players[0].water -= 1;
    currentQuestion += 1;
    displayQuestion();
    console.log('You fix your wound.');
  } else if (event.target.id === 'centerImg1') {
    // Crawl to base
    players[0].oxygen += 1;
    players[0].water += 1;
    currentQuestion += 1;
    displayQuestion();
    console.log('You crawl.');
  } else {
    console.log('you need to click on an image');
  }
}


// Question 2 JS
var submitQ2 = document.getElementById('submitQ2');
function validateCode(event){
  event.preventDefault();
  var code = codeInput.securityCode.value;
  console.log(code);
  if( code === '1234'){
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    displayQuestion();
  } else if(players[0].oxygen === 0){
    console.log('You died');
    playerDies();
  } else {
    console.log('this is wrong');
    players[0].oxygen -= 1;
    players[0].water -= 1;
    return;
  }
}

// Question 3 JS
function displayWaterFilter () {
  var images = document.getElementById('water_filter');
  images.setAttribute('style', 'display:block');
  setTimeout(function() {
    var question = document.getElementById('water_filter_order');
    images.removeAttribute('style');
    question.setAttribute('style', 'display:block');
  }, 500);
}
var submitQ3 = document.getElementById('water_filter_answer');
function validateFilterOrder () {
  event.preventDefault();
  var filter = parseInt(event.target.filter.value);
  var converter = parseInt(event.target.converter.value);
  var holdingTank = parseInt(event.target.holding_tank.value);
  if (filter === 1 && converter === 2 && holdingTank === 3) {
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    displayQuestion();
  } else {
    playerDies();
  }
}
// Question 4 JS


// Question 5 JS


// Question 6 JS
var getQ6Img = document.getElementById('q6Imgs');

function handleQuestionSixClicks(event){
console.log('start of function');
  if (event.target.id === 'centerImg'){
    console.log('centerImg');
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    displayQuestion();
    console.log('centerImg');
  }

  if (event.target.id === 'leftImg'){
    playerDies();
  }

  if (event.target.id === 'rightImg'){
    playerDies();
  }
}

getQ6Img.addEventListener('click', handleQuestionSixClicks);

// Question 7 JS


// Question 8 JS


// Question 9 JS


// Question 10 JS


// Question 11 JS


// Question 12 JS


// Question 13 JS



function playerDies () {
  currentQuestion = 14;
  players[0].oxygen = 0;
  players[0].water = 0;
  displayQuestion();
}
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

/*************
Execute Actions
*************/
// Q1 Event Listener (which image clicked)

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};



button.addEventListener('click', displayQuestion);
