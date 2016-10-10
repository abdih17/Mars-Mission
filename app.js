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

//life source = incrementing and decrementing oxygen/health

var lifeSource = 0 //decide on an number to start with.

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20); //
}

if (userAnswer === correctAnswer){
  lifeSource += 1;
  break;
} else {
  lifeSource -= 1;
  break;
}

lifeSource
