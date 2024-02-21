// ドキュメントが完全に読み込まれた後に実行される関数群
document.addEventListener("DOMContentLoaded", function() {
    // モーダルを閉じるボタンの設定
    var closeButton = document.getElementsByClassName('close-button')[0];
    closeButton.onclick = function() {
        var modal = document.getElementById('resultModal');
        modal.style.display = 'none';
    };
});

// スタートボタンに音付きでゲームを開始する関数
function startWithSound() {
    var sound = document.getElementById("btn_audio");
    sound.play();
    start();
}

    // スタートボタンがクリックされた時の関数内で音楽再生を制御
function startWithSound() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    
    // ミュートを解除して再生開始（ブラウザの自動再生ポリシーを回避）
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
    }
    backgroundMusic.play();

    // その他のスタート時の処理
    start(); // ゲーム開始の関数を呼び出す
}

 // バックグラウンドミュージックを再生
 var backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic) {
        backgroundMusic.muted = false; // ミュートを解除
        backgroundMusic.play().catch(e => console.error("バックグラウンドミュージックの再生に失敗しました:", e));
    }
    
    function closeWithSound() {
        // 終了時の音声を再生
        var sound = document.getElementById("close_audio");
        sound.play();
    
        // バックグラウンドミュージックを停止
        var backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // 再生位置を最初に戻す
    }

// ゲーム開始時の設定を行う関数
function start() {
    // ゲーム開始に必要な初期設定を行う
    document.getElementById("smileButton").disabled = false;
    document.getElementById("normalButton").disabled = false;
    document.getElementById("cryButton").disabled = false;
    document.getElementById("PlayerHand").innerHTML = '';
    document.getElementById("RivalHand").innerHTML = '';
    document.getElementById("Result").innerHTML = '';
}

// Muteボタンの動作を設定する関数
function toggleMute() {
    var audioElement = document.getElementById("btn_audio");
    audioElement.muted = !audioElement.muted;

    // Muteボタンのテキスト更新
    var muteButton = document.getElementById("muteButton");
    muteButton.textContent = audioElement.muted ? "Unmute" : "Mute";
}
// ミュート切り替えの関数（ユーザーが自由に音をオン/オフできるようにする）
function toggleMute() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.muted = !backgroundMusic.muted;
}
// プレイヤーの選択に応じた処理を行う関数
function janken(playerHand) {
    // プレイヤーの選択を表示
    document.getElementById("PlayerHand").innerHTML = playerHand;
  
    // モーダルに結果を表示
    showModal("選択した感情: " + playerHand);

    // 他のボタンを無効化
    document.getElementById("smileButton").disabled = true;
    document.getElementById("normalButton").disabled = true;
    document.getElementById("cryButton").disabled = true;
}

// 結果表示用のモーダルを表示する関数
function showModal(result) {
    var modal = document.getElementById('resultModal');
    var modalText = document.getElementById('modalText');
    modalText.innerText = result;
    modal.style.display = 'block';
}

// 終了時に音を出してモーダルを閉じる関数
function closeWithSound() {
    var sound = document.getElementById("close_audio");
    sound.play();
    var modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

// 再トライボタンの動作を設定する関数
function retryGame() {
    var modal = document.getElementById('resultModal');
    modal.style.display = 'none';
    start();
}

