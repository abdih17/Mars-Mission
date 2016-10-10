'use strict';
//
//
// function check(form){
//   if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
//   { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
//   } else {
//     alert('Please sign-in using the correct username and password.'); //or another message?
//   }
// };
//
// check();
//add create an account

var players = [];

function Player (loginName, password, playerName) {
  this.login = loginName;
  this.password = password;
  this.playName = playerName;
  this.oxygen = 4;
  this.water = 4;
  players.push(this);
};

/************************
Handle user input
*************************/

var login = document.getElementById('createUser');

function getUserLogin(event){
  event.preventDefault();
  console.log('this works');
  var player = event.target.username.value;
  console.log(player);
};

login.addEventListener('submit', getUserLogin);

// function check(form){
//   if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
//   { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
//   } else {
//     alert('Please sign-in using the correct username and password.'); //or another message?
//   }
// };


new Player('Jonny', '1234', 'Mark');
new Player('Andrew', '4321', 'The Martian');
// check();
//add create an account
