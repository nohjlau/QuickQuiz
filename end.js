const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-button');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('final-score');

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("Clicked the save button!");
    e.preventDefault();

}