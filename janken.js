document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.getElementsByClassName('close-button')[0];
    closeButton.onclick = function() {
        var modal = document.getElementById('resultModal');
        modal.style.display = 'none';
    };
});

function startWithSound() {
    var sound = document.getElementById("btn_audio");
    sound.play();
    start();
}

function start() {
    document.getElementById("smileButton").disabled = false;
    document.getElementById("normalButton").disabled = false;
    document.getElementById("cryButton").disabled = false;
    document.getElementById("PlayerHand").innerHTML = '';
    document.getElementById("RivalHand").innerHTML = '';
    document.getElementById("Result").innerHTML = '';
}

function janken(playerHand) {
    document.getElementById("PlayerHand").innerHTML = playerHand;
    showModal("結果をここに表示");
}

function showModal(result) {
    var modal = document.getElementById('resultModal');
    var modalText = document.getElementById('modalText');
    modalText.innerText = result;
    modal.style.display = 'block';
}

function closeWithSound() {
    var sound = document.getElementById("close_audio");
    sound.play();
    var modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

function retryGame() {
    var modal = document.getElementById('resultModal');
    modal.style.display = 'none';
    start();
}

function mute() {
    var sound = document.getElementById("btn_audio");
    sound.muted = !sound.muted;
}