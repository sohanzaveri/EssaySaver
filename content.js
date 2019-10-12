

(function (){


  let counts = [];
  let count = 0;

  document.body.addEventListener("keydown", function()
  {
    count++;
  });

  window.setInterval(function(){

    //why doesnt counts add everthing to an array
    counts.push(count);

    console.log(counts)

    count=0;

  }, 60000);
})();




//chrome.tabs.onActivated.addListener(function callback)











/*
window.onload = function()
{
  els = document.getElementsByTagName("*");
  for(i=0;i<els.length;i++) {
    els[i].onkeypress=function(){
      alert("hello!");
    };
  }
}
*/


/*
  var iframe = document.getElementsByTagName("iframe")[0];
  if (iframe) {

      iframe.contentDocument.addEventListener("keypress", function(evt) {
          console.log("iframe keypress: " + evt.which);

          alert("IT WORKSS");

      }, false);
  }
  */

/*
  if (!window.onkeydown) {
    const data = {
      count: 0,
    };
    window.onkeydown = () => {
      data.count++;
    };

    window.setInterval(() => {
      console.log(data.count);
    }, 1000);
  }
}
*/




/*
var iframe = document.getElementsByTagName("iframe")[0];
if (iframe) {
  alert("working");
    iframe.contentDocument.addEventListener("keydown", function(evt) {
      alert("not working");

        console.log("iframe keypress: " + evt.which);
    }, false);
}

/***
(function (){


  var iframe = document.getElementsByTagName("iframe")[0];
  if (iframe) {

      iframe.contentDocument.addEventListener("keypress", function(evt) {
          console.log("iframe keypress: " + evt.which);

          alert("IT WORKSS");

      }, false);
  }


  let count = 0;

  document.addEventListener("keypress", function()
  {
    count++;

  });

  window.setInterval(function(){

    console.log(count);

    count=0;

  }, 1000);
})();

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

***/
