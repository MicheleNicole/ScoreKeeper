/*instead of selecting and defining them all twice, turned them into objects */
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};

const resetButton = document.querySelector('#reset'); /*the reset button */
const winningScoreSelect = document.querySelector('#playto');/*the select with the winning score options */
let winningScore = 3; /*defining this as the lowest value but changing its' value when the option is clicked later */
let isGameOver = false;

/*updating the scores with a function that takes player and opponent as p1 & p2 */
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.style.color = "#84ff7b";
            opponent.display.style.color = "#ff71bf";
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
};

/*actually updating the scores when the buttons are clicked */
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);/*here the opponent and player come in, in this case p1 is the player and p2 is the opponent */
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);/*the opposite of above */
});

/*the reset function */
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.style.color = "#b900ff"
        p.button.disabled = false;
    }
}

/*to reset the game when the button is clicked */
resetButton.addEventListener('click', reset);

/*changing the winning score form the select and resetting the game when it's changed*/
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
