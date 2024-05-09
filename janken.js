// プレイヤーの手を取得する関数
function getPlayerChoice(choice) {
    return choice.id;
}

// コンピューターの手をランダムに決める関数
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 勝敗を判定する関数
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'あいこ';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'プレイヤーの勝ち';
    } else {
        return 'コンピューターの勝ち';
    }
}

// 画像を表示する関数
function displayImages(playerChoice, computerChoice) {
    const playerChoiceImg = document.getElementById('playerChoice');
    const computerChoiceImg = document.getElementById('computerChoice');

    const playerImageMap = {
        rock: './image/th.jpg',
        paper: './image/th (2).jpg',
        scissors: './image/th (1).jpg'
    };

    const computerImageMap = {
        rock: './image/th.jpg',
        paper: './image/th (2).jpg',
        scissors: './image/th (1).jpg'
    };

    playerChoiceImg.src = playerImageMap[playerChoice];
    computerChoiceImg.src = computerImageMap[computerChoice];
}

// ゲームを実行する関数
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `結果: ${result}`;
    displayImages(playerChoice, computerChoice);
}

// ボタンのクリックイベントを設定
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));