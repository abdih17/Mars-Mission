'use strict';

var el = document.getElementById('delayedText');
var index = 0;
var createText = function(msg){
  if(index < msg.length){
    // createText.style.fontFamily = 'VT323, monospace';
    el.textContent = el.textContent + msg.charAt(index);
    index += 1;
    setTimeout(function(){
      createText(msg);
    }, 70);
  } else {
    return;
  }
};
createText('Mission From Mars');

// .style.fontFamily = 'VT323, monospace'
