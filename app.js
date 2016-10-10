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


/************************
Handle user input
*************************/

var userId = document.getElementsByName('userId');
var pswrd = document.getElementsByName('pswrd');

function getUserLogin(){
  if(userId === 'Andrew'){
    console.log('Hello');
  } else {
    console.log('Who are you?');
  }
}
