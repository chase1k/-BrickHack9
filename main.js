function updateSettings() {
    console.log("HI");

    // Get the selects
    var font = document.getElementById("font-select");
    var fontSize = document.getElementById("fontSize-select");
    var spacingLines = document.getElementById("spacingLines-select");
    var spacingWords = document.getElementById("spacingWords-select");

    // Get the checkboxes
    var contrast = document.getElementById("contrast-check");
    var synonyms = document.getElementById("synonyms-check");
    var summary = document.getElementById("summary-check");
    var tts = document.getElementById("tts-check");

    // do shit with that
    chrome.storage.local.set({ font: font }).then(() => { console.log("font(local) is set to " + value); });
    // chrome.storage.sync.set({ font: font }).then(() => { console.log("font(sync) is set to " + value); });
    
    chrome.storage.local.set({ fontSize: fontSize }).then(() => { console.log("fontSize(local) is set to " + value); });
    // chrome.storage.sync.set({ fontSize: fontSize }).then(() => { console.log("fontSize(sync) is set to " + value); });
    
    chrome.storage.local.set({ spacingLines: spacingLines }).then(() => { console.log("spacingLines(local) is set to " + value); });
    // chrome.storage.sync.set({ spacingLines: spacingLines }).then(() => { console.log("spacingLines(sync) is set to " + value); });
    
    chrome.storage.local.set({ spacingWords: spacingWords }).then(() => { console.log("spacingWords(local) is set to " + value); });
    // chrome.storage.sync.set({ spacingWords: spacingWords }).then(() => { console.log("spacingWords(sync) is set to " + value); });
    
    chrome.storage.local.set({ contrast: contrast }).then(() => { console.log("contrast(local) is set to " + value); });
    // chrome.storage.sync.set({ contrast: contrast }).then(() => { console.log("contrast(sync) is set to " + value); });
    
    chrome.storage.local.set({ synonyms: synonyms }).then(() => { console.log("synonyms(local) is set to " + value); });
    // chrome.storage.sync.set({ synonyms: synonyms }).then(() => { console.log("synonyms(sync) is set to " + value); });
    
    chrome.storage.local.set({ summary: summary }).then(() => { console.log("summary(local) is set to " + value); });
    // chrome.storage.sync.set({ summary: summary }).then(() => { console.log("summary(sync) is set to " + value); });
    
    chrome.storage.local.set({ tts: tts }).then(() => { console.log("tts(local) is set to " + value); });
    // chrome.storage.sync.set({ tts: tts }).then(() => { console.log("tts(sync) is set to " + value); });
}

function getStyleText() {
    const styling = "style=\"";

    if (localStorage["font"] != undefined) {
        styling += "font-family: '" + localStorage["font"] + "'; ";
    }
    if (localStorage["fontSize"] != undefined) {
        styling += "font-size: " + localStorage["fontSize"] + "px; ";
    }
    if (localStorage["spacingLines"] != undefined) {
        styling += "line-height: " + localStorage["spacingLines"] + "; ";
    }
    if (localStorage["spacingWords"] != undefined) {
        styling += "word-spacing: " + 3*localStorage["spacingWords"] + "px; ";
    }

    if (localStorage["contrast"].checked == true){
        styling += "background-color: white; ";
        styling += "color: black; ";
    } else {
        styling += "background-color: rgb(248, 240, 227); ";
        styling += "color: black; ";
    }

    styling += "\"";

    return styling;
}

function displayText(inputText) {
    const final = "<div id=\"ChromeExtension:Color-Pick.com\" style=\"position: fixed; min-width: 200px; max-width: 80%; min-height: 200px; max-height: 80%; cursor: default; padding: 4px;\">";
    const finalText = "<p class=\"translatedText\"";
    const styling = getStyleText();
    const text = inputText;

    if (localStorage["synonyms"].checked == true){
        //text = <function that changes synonyms>(text);
    }

    if (localStorage["summary"].checked == true){
        
        //text = <function that sumarizes test>(text);
    }

    if (localStorage["tts"].checked == true){
        //figure out tts
    }

    finalText += styling + ">" + text + "</p>";

    final += finalText + "</div>";

    //write to new page thats floating or whatever
}