'use strict';

/*************
DATA Declarations
*************/
var players = [];
var currentQuestion = 10;

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
var button = document.getElementById('button');
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
  console.log('start of function');
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
    // setLocalStorage();
  } else if (currentQuestion === 10) {
    q9.removeAttribute('style');
    q10.setAttribute('style', 'display:block');
    getQ10Choices.addEventListener('click', throughTheStorm);
    // setLocalStorage();
  } else if (currentQuestion === 11) {
    getQ10Choices.removeEventListener('click', throughTheStorm);
    console.log('should be 11');
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
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen -= 1;
    players[0].water -= 1;
    setLocalStorage();
    displayQuestion();
    console.log('You fix your wound.');
    q1ImgContainer.removeEventListener('click', handleImgClick);
    console.log('removed event listener');
  } else if (event.target.id === 'centerImg1') {
    // Crawl to base
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
    displayQuestion();
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
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
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
function validateFilterOrder () {
  event.preventDefault();
  var filter = parseInt(event.target.filter.value);
  var converter = parseInt(event.target.converter.value);
  var holdingTank = parseInt(event.target.holding_tank.value);
  if (filter === 1 && converter === 2 && holdingTank === 3) {
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
    displayQuestion();
  } else {
    playerDies();
  }
}
// Question 4 JS
function growPotatoes(){
  event.preventDefault();
  currentQuestion += 1;
  players[0].question += 1;
  players[0].oxygen += 1;
  players[0].water += 1;
  setLocalStorage();
  displayQuestion();
};

// Question 5 JS
function handlePotatoClick(event) {
  event.preventDefault();
  var newPotato1 = event.target.potato1.value.toLowerCase();
  var newPotato2 = event.target.potato2.value.toLowerCase();
  var newPotato3 = event.target.potato3.value.toLowerCase();
  if (newPotato1 === 'water' || newPotato2 === 'water' || newPotato3 === 'water' && newPotato2 === 'heat' || newPotato2 === 'heat' || newPotato3 === 'heat' && newPotato1 === 'fertilizer' || newPotato2 === 'fertilizer' || newPotato3 === 'fertilizer') {
    players[0].oxygen += 1;
    players[0].water += 1;
    currentQuestion += 1;
    players[0].question += 1;
    setLocalStorage();
    displayQuestion();
  } else {
    playerDies();
  }
}


// Question 6 JS
function handleQuestionSixClicks(event){
  console.log('start of function');
  if (event.target.id === 'centerImg'){
    console.log('centerImg');
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
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



// Question 7 JS
function validateJsCode () {
  event.preventDefault();
  var text = event.target.add_js.value;
  if (text === 'alert(\'I AM ALIVE\');') {
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
    displayQuestion();
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
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
    displayQuestion();
    console.log('You are listening to Nasa');
  } else {
    console.log('you need to click on an image');
  }
}

// Question 9 JS


// Question 10 JS
var randomNum = Math.random();
var getQ10Choices = document.getElementById('q10choices');

function throughTheStorm(event){
  if(event.target.id === 'leftChoice' && randomNum > 0.5){
    console.log('The storm proved too much for your equipment to hold up to.');
    playerDies();
  } else if (event.target.id === 'leftChoice' && randomNum < 0.5){
    console.log('The storm was rough but you managed to make it through');
    currentQuestion += 1;
    displayQuestion();
  } else if (event.target.id === 'rightChoice' && players[0].oxygen <= 2){
    console.log('You ran out of essential resources and died');
    playerDies();
  } else if (event.target.id === 'rightChoice' && players[0].water <= 2){
    console.log('You ran out of essential resources and died');
    playerDies();
  } else if (event.target.id === 'rightChoice') {
    console.log('it took awhile but thankfully you finally made it');
    currentQuestion += 1;
    displayQuestion();
  }
};

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
    currentQuestion += 1;
    players[0].question += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    setLocalStorage();
    displayQuestion();
  } else {
    playerDies();
  }
}

// Question 12 JS


// Question 13 JS



function playerDies () {
  currentQuestion = 14;
  players[0].oxygen = 0;
  players[0].water = 0;
  players[0].question = 14;
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
  currentQuestion += 1;
  players[0].question += 1;
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

button.addEventListener('click', displayQuestion);
