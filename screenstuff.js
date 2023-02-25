var el = document.getElementById("screenshot");
if(el){
  el.addEventListener("click", screenshot);
}

function screenshot() {
    //chrome.tabs.captureVisibleTab(null, {}, function (image) {
//     var img = new Image();
//     img.onload = function() {
//         var canvas = document.createElement('canvas');
//         canvas.width = WIDTH;
//         canvas.height = HEIGHT;
//         var context = canvas.getContext('2d');
//         // Assuming px,py as starting coordinates and hx,hy be the width and the height of the image to be extracted
//         context.drawImage(img, px, py, hx, hy, 0, 0, WIDTH, HEIGHT);
//         var image = canvas.toDataURL('image/png');
//         // You could deal with croppedUri as cropped image src.
//     };
//     img.src = image;
// });
}
document.getElementById("wholePage").addEventListener("click", wholePage);
// var el = document.getElementById("wholePage");
// if(el){
//   el.addEventListener("click", wholePage);
// }
function wholePage() {
    let capturing = chrome.tabs.captureVisibleTab();
    capturing.then(onCaptured, onError);
    console.log("done");
}

function onCaptured(imageUri) {
    console.log(imageUri);
}
  
function onError(error) {
    console.log(`Error: ${error}`);
}