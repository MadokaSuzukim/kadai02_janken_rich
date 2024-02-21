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
function janken(playerHand) {
    // ボタンの状態をリセット
    document.getElementById("smileButton").disabled = true;
    document.getElementById("normalButton").disabled = true;
    document.getElementById("cryButton").disabled = true;
  
    // プレイヤーの選択を表示
    document.getElementById("PlayerHand").innerHTML = playerHand;
  
    // 結果表示ロジック（ここではシンプルな例を示します）
    var result = "選択した感情: " + playerHand;
    document.getElementById("Result").innerHTML = result;
  
    // モーダル表示関数を呼び出す
    showModal(result);
  }
  
  function showModal(result) {
    var modal = document.getElementById('resultModal');
    var modalText = document.getElementById('modalText');
    modalText.innerText = result;
    modal.style.display = 'block';
  }
  追加の修正
  startWithSound関数でstart()関数を呼び出す前に、音声を再生する処理が正しく行われていますが、start関数内でgameLoop関数を設定する処理が2回繰り返されているため、1回だけにしてください。
  これらの修正を行うことで、提供されたコードの機能が期待通りに動作するようになります。もしまだ問題が解決しない場合は、具体的なエラーメッセージや期待する動作、現在の動作の詳細を教えてください。
  
  


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