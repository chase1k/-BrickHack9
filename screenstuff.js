document.getElementById("screenshot").addEventListener("click", screenshot);

function screenshot() {
    alert("hello");
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
    let capturing = chrome.tabs.captureVisibleTab(null, function(img) {
        var xhr = new XMLHttpRequest(), formData = new FormData();  
        formData.append("img", img);
        xhr.open("POST", "http://myserver.com/submitImage", true);
        xhr.send(formData);
    });
    capturing.then(onCaptured, onError);
    alert("done");
    
}

function onCaptured(imageUri) {
    alert(imageUri)
    // convertURIToImageData(imageUri).then(function(imageData) {
    //     // Here you can use imageData
    //     alert(imageData);
    //   });
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