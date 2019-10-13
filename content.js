//
// (function (){
//   let count = 0;
//
//   document.addEventListener("keypress", function()
//   {
//     count++;
//
//   });
//
//   window.setInterval(function(){
//
//     console.log(count);
//
//     count=0;
//
//   }, 1000);
// })();











chrome.runtime.onMessage.addListener(function gotMessage(message, sender, sendResponse)
{

  alert("hey")

  if(message.txt === "hello"){

    let para= document.getElementsByTagName("p");

    for(x of para)
    {
      x.style['background-color'] = '#FF00FF';
    }

  }


});
