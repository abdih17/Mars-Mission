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

/************
DOM Elements
************/
var button = document.getElementById('question_skip');
var login = document.getElementById('submit_login');
var videoQ0 = document.getElementById('videoQ0');
var submitQ1 = document.getElementById('submitQ1');
var doorCode = genRandomString();
var submitQ2 = document.getElementById('submitQ2');
var submitQ3 = document.getElementById('submitQ3');
var videoQ4 = document.getElementById('videoQ4');
var submitQ5 = document.getElementById('submitQ5');
var submitQ6 = document.getElementById('submitQ6');
var submitQ7 = document.getElementById('submitQ7');
var submitQ8 = document.getElementById('submitQ8');
var submitQ10 = document.getElementById('submitQ10');
var submitQ11 = document.getElementById('submitQ11');
var submitQ12 = document.getElementById('submitQ12');
var restart = document.getElementById('restart_game');
var videoQ13 = document.getElementById('videoQ13');

/*************
Define Actions
*************/
// check and load local storage
if (localStorage.getItem('playersData')){
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
  currentQuestion = players[0].question;
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

/**************************
Display Question Functions
**************************/
function displayQuestion() {
  playerStats();
  if (currentQuestion === 0) {
    q0.setAttribute('style', 'display:block');
    playVideoQ0();
    videoQ0.addEventListener('ended', videoEndedQ0);
    setLocalStorage();
  } else if (currentQuestion === 1) {
    videoQ0.removeEventListener('ended', videoEndedQ0);
    q0.removeAttribute('style');
    genQ1();
    q1.setAttribute('style', 'display:block');
    submitQ1.addEventListener('click', handleQ1);
  } else if (currentQuestion === 2) {
    submitQ1.removeEventListener('click', handleQ1);
    q1.removeAttribute('style');
    q2.setAttribute('style', 'display:block');
    submitQ2.addEventListener('click', handleQ2);
  } else if (currentQuestion === 3) {
    submitQ2.removeEventListener('click', handleQ2);
    waterFilterRandom();
    genQ3();
    q2.removeAttribute('style');
    q3.setAttribute('style', 'display:block');
    displayWaterFilter();
    submitQ3.addEventListener('submit', handleQ3);
  } else if (currentQuestion === 4) {
    submitQ3.removeEventListener('submit', handleQ3);
    q3.removeAttribute('style');
    q4.setAttribute('style', 'display:block');
    playVideoQ4();
    videoQ4.addEventListener('ended', videoEndedQ4);
    setLocalStorage();
  } else if (currentQuestion === 5) {
    videoQ4.removeEventListener('ended', videoEndedQ4);
    q4.removeAttribute('style');
    q5.setAttribute('style', 'display:block');
    submitQ5.addEventListener('submit', handleQ5);
  } else if (currentQuestion === 6) {
    submitQ5.removeEventListener('submit', handleQ5);
    q5.removeAttribute('style');
    q6.setAttribute('style', 'display:block');
    q6Imgs.addEventListener('click', handleQ6);
  } else if (currentQuestion === 7) {
    q6Imgs.removeEventListener('click', handleQ6);
    q6.removeAttribute('style');
    q7.setAttribute('style', 'display:block');
    submitQ7.addEventListener('submit', handleQ7);
  } else if (currentQuestion === 8) {
    submitQ7.removeEventListener('submit', handleQ7);
    q7.removeAttribute('style');
    q8.setAttribute('style', 'display:block');
    submitQ8.addEventListener('click', handleQ8);
  } else if (currentQuestion === 9) {
    submitQ8.removeEventListener('click', handleQ8);
    q8.removeAttribute('style');
    q9.setAttribute('style', 'display:block');
    init();
  } else if (currentQuestion === 10) {
    q9.removeAttribute('style');
    q10.setAttribute('style', 'display:block');
    submitQ10.addEventListener('click', handleQ10);
  } else if (currentQuestion === 11) {
    submitQ10.removeEventListener('click', handleQ10);
    launchAssemblyRandom();
    genQ11();
    q10.removeAttribute('style');
    q11.setAttribute('style', 'display:block');
    displayLaunchAssembly();
    submitQ11.addEventListener('submit', handleQ11);
  } else if (currentQuestion === 12) {
    submitQ11.removeEventListener('submit', handleQ11);
    q11.removeAttribute('style');
    q12.setAttribute('style', 'display:block');
    submitQ12.addEventListener('click', handleQ12);
    rendezvous();
  } else if (currentQuestion === 13) {
    submitQ12.removeEventListener('click', handleQ12);
    q12.removeAttribute('style');
    q13.setAttribute('style', 'display:block');
    playVideoQ13();
    videoQ13.addEventListener('ended', videoEndedQ13);
    setLocalStorage();
  } else if (currentQuestion === 14){
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
    videoQ13.removeEventListener('ended', videoEndedQ13);
    q14.setAttribute('style', 'display:block');
    restart.addEventListener('click', restartGame);
  }
}

/******************************
Questions/Video Functionalities
******************************/
// Question 0 JS
function playVideoQ0 () {
  videoQ0.setAttribute('style', 'display:none');
  setTimeout(function() {
    videoQ0.removeAttribute('style');
    videoQ0.setAttribute('style', 'display:block');
    videoQ0.autoplay = true;
    videoQ0.load();
  }, 5000);
}
function videoEndedQ0 () {
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
    var randomNumber = Math.ceil(Math.random() * (4 - 1)) + 0;
    for (var a = 0; a < waterRandom.length; a++) {
      if (randomNumber === waterRandom[a]) {
        repeatNumber = true;
        while (repeatNumber === true) {
          randomNumber = Math.ceil(Math.random() * (4 - 1)) + 0;
          if (randomNumber === waterRandom[0]) {
            repeatNumber = true;
          } else if (randomNumber === waterRandom[1]) {
            repeatNumber = true;
          } else {
            repeatNumber = false;
          }
        }
      }
    }
    waterRandom.push(randomNumber);
  }
}
function genQ3 () {
  var filter = document.getElementById('left3');
  var converter = document.getElementById('center3');
  var holdingTank = document.getElementById('right3');
  filter.textContent = waterRandom[0] + ' Filter';
  converter.textContent = waterRandom[1] + ' Converter';
  holdingTank.textContent = waterRandom[2] + ' Holding Tank';
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
function handleQ3 () {
  event.preventDefault();
  var filter = parseInt(event.target.filter.value);
  var converter = parseInt(event.target.converter.value);
  var holdingTank = parseInt(event.target.holding_tank.value);
  if (filter === waterRandom[0] && converter === waterRandom[1] && holdingTank === waterRandom[2]) {
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

// Question 4 JS
function playVideoQ4 () {
  videoQ4.setAttribute('style', 'display:none');
  setTimeout(function() {
    videoQ4.removeAttribute('style');
    videoQ4.setAttribute('style', 'display:block');
    videoQ4.autoplay = true;
    videoQ4.load();
  }, 5000);
}
function videoEndedQ4 () {
  currentQuestion += 1;
  players[0].question += 1;
  displayQuestion();
}

// Question 5 JS
function handleQ5(event) {
  event.preventDefault();
  var newPotato1 = event.target.potato1.value.toLowerCase();
  var newPotato2 = event.target.potato2.value.toLowerCase();
  var newPotato3 = event.target.potato3.value.toLowerCase();
  if (newPotato1 === 'water' || newPotato2 === 'water' || newPotato3 === 'water' && newPotato2 === 'heat' || newPotato2 === 'heat' || newPotato3 === 'heat' && newPotato1 === 'fertilizer' || newPotato2 === 'fertilizer' || newPotato3 === 'fertilizer') {
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

// Question 6 JS
function handleQ6(event){

  if (event.target.id === 'leftImg'){

    playerLives();
  } else if (event.target.id === 'centerImg'){
    playerDies();
  } else if (event.target.id === 'rightImg'){
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
    players[0].oxygen -= 1;
    players[0].water -= 1;
    playerStats();
    if (players[0].oxygen === 0 || players[0].water === 0) {
      playerDies();
    }
  }
}

// Question 8 JS
function handleQ8(event) {
  if (event.target.id === 'rightImg8') {
    playerDies();
  } else if (event.target.id === 'leftImg8') {
    playerLives();
    console.log('You are listening to Nasa');
  } else {
    alert('You need to click on an image');
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
  imgObj.style.left = '200px';
  imgObj.style.top = '200px';
  gameOver = false;
}

document.onkeydown = function(e) {
  if (gameOver) {
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
  console.log(imgLeft);
  imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
  if (!gameOver) setTimeout(moveRight,20);
  if (imgLeft > 600) {
    gameOver = true;
    playerDies();
  }
}

function moveLeft(){
  imgLeft = parseInt(imgObj.style.left) - 1;
  console.log(imgLeft);
  imgObj.style.left = parseInt(imgObj.style.left) - 1 + 'px';
  if (!gameOver) setTimeout(moveLeft,20);
  if (imgLeft < -200) {
    gameOver = true;
    playerLives();
  }
}

function moveUp(){
  imgTop = parseInt(imgObj.style.top) - 1;
  imgObj.style.top = parseInt(imgObj.style.top) - 1 + 'px';
  if (!gameOver) setTimeout(moveUp,20);
  if (imgTop < 0) {
    gameOver = true;
    playerDies();
  }
}

function moveDown(){
  imgTop = parseInt(imgObj.style.top) + 1;
  imgObj.style.top = parseInt(imgObj.style.top) + 1 + 'px';
  if (!gameOver) setTimeout(moveDown,20);
  if (imgTop > 330) {
    gameOver = true;
    playerDies();
  }
}


// Question 10 JS
var randomNum = Math.random();
function handleQ10(event){
  if(event.target.id === 'drive_through' && randomNum > 0.33){
    console.log('The storm proved too much for your equipment to hold up to.');
    playerDies();
  } else if (event.target.id === 'drive_through' && randomNum < 0.33){
    console.log('The storm was rough but you managed to make it through');
    currentQuestion += 1;
    displayQuestion();
  } else if (event.target.id === 'drive_around' && players[0].oxygen <= 2){
    console.log('You ran out of essential resources and died');
    playerDies();
  } else if (event.target.id === 'drive_around' && players[0].water <= 2){
    console.log('You ran out of essential resources and died');
    playerDies();
  } else if (event.target.id === 'drive_around') {
    console.log('it took awhile but thankfully you finally made it');
    currentQuestion += 1;
    displayQuestion();
  }
}

// Question 11 JS
var launchRandom = [];
function launchAssemblyRandom () {
  var repeatNumber = false;
  for (var i = 0; i < 5; i++) {
    var randomNumber = Math.ceil(Math.random() * (6 - 1)) + 0;
    for (var a = 0; a < launchRandom.length; a++) {
      if (randomNumber === launchRandom[a]) {
        repeatNumber = true;
        while (repeatNumber === true) {
          randomNumber = Math.ceil(Math.random() * (6 - 1)) + 0;
          if (randomNumber === launchRandom[0]) {
            repeatNumber = true;
          } else if (randomNumber === launchRandom[1]) {
            repeatNumber = true;
          } else if (randomNumber === launchRandom[2]) {
            repeatNumber = true;
          } else if (randomNumber === launchRandom[3]) {
            repeatNumber = true;
          } else if (randomNumber === launchRandom[4]) {
            repeatNumber = true;
          } else {
            repeatNumber = false;
          }
        }
      }
    }
    launchRandom.push(randomNumber);
  }
}
function genQ11 () {
  var controls = document.getElementById('controls');
  var boosters = document.getElementById('boosters');
  var fuel = document.getElementById('fuel');
  var fuselage = document.getElementById('fuselage');
  var comm_device = document.getElementById('comm_device');
  controls.textContent = launchRandom[0] + ' Controls';
  boosters.textContent = launchRandom[1] + ' Boosters';
  fuel.textContent = launchRandom[2] + ' Fuel';
  fuselage.textContent = launchRandom[3] + ' Fuselage';
  comm_device.textContent = launchRandom[4] + ' Communication Device';
}
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
  if (controls === launchRandom[0] && boosters === launchRandom[1] && fuel === launchRandom[2] && fuselage === launchRandom[3] && comm_device === launchRandom[4]) {
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

// Question 12 JS
var imgOrbiter = null;
var imgTransport = null;
var animate;
var orbLeft = 0;
var transUp = 0;
var game2over = true;

function rendezvous(){
  game2over = false;
  imgOrbiter = document.getElementById('orbiter');
  imgTransport = document.getElementById('transport');
  imgOrbiter.style.position = 'relative';
  imgOrbiter.style.left = '0px';
  imgOrbiter.style.top = '-25px';
  imgTransport.style.position = 'relative';
  imgTransport.style.left = '500px';
  imgTransport.style.top = '290px';
  flyRight();
}

function flyRight(){
  if (game2over) {
    return;
  }
  orbLeft = parseInt(imgOrbiter.style.left) + 1;
  imgOrbiter.style.left = parseInt(imgOrbiter.style.left) + 1 + 'px';
  animate = setTimeout(flyRight,20);
  if (orbLeft > 590) {
    game2over = true;
    playerDies();
    return;
  }
}

function handleQ12(){
  console.log('handleQ12');
  if (game2over) {
    return;
  }
  transUp = parseInt(imgTransport.style.top) - 1;
  imgTransport.style.top = parseInt(imgTransport.style.top) - 1 + 'px';
  animate = setTimeout(handleQ12,17);
  if (transUp < 10 && transUp > -30 && orbLeft > 515 && orbLeft < 575) {
    game2over = true;
    playerLives();
    return;
  }
}

// Question 13 JS
function playerDies () {
  gameOver = true;
  currentQuestion = 14;
  players[0].oxygen = 0;
  players[0].water = 0;
  players[0].question = 14;
  setLocalStorage();
  displayQuestion();
}
function playerLives () {
  gameOver = true;
  currentQuestion += 1;
  players[0].question += 1;
  players[0].oxygen += 1;
  players[0].water += 1;
  setLocalStorage();
  displayQuestion();
}
function playVideoQ13 () {
  videoQ13.setAttribute('style', 'display:none');
  setTimeout(function() {
    videoQ13.removeAttribute('style');
    videoQ13.setAttribute('style', 'display:block');
    videoQ13.autoplay = true;
    videoQ13.load();
  }, 5000);
}
function videoEndedQ13 () {
  currentQuestion += 1;
  players[0].question += 1;
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
button.addEventListener('click', playerLives);

// set local storage function
function setLocalStorage() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};
