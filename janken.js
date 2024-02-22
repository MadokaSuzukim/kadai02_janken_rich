document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.getElementsByClassName('close-button')[0];
    closeButton.onclick = function() {
        var modal = document.getElementById('resultModal');
        modal.style.display = 'none';
    };
});

// スタートボタンに音付きでゲームを開始する関数
function startWithSound() {
    var sound = document.getElementById("btn_audio");
    sound.play().then(() => {
        var backgroundMusic = document.getElementById("backgroundMusic");
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
        }
        backgroundMusic.play().catch(error => console.error("バックグラウンドミュージックの再生に失敗しました:", error));
    }).catch(error => console.error("スタート音声の再生に失敗しました:", error));
    start();
}

// ミュート切り替えの関数
function toggleMute() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    var btn_audio = document.getElementById("btn_audio");
    backgroundMusic.muted = !backgroundMusic.muted;
    btn_audio.muted = !btn_audio.muted; // スタート音声もミュート状態を同期させる
    var muteButton = document.getElementById("muteButton");
    muteButton.textContent = backgroundMusic.muted ? "Unmute" : "Mute";
}

// 終了時に音を出してモーダルを閉じる関数
function closeWithSound() {
    var sound = document.getElementById("close_audio");
    sound.play();
    var modal = document.getElementById('resultModal');
    modal.style.display = 'none';
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // 再生位置を最初に戻す
}

// ゲーム開始時の設定を行う関数
function start() {
    document.getElementById("smileButton").disabled = false;
    document.getElementById("normalButton").disabled = false;
    document.getElementById("cryButton").disabled = false;
    document.getElementById("PlayerHand").innerHTML = '';
    document.getElementById("RivalHand").innerHTML = '';
    document.getElementById("Result").innerHTML = '';
}

// その他の関数（janken, showModal, retryGame）は変更なしで保持