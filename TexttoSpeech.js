import { ImgToTxt } from './ImageProcessor';

text = console.log(ImgToTxt);

var msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);