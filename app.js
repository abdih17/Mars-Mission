'use strict';


function check(form){
  if(form.userid.value == 'mars' && form.pswrd.value == 'abc')
  { window.open('https://github.com/abdih17/Mars-Mission'); //website it will transfer over to
  } else {
    alert('Please sign-in using the correct username and password.'); //or another message?
  }
};

check();
//add create an account


// create function to display delayed text
function marsText() {

  var delayedText = function(target, msg, index, interval){

    var el = document.getElementById(target);

    if(index < msg.length){
      el.textContent = el.textContent + msg.charAt(index);
      index = index + 1;
      setTimeout(function(){
        delayedText(target,msg,index,interval);
      },interval);
    }

  };

  delayedText('delayedText', 'Welcome to Mars Mission. You must survive.', 0, 70);
}
marsText();

// html needs to use id="delayedText"
