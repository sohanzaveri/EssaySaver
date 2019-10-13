
(function (){
  let count = 0;

  document.addEventListener("keypress", function()
  {
    count++;
    // let valOfTyped = event.keyCode;

  });

  // document.addEventListener("keydown",function() {
  //   let text = DocumentApp.getActiveDocument().getBody().getText();
  //   let words = text.match(/\S+/g);
  //   console.log(words.length);
  // });
  // window.setInterval(function(){
  //
  //   console.log(count);
  //
  //   count=0;
  //
  // }, 1000);
})();

document.addEventListener('click', wordSelected);

chrome.runtime.onMessage.addListener(chrome.runtime.onMessage.addListener(function gotMessage(message, sender, sendResponse)
{ if (message.txt == 'start' || message.txt == 'end'){
    let selectedText = window.getSelection().toString();
    console.log(selectedText);
    if (selectedText.length > 0) {
      let message = {
        text: selectedText
      };
      chrome.runtime.sendMessage(message);
    }
}
});

// function wordSelected()) {
//   let selectedText = window.getSelection().toString();
//   console.log(selectedText);
//   if (selectedText.length > 0) {
//     let message = {
//       text: selectedText
//     };
//     chrome.runtime.sendMessage(message);
//   }
// }






// chrome.runtime.onMessage.addListener(function gotMessage(message, sender, sendResponse)
// {
//
//   alert("hey")
//
//   if(message.txt === "hello"){
//
//     let para= document.getElementsByTagName("p");
//
//     for(x of para)
//     {
//       x.style['background-color'] = '#FF00FF';
//     }
//
//   }
//
//
// });
