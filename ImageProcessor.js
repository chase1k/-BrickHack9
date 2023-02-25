// import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

async function ImgToText(){
    //JSTesseract
    
    // Tesseract.recognize(
    // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
    // 'eng',
    // { logger: m => console.log(m) }
    // ).then(({ data: { text } }) => {
    // console.log(text);
    // })
        

    const worker = await createWorker({
    logger: m => console.log(m)
    });

    (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(text);
    await worker.terminate();
    })();

    return text;
}

ImgToText();

// function TxtToSpeech()
var msg = new SpeechSynthesisUtterance();
msg.text = ImgToText();
window.speechSynthesis.speak(msg);