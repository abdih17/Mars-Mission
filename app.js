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


var login = document.getElementById('submit_login');
var video = document.getElementById('video1');
var q1ImgContainer = document.getElementById('q1ImgContainer');
var submitQ2 = document.getElementById('submitQ2');
var submitQ3 = document.getElementById('water_filter_answer');
var submit04 = document.getElementById('growPotatoes');
var potatoFarm = document.getElementById('potatoFarm');
var getQ6Img = document.getElementById('q6Imgs');
var submitQ7 = document.getElementById('communication_device_fix');
var q8ImgContainer = document.getElementById('q8ImgContainer');
var submitQ11 = document.getElementById('launch_assembly_answer');

/*************
Define Actions
*************/
// check and load local storage
if (localStorage.getItem('playersData')){
  console.log('Checks and finds local storage.');
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
  currentQuestion = players[0].question;
  displayQuestion();
} else {
  console.log('Checks and doesn\'t find local storage.');
//event listener for player login
  function getUserLogin(){
    var player = createUser.username.value;
    var password = createUser.password.value;
    new Player (player,password);
    setLocalStorage();
  }
  login.addEventListener('click', getUserLogin);
}

function displayQuestion() {
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    playVideo();
    video.addEventListener('ended', videoEnded);
    setLocalStorage();
  } else if (currentQuestion === 1) {
    video.removeEventListener('ended', videoEnded);
    q0.removeAttribute('style');
    q1.setAttribute('style', 'display:block');
    q1ImgContainer.addEventListener('click', handleImgClick);
    // setLocalStorage();
    console.log('Question 1');
  } else if (currentQuestion === 2) {
    q1ImgContainer.removeEventListener('click', handleImgClick);
    q1.removeAttribute('style');
    q2.setAttribute('style', 'display:block');
    submitQ2.addEventListener('click', validateCode);
    // setLocalStorage();
  } else if (currentQuestion === 3) {
    submitQ2.removeEventListener('click', validateCode);
    q2.removeAttribute('style');
    q3.setAttribute('style', 'display:block');
    displayWaterFilter();
    submitQ3.addEventListener('submit', validateFilterOrder);
    // setLocalStorage();
  } else if (currentQuestion === 4) {
    submitQ3.removeEventListener('submit', validateFilterOrder);
    q3.removeAttribute('style');
    q4.setAttribute('style', 'display:block');
    submit04.addEventListener('click', growPotatoes);
    // setLocalStorage();
  } else if (currentQuestion === 5) {
    submit04.removeEventListener('click', growPotatoes);
    potatoFarm.addEventListener('submit', handlePotatoClick);
    q4.removeAttribute('style');
    q5.setAttribute('style', 'display:block');
    // setLocalStorage();
  } else if (currentQuestion === 6) {
    getQ6Img.addEventListener('click', handleQuestionSixClicks);
    potatoFarm.removeEventListener('submit', handlePotatoClick);
    q5.removeAttribute('style');
    q6.setAttribute('style', 'display:block');
    // setLocalStorage();
  } else if (currentQuestion === 7) {
    getQ6Img.removeEventListener('click', handleQuestionSixClicks);
    q6.removeAttribute('style');
    q7.setAttribute('style', 'display:block');
    submitQ7.addEventListener('submit', validateJsCode);
    // setLocalStorage();
  } else if (currentQuestion === 8) {
    submitQ7.removeEventListener('submit', validateJsCode);
    q7.removeAttribute('style');
    q8.setAttribute('style', 'display:block');
    q8ImgContainer.addEventListener('click', handleImg8Click);
    // setLocalStorage();
  } else if (currentQuestion === 9) {
    q8ImgContainer.removeEventListener('click', handleImg8Click);
    q8.removeAttribute('style');
    q9.setAttribute('style', 'display:block');
    init();
    // setLocalStorage();
  } else if (currentQuestion === 10) {
    q9.removeAttribute('style');
    q10.setAttribute('style', 'display:block');
    // setLocalStorage();
  } else if (currentQuestion === 11) {
    q10.removeAttribute('style');
    q11.setAttribute('style', 'display:block');
    displayLaunchAssembly();
    submitQ11.addEventListener('submit', validateLaunchOrder);
    // setLocalStorage();
  } else if (currentQuestion === 12) {
    submitQ11.removeEventListener('submit', validateLaunchOrder);
    q11.removeAttribute('style');
    q12.setAttribute('style', 'display:block');
    // setLocalStorage();
  } else if (currentQuestion === 13) {
    q12.removeAttribute('style');
    q13.setAttribute('style', 'display:block');
    // setLocalStorage();
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
    // setLocalStorage();
  }
}

// Question 0 JS

// Question 1 JS

function handleImgClick(event) {
  if (event.target.id === 'leftImg1') {
    playerDies();
  } else if (event.target.id === 'rightImg1') {
    // Fix your wound
    playerLives();
    console.log('You fix your wound.');
    q1ImgContainer.removeEventListener('click', handleImgClick);
    console.log('removed event listener');
  } else if (event.target.id === 'centerImg1') {
    // Crawl to base
    playerLives();
    console.log('You crawl.');
    q1ImgContainer.removeEventListener('click', handleImgClick);
  } else {
    console.log('you need to click on an image');
  }
}


