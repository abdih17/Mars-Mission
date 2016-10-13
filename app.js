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

/*************
DOM Elements
*************/

var login = document.getElementById('submit_login');
var video = document.getElementById('video1');
var submitQ1 = document.getElementById('submitQ1');
var doorCode = genRandomString();
var submitQ2 = document.getElementById('submitQ2');
var submitQ3 = document.getElementById('submitQ3');
var submitQ4 = document.getElementById('submitQ4');
var submitQ5 = document.getElementById('submitQ5');
var submitQ6 = document.getElementById('submitQ6');
var submitQ7 = document.getElementById('submitQ7');
var submitQ8 = document.getElementById('submitQ8');
var submitQ11 = document.getElementById('submitQ11');
var restart = document.getElementById('restart_game');

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

/**************************
Display Question Functions
**************************/
function displayQuestion() {
  playerStats();
  console.log('start of function');
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    playVideo();
    video.addEventListener('ended', videoEnded);
    setLocalStorage();
  } else if (currentQuestion === 1) {
    video.removeEventListener('ended', videoEnded);
    q0.removeAttribute('style');
    genQ1();
    q1.setAttribute('style', 'display:block');
    submitQ1.addEventListener('click', handleQ1);
    // setLocalStorage();
    console.log('Question 1');
  } else if (currentQuestion === 2) {
    submitQ1.removeEventListener('click', handleQ1);
    q1.removeAttribute('style');
    q2.setAttribute('style', 'display:block');
    submitQ2.addEventListener('click', handleQ2);
    // setLocalStorage();
  } else if (currentQuestion === 3) {
    submitQ2.removeEventListener('click', handleQ2);
    q2.removeAttribute('style');
    q3.setAttribute('style', 'display:block');
    displayWaterFilter();
    submitQ3.addEventListener('submit', handleQ3);
    // setLocalStorage();
  } else if (currentQuestion === 4) {
    submitQ3.removeEventListener('submit', handleQ3);
    q3.removeAttribute('style');
    q4.setAttribute('style', 'display:block');

    submitQ4.addEventListener('click', handleQ4);
    // setLocalStorage();
  } else if (currentQuestion === 5) {
    submitQ4.removeEventListener('click', handleQ4);
    q4.removeAttribute('style');
    q5.setAttribute('style', 'display:block');
    submitQ5.addEventListener('submit', handleQ5);
    // setLocalStorage();
  } else if (currentQuestion === 6) {
    submitQ5.removeEventListener('submit', handleQ5);
    q5.removeAttribute('style');
    q6.setAttribute('style', 'display:block');
    q6Imgs.addEventListener('click', handleQ6);
    // setLocalStorage();
  } else if (currentQuestion === 7) {
    q6Imgs.removeEventListener('click', handleQ6);
    q6.removeAttribute('style');
    q7.setAttribute('style', 'display:block');
    submitQ7.addEventListener('submit', handleQ7);
    // setLocalStorage();
  } else if (currentQuestion === 8) {
    submitQ7.removeEventListener('submit', handleQ7);
    q7.removeAttribute('style');
    q8.setAttribute('style', 'display:block');
    submitQ8.addEventListener('click', handleQ8);
    // setLocalStorage();
  } else if (currentQuestion === 9) {
    submitQ8.removeEventListener('click', handleQ8);
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
    submitQ11.addEventListener('submit', handleQ11);
    // setLocalStorage();
  } else if (currentQuestion === 12) {
    submitQ11.removeEventListener('submit', handleQ11);
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
    restart.addEventListener('click', restartGame);
    // setLocalStorage();
  }
}

/******************************
Questions/Video Functionalities
******************************/
// Question 0 JS
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

// Question 1 JS
function genQ1 () {
  var wait = document.getElementById('wait');
  var patch = document.getElementById('patch');
  var crawl = document.getElementById('crawl');
  wait.textContent = 'Wait for your team';
  patch.textContent = 'Patch the wound';
  crawl.textContent = 'Crawl to the base 200 meters away ' + doorCode;
}
function handleQ1(event) {
  if (event.target.id === 'wait') {
    playerDies();
  } else if (event.target.id === 'patch') {
    playerDies();
  } else if (event.target.id === 'crawl') {
    playerLives();
  }
}

