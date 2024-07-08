let game = [];
let round = [];
let colors = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

$(".btn").click(function (event) {
    let id = event.target.id;
    playSound(id);
    animateTag("#" + id, "pressed");
    round.push(id);
    checkMatched();
});

function playSound(path) {
    let sound = new Audio("sounds/" + path + ".mp3");
    sound.play();
}

function animateTag(selector, style, delay = 100) {
    $(selector).addClass(style);

    setTimeout(() => {
        $(selector).removeClass(style);
    }, delay);
}

function changeHeader(action) {
    let headingText = "Game Over,  Press A Key to Restart";
    if (action === "level")
        headingText = "Level " + level;

    $("#level-title").text(headingText);
}

$(document).keypress(function () {
    if (!started) {
        started = true;
        nextSequence();
    }
});

function nextSequence() {
    let random = ~~(Math.random() * 4);
    let color = colors[random];

    game.push(color);
    level++;
    changeHeader("level");

    setTimeout(() => {
        $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(color);
    }, 1000);
}

function checkMatched() {
    let c = round.length - 1;

    if (round[c] !== game[c])
        gameOver();
    else if (round.length === game.length) {
        round = [];
        setTimeout(() => nextSequence(), 200);
    }

}

function gameOver() {
    started = false;
    level = 0;
    game = [];
    round = [];

    playSound("wrong");
    animateTag("body", "game-over", 200);
    changeHeader(null);
}