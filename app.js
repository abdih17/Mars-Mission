'use strict';
var players = [];
var text = document.getElementById('text_wrapper');
var question = document.getElementById('question_wrapper');
var answer = document.getElementById('answers_wrapper');
var currentQuestion = 0;
var questions = [];

function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  this.question = 0;
  players.push(this);
};

var wakeUp = {
  text: 'Beep...Beep...Beep... Oxygen critically low... Oxygen critically low...',
  question: 'What is your name?',
};
var getToBase = {
  text: 'After choosing to abort the mission and flee Mars due to the storm your team left the base. The base by design is self locking. In order to get inside you must enter the door code that was given to you on the previous question.',
  question: 'What is the code?',
};

questions.push(wakeUp, getToBase);

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

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
};



var formEl = document.createElement('form');
var inputEl = document.createElement('input');
var buttonEl = document.createElement('button');
var pEl = document.createElement('p');
var divEl = document.createElement('div');

function printText () {
  pEl.textContent = questions[currentQuestion].text;
  divEl.appendChild(pEl);
  text.appendChild(divEl);
}
printText();
function questionText () {
  pEl.textContent = questions[currentQuestion].question;
  divEl.appendChild(pEl);
  question.appendChild(divEl);
}
questionText();
function answerText () {
  pEl.textContent = 'Answers';
  divEl.appendChild(pEl);
  answer.appendChild(divEl);
}
answerText();

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
