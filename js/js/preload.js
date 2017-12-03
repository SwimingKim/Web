function loadImage() {
    var preload = new createjs.LoadQueue(true);
    preload.addEventListener("fileload", handleFileComplete);
    preload.loadFile("../assets/seo.png");
}

function handleFileComplete(event) {
    document.body.appendChild(event.result);
}