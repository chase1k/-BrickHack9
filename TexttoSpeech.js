import ImageProcessor from BRICKHACK9;

var msg = new SpeechSynthesisUtterance();
msg.text = ImageProcessor.imgToText();
window.speechSynthesis.speak(msg);