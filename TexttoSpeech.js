function ImgToText(){
    //JSTesseract
    
    // Tesseract.recognize(
    // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
    // 'eng',
    // { logger: m => console.log(m) }
    // ).then(({ data: { text } }) => {
    // console.log(text);
    // })

    return "gabriel is smell, yuck yuck";
}

ImgToText();

// function TxtToSpeech()
var msg = new SpeechSynthesisUtterance();
msg.text = ImgToText();
window.speechSynthesis.speak(msg);

