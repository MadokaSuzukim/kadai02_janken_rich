document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.getElementsByClassName('close-button')[0];
    closeButton.onclick = function() {
        var modal = document.getElementById('resultModal');
        modal.style.display = 'none';
    };
});

function startWithSound() {
    // スタート音声の再生
    var sound = document.getElementById("btn_audio");
    sound.play().then(() => {
        // バックグラウンドミュージックの再生を試みる
        var backgroundMusic = document.getElementById("backgroundMusic");
        // ここでミュート状態を確認し、ミュートを解除する必要はありません。
        // ユーザーが直接操作した結果として再生を試みることで、ブラウザの自動再生ポリシーに対応します。
        backgroundMusic.play().catch(error => console.error("バックグラウンドミュージックの再生に失敗しました:", error));
    }).catch(error => {
        console.error("スタート音声の再生に失敗しました:", error);
    });
}

// // スタートボタンに音付きでゲームを開始する関数
// function startWithSound() {
//     var sound = document.getElementById("btn_audio");
//     sound.play().then(() => {
//         var backgroundMusic = document.getElementById("backgroundMusic");
//         if (backgroundMusic.muted) {
//             backgroundMusic.muted = false;
//         }
//         backgroundMusic.play().catch(error => console.error("バックグラウンドミュージックの再生に失敗しました:", error));
//     }).catch(error => console.error("スタート音声の再生に失敗しました:", error));
//     start();
// }

// ミュート切り替えの関数
function toggleMute() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    var btn_audio = document.getElementById("btn_audio");
    backgroundMusic.muted = !backgroundMusic.muted;
    btn_audio.muted = !btn_audio.muted; // スタート音声もミュート状態を同期させる
    var muteButton = document.getElementById("muteButton");
    muteButton.textContent = backgroundMusic.muted ? "音を出す" : "音を消す";
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
    // 要素を非表示にする
    document.getElementById("playerEmotion").style.display = 'none';
    document.getElementById("opponentEmotion").style.display = 'none';
    document.addEventListener("DOMContentLoaded"), function() {
    }
    // document.addEventListener("DOMContentLoaded", function() {
};

const cards = [
 { image: "image/cry.png", alt: "泣いている", text: "泣いてるね。どんな気持ちなのかな？" },
 { image: "image/angry.png", alt: "怒っている", text: "怒ってる？何かいやなことがあったのかな？" },
 { image: "image/laugh.png", alt: "笑っている", text: "何か楽しいことがあったのかな？" }
    ];

document.addEventListener("DOMContentLoaded", function() {
    showRandomCard(); // テスト用の直接呼び出し
});

function showRandomCard() {
    console.log("showRandomCard is called");
    const selectedCard = cards[Math.floor(Math.random() * cards.length)]; // ランダムにカードを選択
    console.log(selectedCard); // デバッグ用ログ
    const cardContainer = document.getElementById('cardContainer');
    // カードの画像とテキストをコンテナに設定
    cardContainer.innerHTML = `
        <img src="${selectedCard.image}" alt="${selectedCard.alt}" style="max-width:100%;">
        <p>${selectedCard.text}</p>
    `;
    cardContainer.style.display = 'block'; // カードコンテナを表示
}   
function showModal(result) {
    var modal = document.getElementById('resultModal');
    var modalText = document.getElementById('modalText');
    modalText.innerText = result;
    modal.style.display = 'block';
    showRandomCard(); // 結果表示時にランダムなカードも表示
}