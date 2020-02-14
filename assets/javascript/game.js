var game = {
    words:  ['ruffio', 'nickel', 'lola'],
    currentWordIndex: 0,  // index of current word being guessed
    cG: "",  // current guess which is empty by default
    guesses: [], // array of guesses
};



// var guesses = [];
// var words = ['ruffio', 'nickel', 'lola'];
// var foundLetters = [];
// var status = [];


document.onkeyup = function(event) {
    var tmp = "";
    kP = event.key.toLowerCase();  // key pushed

    game.guesses.indexOf(kP) == -1 ? game.guesses.push(kP) : log("key has already been pushed");

    var currentGuessId = document.getElementById("currentguesses");
    currentGuessId.textContent = game.guesses.join(" ");
    log(game.guesses);


    var newArr = game.words[game.currentWordIndex].split("");
    newArr.forEach(function(val){
    if (game.guesses.includes(val)) {
            log(val);
            tmp = tmp + val;
    }
    else {
            tmp = tmp + "_";
    }
    });

    var justin = document.getElementById("userguess");
    justin.textContent = tmp;

}


//     var tmp = "";
//     var currentWord = words[0];
//     guesses.push(event.key.toLowerCase());

//     var newArr = currentWord.split("");
//     newArr.forEach(function(val){
//         if (guesses.includes(val)) {
//             log(val);
//             tmp = tmp + val;
//         }
//         else {
//             tmp = tmp + "_";
//         }
//     });

//     // document.getElementById("userguess").textContent = tmp;
//     $("#userguess").html(tmp);

//     // $("currentguesses").textContent = guesses.join(" ");

//     if (tmp === currentWord) {
//         $("#userguess").html("YOU WON BITCH");
//         guesses = [];
//     }

// };


function log(text) {
    console.log(text);
}