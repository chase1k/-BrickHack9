// import Tesseract from 'tesseract.js';
// import { createWorker } from 'tesseract.js';
// import * as pyTesseract from 'pytesseract';
// import * as np from 'numpy';
// import { Image } from 'PIL';

var ProcessedText = "achoo"
async function ImgToText(){
    //JSTesseract
        
    // const worker = await createWorker({
    // logger: m => console.log(m)
    // });

    // (async () => {
    // await worker.loadLanguage('eng');
    // await worker.initialize('eng');
    // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    // console.log(text);
    // await worker.terminate();
    // })();

    // var ProcessedText = "text"
    // return ProcessedText;
    // ProcessedText = "text";

    // var filename, img1, text;
    // jsTesseract.jstesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe";
    // filename = "backgroundTileSmall.png";
    // img1 = np.array(Image.open(filename));
    // text = jsTesseract.image_to_string(img1);

    // Tesseract.recognize(
    //     'https://tesseract.projectnaptha.com/img/eng_bw.png',
    //     'eng',
    //     { logger: m => console.log(m) }
    //   ).then(({ data: { text } }) => {
    //     console.log(text);
    //   })

    console.log(text);
    let ProcessedText = "text";

}

function TxtToSpeech(text){
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}