chrome.runtime.onMessage.addListener(reciever);

window.word = "code";

function reciever(request, sender, sendResponse){
  console.log(request);
  word = request.text;
}
