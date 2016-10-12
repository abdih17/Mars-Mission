'use strict';

var el = document.getElementById('delayedText').style.fontFamily = 'VT323';
var index = 0;
var createText = function(msg){
  if(index < msg.length){
    el.textContent = el.textContent + msg.charAt(index);
    index += 1;
    setTimeout(function(){
      createText(msg);
    }, 70);
  } else {
    return;
  }
};
createText('Mission From Mars'.style.fontFamily = 'VT323');
