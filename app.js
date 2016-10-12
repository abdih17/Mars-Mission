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
/*************
Define Actions
*************/
// check and load local storage
if (localStorage.getItem('playersData')){
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
  displayQuestion();
} else {
//event listener for player login
  function getUserLogin(){
    var player = createUser.username.value;
    var password = createUser.password.value;
    new Player (player,password);
    setLocalStorage();
  }
  login.addEventListener('click', getUserLogin);
}



var button = document.getElementById('button');

function displayQuestion() {
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    currentQuestion += 1;
    console.log('Question 0');
    setLocalStorage();
  } else if (currentQuestion === 1) {
    q1ImgContainer.addEventListener('click', handleImgClick);
    q0.removeAttribute('style');
    q1.setAttribute('style', 'display:block');
    setLocalStorage();
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
    submit04.addEventListener('click', growPotatoes);
  } else if (currentQuestion === 5) {
    submit04.removeEventListener('click', growPotatoes);
    potatoFarm.addEventListener('submit', handlePotatoClick);
    q4.removeAttribute('style');
    q5.setAttribute('style', 'display:block');
  } else if (currentQuestion === 6) {
    getQ6Img.addEventListener('click', handleQuestionSixClicks);
    potatoFarm.removeEventListener('submit', handlePotatoClick);
    q5.removeAttribute('style');
    q6.setAttribute('style', 'display:block');
  } else if (currentQuestion === 7) {
    q6.removeAttribute('style');
    q7.setAttribute('style', 'display:block');
    submitQ7.addEventListener('submit', validateJsCode);
  } else if (currentQuestion === 8) {
    submitQ7.removeEventListener('submit', validateJsCode);
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
    displayLaunchAssembly();
    submitQ11.addEventListener('submit', validateLaunchOrder);
  } else if (currentQuestion === 12) {
    submitQ11.removeEventListener('submit', validateLaunchOrder);
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
var q1ImgContainer = document.getElementById('q1ImgContainer');
function handleImgClick(event) {
  if (event.target.id === 'leftImg1') {
    playerDies();
  } else if (event.target.id === 'rightImg1') {
    // Fix your wound
    currentQuestion += 1;
    players[0].oxygen -= 1;
    players[0].water -= 1;
    displayQuestion();
    console.log('You fix your wound.');
  } else if (event.target.id === 'centerImg1') {
    // Crawl to base
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
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
var submit04 = document.getElementById('growPotatoes');
function growPotatoes(){
  event.preventDefault();
  currentQuestion += 1;
  players[0].oxygen += 1;
  players[0].water += 1;
  displayQuestion();
};

// Question 5 JS
var potatoFarm = document.getElementById('potatoFarm');
function handlePotatoClick(event) {
  event.preventDefault();
  var newPotato1 = event.target.potato1.value.toLowerCase();
  var newPotato2 = event.target.potato2.value.toLowerCase();
  var newPotato3 = event.target.potato3.value.toLowerCase();

  if (newPotato1 === 'water' || newPotato2 === 'water' || newPotato3 === 'water' && newPotato2 === 'heat' || newPotato2 === 'heat' || newPotato3 === 'heat' && newPotato1 === 'fertilizer' || newPotato2 === 'fertilizer' || newPotato3 === 'fertilizer') {
    players[0].oxygen += 1;
    players[0].water += 1;
    currentQuestion += 1;
    displayQuestion();
  } else {
    playerDies();
  }
}


// Question 6 JS
var getQ6Img = document.getElementById('q6Imgs');

function handleQuestionSixClicks(event){
  console.log('start of function');
  if (event.target.id === 'centerImg'){
    console.log('centerImg');
    currentQuestion += 1;
    players[0].question += 1;
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



// Question 7 JS
var submitQ7 = document.getElementById('communication_device_fix');
function validateJsCode () {
  event.preventDefault();
  var text = event.target.add_js.value;
  if (text === 'alert(\'I AM ALIVE\')') {
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
    displayQuestion();
  } else {
    playerDies();
  }
}

// Question 8 JS


// Question 9 JS


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
var submitQ11 = document.getElementById('launch_assembly_answer');
function validateLaunchOrder () {
  event.preventDefault();
  var controls = parseInt(event.target.controls.value);
  var boosters = parseInt(event.target.boosters.value);
  var fuel = parseInt(event.target.fuel.value);
  var fuselage = parseInt(event.target.fuselage.value);
  var comm_device = parseInt(event.target.comm_device.value);
  if (controls === 1 && boosters === 2 && fuel === 3 && fuselage === 4 && comm_device === 5) {
    currentQuestion += 1;
    players[0].oxygen += 1;
    players[0].water += 1;
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
function setLocalStorage() {
  console.log('Setting Local Storage');
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};

button.addEventListener('click', displayQuestion);
