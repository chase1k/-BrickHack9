function updateSettings() {
    // Get the checkbox
    var contrastCheck = document.getElementById("contrastCheck");
    var summaryCheck = document.getElementById("summaryCheck");

    // do shit with that
    
}

function screenshot() {
    //change curser
    //onclick set coord 1 and do updating screenshot preview
    //onclickrelease set coord 2 and end preview
    //send screenshot btwn coord 1 and 2
}

function wholePage() {
    //send whole document
}

chrome.tabs.captureVisibleTab(null, {}, function (image) {
   // You can add that image HTML5 canvas, or Element.
});

