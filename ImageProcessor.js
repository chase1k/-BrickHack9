import Tesseract from 'tesseract.js';

function ImgToText(){
    //JSTesseract
    
    Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
    console.log(text);
    })

}

ImgToText();