// function handleQ1(event) {
//   if (event.target.id === 'leftImg1') {
//     playerDies();
//   } else if (event.target.id === 'rightImg1') {
//     currentQuestion += 1;
//     players[0].question += 1;
//     players[0].oxygen -= 1;
//     players[0].water -= 1;
//     setLocalStorage();
//     displayQuestion();
//     // Fix your wound
//     playerLives();
//     console.log('You fix your wound.');
//     submitQ1.removeEventListener('click', handleQ1);
//     console.log('removed event listener');
//   } else if (event.target.id === 'centerImg1') {
//     currentQuestion += 1;
//     players[0].question += 1;
//     players[0].oxygen += 1;
//     players[0].water += 1;
//     setLocalStorage();
//     displayQuestion();
//     // Crawl to base
//     playerLives();
//     console.log('You crawl.');
//     submitQ1.removeEventListener('click', handleQ1);
//   } else {
//     console.log('you need to click on an image');
//   }
// }

// Question 2 JS
function handleQ2(event){
  event.preventDefault();
  var code = codeInput.securityCode.value;
  console.log(code);
  if( code === doorCode) {
    playerLives();
  } else {
    players[0].oxygen -= 1;
    players[0].water -= 1;
    playerStats();
    if (players[0].oxygen === 0 || players[0].water === 0) {
      playerDies();
    }
  }
}

// Question 3 JS
var waterRandom = [];
function waterFilterRandom () {
  var repeatNumber = false;
  for (var i = 0; i < 3; i++) {
    var randomNumber = waterRandom.push(Math.ceil(Math.random() * (4 - 1)) + 0);
  }
}
function displayWaterFilter () {
  var images = document.getElementById('water_filter');
  images.setAttribute('style', 'display:block');
  setTimeout(function() {
    var question = document.getElementById('water_filter_order');
    images.removeAttribute('style');
    question.setAttribute('style', 'display:block');
  }, 5000);
}
waterFilterRandom();
function handleQ3 () {
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
function handleQ4(){
  event.preventDefault();
  playerLives();
};

// Question 5 JS
function handleQ5(event) {
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
function handleQ6(event){
  console.log('start of function');
  if (event.target.id === 'leftImg'){
    console.log('leftImg');
    playerLives();
    console.log('leftImg');
  }
  if (event.target.id === 'centerImg'){
    playerDies();
  }
  if (event.target.id === 'rightImg'){
    playerDies();
  }
}

// Question 7 JS
function handleQ7 () {
  event.preventDefault();
  var text = event.target.add_js.value;
  if (text === 'alert(\'I AM ALIVE\');') {
    playerLives();
  } else {
    playerDies();
  }
}

// Question 8 JS
function handleQ8(event) {
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
function handleQ11 () {
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
  currentQuestion = 14;
  players[0].oxygen = 0;
  players[0].water = 0;
  players[0].question = 14;
  setLocalStorage();
  displayQuestion();
}
function playerLives () {
  currentQuestion += 1;
  players[0].question += 1;
  players[0].oxygen += 1;
  players[0].water += 1;
  setLocalStorage();
  displayQuestion();
}
//Show player Stats
function playerStats () {
  var userName = document.getElementById('playerName');
  var oxygen = document.getElementById('oxygen_stats');
  var water = document.getElementById('water_stats');
  userName.textContent = 'Martian: ' + players[0].login;
  oxygen.textContent = 'Oxygen: ' + players[0].oxygen;
  water.textContent = 'Water: ' + players[0].water;
}

//Restart Game
function restartGame () {
  currentQuestion = 0;
  players[0].question = 0;
  players[0].oxygen = 4;
  players[0].water = 4;
  setLocalStorage();
  displayQuestion();
  q14.removeAttribute('style');
}

//Generate a random door code
function genRandomString () {
  var code = '';
  var codePossible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 5; i++) {
    code += codePossible.charAt(Math.floor(Math.random() * codePossible.length));
  }
  return code;
};

/**************
Execute Actions
**************/

// set local storage function
function setLocalStorage() {
  console.log('Setting Local Storage');
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};
