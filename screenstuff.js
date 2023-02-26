const { createWorker } = require('tesseract.js');


document.getElementById("screenshot").addEventListener("click", screenshot);

function screenshot() {
    alert("hello");
}
document.getElementById("wholePage").addEventListener("click", wholePage);
function wholePage() {
    let capturing = chrome.tabs.captureVisibleTab(null, {}, function (image) {
            alert(image);
            // ImgToText(image);
        });
    // capturing.then(onCaptured, onError);
    alert("done");
    
}

function onCaptured(imageUri) {
    alert(imageUri)
}
  
function onError(error) {
    console.log(`Error: ${error}`);
}

function convertURIToImageData(URI) {
    return new Promise(function(resolve, reject) {
      if (URI == null) return reject();
      var canvas = document.createElement('canvas'),
          context = canvas.getContext('2d'),
          image = new Image();
      image.addEventListener('load', function() {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      }, false);
      image.src = URI;
    });
  }



async function ImgToText(URI){
    ProcessedText = "text";
}
ImgToText();

function TxtToSpeech(){
    ImgToText();

    var msg = new SpeechSynthesisUtterance();
    msg.text = ProcessedText;
    window.speechSynthesis.speak(msg);
}

TxtToSpeech();