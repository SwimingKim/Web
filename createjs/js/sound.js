var soundID = "Thunder";

function loadSound() {
    createjs.Sound.registerSound("../assets/thunder.ogg", soundID);
}

function playSound() {
    createjs.Sound.play(soundID);
}