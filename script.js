let homeScore = 0;
let awayScore = 0;

const increaseHome = document.getElementById (`home-add`);
const minusHome = document.getElementById(`home-minus`);
const increaseAway = document.getElementById (`away-add`);
const minusAway = document.getElementById(`away-minus`);
const resetButton = document.getElementById(`reset`);

const homeScoreDisplay = document.getElementById(`home-score`);
const awayScoreDisplay = document.getElementById(`away-score`);

function updateDisplay(){
    homeScoreDisplay.textContent = homeScore;
    awayScoreDisplay.textContent = awayScore;
}

if(increaseHome && minusHome && increaseAway && minusAway && resetButton){
    increaseHome.addEventListener(`click`,  () =>{
        homeScore++;
        updateDisplay();
    });

    minusHome.addEventListener(`click`,  () =>{
        homeScore--;
        updateDisplay();
        if(homeScore < 0){
            alert("home score cannot be negative.");
            homeScore = 0;
            updateDisplay();
        }
    });

       increaseAway.addEventListener(`click`,  () =>{
        awayScore++;
        updateDisplay();
    });

    minusAway.addEventListener(`click`,  () =>{
        awayScore--;
        updateDisplay();
        if(awayScore < 0){
            alert("away score cannot be negative.");
            awayScore = 0;
            updateDisplay();
        }
    });

    resetButton.addEventListener(`click`, () => {
        homeScore = 0;
        awayScore = 0;
        updateDisplay();
    if(homeScore === 0 && awayScore === 0){
        alert("Scores have been reset to zero.");
    }
    })
}