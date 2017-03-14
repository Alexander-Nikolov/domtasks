var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = "skyblue";
// ctx.fillRect(0, 0, 1000, 300);
// ctx.fillStyle = "green";
// ctx.fillRect(0, 300, 1000, 700);


// var riverX = 800;
// var riverY = 299;
// ctx.beginPath();
// ctx.moveTo(riverX, riverY);
// ctx.lineJoin = "round";
// while (riverY <= 1000) {

//     if (riverY % 2 == 0) {
//         ctx.lineTo(riverX, riverY);
//     } else {
//         ctx.lineTo(riverX + 3, riverY);
//     }

//     riverY += 15;
// }
// riverY = 1000;

// ctx.lineTo(riverX, riverY);
// riverX -= 100;
// ctx.lineTo(riverX, riverY);

// while (riverY >= 299) {

//     if (riverY % 2 == 0) {
//         ctx.lineTo(riverX, riverY);
//     } else {
//         ctx.lineTo(riverX - 3, riverY);
//     }

//     riverY -= 15;
// }
// riverY = 299;
// ctx.lineTo(riverX, riverY);
// ctx.closePath();
// ctx.fillStyle = "blue";
// ctx.fill();

// function House(x, y, floors) {
//     this.x = x;
//     this.y = y;
//     this.floors = floors;

//     this.floorsWidth = 250;
//     this.floorsHeigth = 200;

// }


// House.prototype.draw = function () {
//     ctx.strokeRect(this.x, this.y, this.floorsWidth, this.floorsHeigth * this.floors);

//     for (var index = 0; index < this.floors; index++) {
//         ctx.fillStyle = "gray";
//         ctx.fillRect(this.x, this.floorsHeigth * index + this.y, this.floorsWidth, this.floorsHeigth);

//         var leftWindowPosX = (this.floorsWidth / 4) + this.x - 40;
//         var leftWindowPosY = (this.floorsHeigth * index) + this.y + (this.floorsHeigth / 4);
//         ctx.fillStyle = "yellow";
//         ctx.fillRect(leftWindowPosX, leftWindowPosY, 40, 40);

//         var rightWindowPosX = (this.floorsWidth - this.floorsWidth / 4) + (this.x);
//         var rightWindowPosY = (this.floorsHeigth * index) + this.y + (this.floorsHeigth / 4);
//         ctx.fillRect(rightWindowPosX, rightWindowPosY, 40, 40);

//         if (this.floors == index + 1) {
//             var doorPosX = (this.floorsWidth / 2) + (this.x) - 25;
//             var doorPosY = (this.floorsHeigth * (index + 1)) + this.y - 100 ;
//             ctx.fillStyle = "brown";
//             ctx.fillRect(doorPosX, doorPosY, 50, 100);
//         }

//     }
//     ctx.beginPath();
//     ctx.moveTo(this.x - 10, this.y);
//     ctx.lineTo(this.x + (this.floorsWidth / 2), this.y - (this.floorsHeigth / 2));
//     ctx.lineTo(this.x + this.floorsWidth + 10, this.y);
//     ctx.closePath();
//     ctx.fillStyle = "firebrick";
//     ctx.fill();
// }

// var house = new House(200, 200, 2);
// house.draw();

// ctx.lineTo(this.x + this.floorsWidth + 10, this.y);
// ctx.closePath();








var x = 200;
var y = 600;
function draw(step) {
    ctx.clearRect(0, 0, 1000, 1000);
    if (step >= 1) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 40);
        ctx.lineTo(x + 100, y - 40);
        ctx.lineTo(x + 100, y);
    }
    if (step >= 2) {
        ctx.moveTo(x + 50, y - 40);
        ctx.lineTo(x + 50, y - 300);
    }
    if (step >= 3) {
        ctx.lineTo(x + 200, y - 300);
        ctx.lineTo(x + 200, y - 250);
        ctx.moveTo(x + 200, y - 250);
        ctx.closePath();
        ctx.stroke();
    }
    if (step >= 4) {
        ctx.beginPath();
        ctx.arc(x + 200, y - 220, 30, 0, 2 * Math.PI);
    }
    if (step >= 5) {
        ctx.moveTo(x + 200, y - 190);
        ctx.lineTo(x + 200, y - 170);
        ctx.lineTo(x + 140, y - 130);
    }
    if (step >= 6) {
        ctx.moveTo(x + 200, y - 170);
        ctx.lineTo(x + 260, y - 130);
    }
    if (step >= 7) {
        ctx.moveTo(x + 200, y - 170);
        ctx.lineTo(x + 200, y - 80);
    }
    if (step >= 8) {
        ctx.moveTo(x + 200, y - 80);
        ctx.lineTo(x + 140, y - 40);
    }
    if (step >= 9) {
        ctx.moveTo(x + 200, y - 80);
        ctx.lineTo(x + 260, y - 40);
    }
    ctx.stroke();
}






