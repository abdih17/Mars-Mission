'use strict';

// check local storage

var players = [];

// check and load local storage
if (localStorage.getItem('playerData')){
  players = [];
  players = JSON.parse(localStorage.getItem('playersData'));
} else {
  Player();
};

// set local storage function
var setLocalStorage = function() {
  var playersString = JSON.stringify(players);
  localStorage.setItem('playersData', playersString);
  return;
};
setLocalStorage();


function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  this.question = 0;
  players.push(this);
};

/************************
Handle user input
*************************/

var login = document.getElementById('createUser');

function getUserLogin(event){
  event.preventDefault();
  var player = event.target.username.value;
  var password = event.target.password.value;
  new Player (player,password);
};

login.addEventListener('submit', getUserLogin);

// function check(form){
//   if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
//   { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
//   } else {
//     alert('Please sign-in using the correct username and password.'); //or another message?
//   }
// };

// check();
//add create an account
