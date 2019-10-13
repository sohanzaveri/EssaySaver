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

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('end').addEventListener('click', end);
