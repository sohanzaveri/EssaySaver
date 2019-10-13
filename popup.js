// document.getElementById('New Goal').addEventListener("click", function()
// {
//
//
//
// });
//
//
// document.getElementById('Goal').addEventListener("click", function()
// {
//
//
//
// });
//
//
//
// document.getElementById('Count').addEventListener("click", function()
// {
//
//   alert("popup works");
//
//
// });
var startTime, endTime;
var x;
var e;
var totalPoints = 0;
var goalWords = 5;
var goalTime = 5;
function start() {
  startTime = new Date();
  chrome.runtime.sendMessage('start');
  let bgpage = chrome.extension.getBackgroundPage();
  let s = bgpage.word;
  s = s.replace(/(^\s*)|(\s*$)/gi,"");
  s = s.replace(/[ ]{2,}/gi," ");
  s = s.replace(/\n /,"\n");

  x = s.split(' ').length;
  console.log("start count: " + x);
};

// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;
//
//   // get seconds
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }

// function setup(){
//   noCanvas();
//
//   let bgpage = chrome.extension.getBackgroundPage();
//   let word = bgpage.word;
//   //createP(word);
// }

 //  function countWords(){
 //  	s = document.getElementById("inputString").value;
 //  	s = s.replace(/(^\s*)|(\s*$)/gi,"");
 //  	s = s.replace(/[ ]{2,}/gi," ");
 //  	s = s.replace(/\n /,"\n");
 //
 //  	x = s.split(' ').length;
 // }

  function findProgress(){
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");

    chrome.runtime.sendMessage('end');

    let bgpage = chrome.extension.getBackgroundPage();
    let s = bgpage.word;
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
    s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");

    e = s.split(' ').length;
    words = e-x;
    console.log("You typed " + words + "words.");
    if(words == goalWords && time == goalTime){
      console.log("Congrats you achieved your goal! You earned 50 points.")
      totalPoints += 50;
    }else if(words > (goalWords + 10) && time == goalTime){
      let points = 50 + Math.round((words-goalWords)/10);
      console.log("Congrats you achieve and exceeded your goal! You earned " + points + "points.")
    }
  }


// chrome.tabs.executeScript( {
//     code: "window.getSelection().toString();"
// }, function(selection) {
//     document.getElementById("output").innerHTML = selection[0];
// });

document.getElementById('start').addEventListener('click', start);
document.getElementById('end').addEventListener('click', end);