// Question 2 JS
function validateCode(event){
  event.preventDefault();
  var code = codeInput.securityCode.value;
  console.log(code);
  if( code === '1234'){
    playerLives();
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
function validateFilterOrder () {
  event.preventDefault();
  var filter = parseInt(event.target.filter.value);
  var converter = parseInt(event.target.converter.value);
  var holdingTank = parseInt(event.target.holding_tank.value);
  if (filter === 1 && converter === 2 && holdingTank === 3) {
    playerLives();
  } else {
    playerDies();
  }
}
// Question 4 JS
function growPotatoes(){
  event.preventDefault();
  playerLives();
};

// Question 5 JS
function handlePotatoClick(event) {
  event.preventDefault();
  var newPotato1 = event.target.potato1.value.toLowerCase();
  var newPotato2 = event.target.potato2.value.toLowerCase();
  var newPotato3 = event.target.potato3.value.toLowerCase();
  if (newPotato1 === 'water' || newPotato2 === 'water' || newPotato3 === 'water' && newPotato2 === 'heat' || newPotato2 === 'heat' || newPotato3 === 'heat' && newPotato1 === 'fertilizer' || newPotato2 === 'fertilizer' || newPotato3 === 'fertilizer') {
    playerLives();
  } else {
    playerDies();
  }
}


// Question 6 JS
function handleQuestionSixClicks(event){
  console.log('start of function');
  if (event.target.id === 'centerImg'){
    console.log('centerImg');
    playerLives();
    console.log('centerImg');
  }
  if (event.target.id === 'leftImg'){
    playerDies();
  }
  if (event.target.id === 'rightImg'){
    playerDies();
  }
}



// Question 7 JS
function validateJsCode () {
  event.preventDefault();
  var text = event.target.add_js.value;
  if (text === 'alert(\'I AM ALIVE\');') {
    playerLives();
  } else {
    playerDies();
  }
}

// Question 8 JS
function handleImg8Click(event) {
  if (event.target.id === 'rightImg8') {
    // ignore Nasa
    playerDies();
  } else if (event.target.id === 'leftImg8') {
    // listen to Nasa
    playerLives();
    console.log('You are listening to Nasa');
  } else {
    console.log('you need to click on an image');
  }
}

// Question 9 JS
var imgObj = null;
var imgLeft = 0;
var imgTop = 0;
var gameOver = true;


function init() {
  imgObj = document.getElementById('myImage');
  imgObj.style.position = 'relative';
  imgObj.style.left = '450px';
  imgObj.style.top = '150px';
  gameOver = false;
}

document.onkeydown = function(e) {
  if (gameOver) {
    console.log('gameOver');
    return;
  }
  switch (e.keyCode) {
  case 37:
    moveLeft();
    break;
  case 38:
    moveUp();
    break;
  case 39:
    moveRight();
    break;
  case 40:
    moveDown();
    break;
  }
};

function moveRight(){
  imgLeft = parseInt(imgObj.style.left) + 1;
  imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
  if (!gameOver) setTimeout(moveRight,20);
  console.log('Left = ' + imgLeft);
  if (imgLeft > 900) {
    console.log('GAME OVER: PLAYER DIES');
    playerDies();
  }
}

function moveLeft(){
  imgLeft = parseInt(imgObj.style.left) - 1;
  imgObj.style.left = parseInt(imgObj.style.left) - 1 + 'px';
  if (!gameOver) setTimeout(moveLeft,20);
  console.log('Left = ' + imgLeft);
  if (imgLeft < 100) {
    console.log('GAME OVER: PLAYER WINS');
    playerLives();
  }
}

function moveUp(){
  imgTop = parseInt(imgObj.style.top) - 1;
  imgObj.style.top = parseInt(imgObj.style.top) - 1 + 'px';
  if (!gameOver) setTimeout(moveUp,20);
  console.log('Top = ' + imgTop);
  if (imgTop < 20) {
    console.log('GAME OVER: PLAYER DIES');
    playerDies();
  }
}

function moveDown(){
  imgTop = parseInt(imgObj.style.top) + 1;
  imgObj.style.top = parseInt(imgObj.style.top) + 1 + 'px';
  if (!gameOver) setTimeout(moveDown,20);
  console.log('Top = ' + imgTop);
  if (imgTop > 800) {
    console.log('GAME OVER: PLAYER DIES');
    playerDies();
  }
}

// window.onload = init;


// Question 10 JS


// Question 11 JS
function displayLaunchAssembly () {
  var images = document.getElementById('launch_assembly');
  images.setAttribute('style', 'display:block');
  setTimeout(function() {
    var question = document.getElementById('launch_assembly_order');
    images.removeAttribute('style');
    question.setAttribute('style', 'display:block');
  }, 5000);
}
function validateLaunchOrder () {
  event.preventDefault();
  var controls = parseInt(event.target.controls.value);
  var boosters = parseInt(event.target.boosters.value);
  var fuel = parseInt(event.target.fuel.value);
  var fuselage = parseInt(event.target.fuselage.value);
  var comm_device = parseInt(event.target.comm_device.value);
  if (controls === 1 && boosters === 2 && fuel === 3 && fuselage === 4 && comm_device === 5) {
    playerLives();
  } else {
    playerDies();
  }
}

// Question 12 JS


// Question 13 JS



function playerDies () {
  console.log('playerDies');
  gameOver = true;
  currentQuestion = 14;
  players[0].oxygen = 0;
  players[0].water = 0;
  players[0].question = 14;
  setLocalStorage();
  displayQuestion();
}
function playerLives () {
  console.log('playerLives');
  gameOver = true;
  currentQuestion += 1;
  players[0].question += 1;
  players[0].oxygen += 1;
  players[0].water += 1;
  setLocalStorage();
  displayQuestion();
}
//Event question 1
function playVideo () {
  video.setAttribute('style', 'display:none');
  setTimeout(function() {
    video.removeAttribute('style');
    video.setAttribute('style', 'display:block');
    video.autoplay = true;
    video.load();
  }, 5000);
}
function videoEnded () {
  playerLives();
  displayQuestion();
}
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
function setLocalStorage() {
  console.log('Setting Local Storage');
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};