var guessedWords = document.getElementById('guessedWords');
var usedLettersDiv = document.getElementById('usedLetters');
var wordDiv = document.getElementById('word');
var info = document.getElementById('info');

var game = {};
game.words = ['this', 'exercise', 'was', 'fun', 'something', 'random'];
game.chosenWord = '';
game.lettersToGuess = game.chosenWord.length;
game.usedLetters = [];
game.wordBoxes = null;
game.mistakes = 0;

game.getWord = function () {
    game.chosenWord = game.words[Math.floor(Math.random() * game.words.length)];
    game.lettersToGuess = game.chosenWord.length;
    return game.chosenWord;
};

game.putWord = function (word) {
    for (var index = 0; index < word.length; index++) {
        var letterBox = document.createElement('span');
        letterBox.textContent = '?';
        wordDiv.appendChild(letterBox);
    }
    game.wordBoxes = document.querySelectorAll('#word>span');
};

game.guess = function (guess) {
    var guess = guess.toLowerCase();
    for (var index = 0; index < game.usedLetters.length; index++) {
        game.usedLetters[index];
        if (game.usedLetters[index] == guess) {
            info.textContent = 'You already used that letter';
            return;
        }
    }
    if (guess.length > 1) {
        if (guess == game.chosenWord) {
            info.textContent = 'Correct Word';
            guessedWords.innerHTML += game.chosenWord + '<br>';
            game.words.splice(game.words.indexOf(game.chosenWord), 1);
            for (var index = 0; index < game.chosenWord.length; index++) {
                var letter = game.chosenWord.charAt(index);
                game.wordBoxes[index].textContent = letter;
            }
            setTimeout(function () {
                if (game.words.length <= 0) {
                    win();
                } else {
                    game.usedLetters = [];
                    game.displayUsed();
                    wordDiv.innerHTML = '';
                    game.begin();
                }
            }, 1000);
        } else {
            info.textContent = 'Wrong Word';
            game.mistakes++;
            draw(game.mistakes);
            lose();
        }
    } else {
        var hasLetter = false;
        for (var index = 0; index < game.chosenWord.length; index++) {
            var letter = game.chosenWord.charAt(index);
            if (letter == guess) {
                game.wordBoxes[index].textContent = letter;
                game.lettersToGuess--;
                hasLetter = true;
            }
        }
        if (hasLetter) {
            info.textContent = 'Correct Letter';
            if (game.lettersToGuess == 0) {
                setTimeout(function () {
                    info.textContent = 'Correct Word';
                    guessedWords.innerHTML += game.chosenWord + '<br>';
                    game.words.splice(game.words.indexOf(game.chosenWord), 1);
                }, 1000);
                setTimeout(function () {
                    if (game.words.length <= 0) {
                        win();
                    } else {
                        game.usedLetters = [];
                        game.displayUsed();
                        wordDiv.innerHTML = '';
                        game.begin();
                    }
                }, 1000);
            }
        } else {
            info.textContent = 'Wrong Letter';
            game.mistakes++;
            draw(game.mistakes);
            lose();
        }
        game.usedLetters.push(guess);
        game.displayUsed()
    }

}

game.displayUsed = function () {
    usedLettersDiv.textContent = '';
    for (var index = 0; index < game.usedLetters.length; index++) {
        usedLettersDiv.textContent += game.usedLetters[index] + ' ';
    }
}

game.begin = function () {
    info.textContent = 'New Word';
    game.putWord(game.getWord());
}



var input = document.querySelector('#words>input');
var readyToGuess = false;

input.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        var intp = input.value.trim();
        if (intp.length > 0 && readyToGuess) {
            game.guess(intp)
            input.value = '';
        }
    }
}, false);
input.addEventListener('focus', function () {
    readyToGuess = true;
}, false);

input.addEventListener('blur', function () {
    readyToGuess = false
}, false);


function lose() {
    if (game.mistakes >= 9) {
        document.body.style.background = 'red';
        document.querySelector('#words').style.visibility = 'hidden';
        info.style.fontSize = '3em';
        info.textContent = 'Game Over';
    }
}

function win() {
    document.body.style.background = 'green';
    document.querySelector('#words').style.visibility = 'hidden';
    info.style.fontSize = '3em';
    info.textContent = 'You win!';
}




setTimeout(function () {
    game.begin()
    input.focus();
}, 500);





