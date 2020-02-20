var game = {
    moto: "", 
    words:  ['aprilia', 'bmw', 'ducati', 'harley', 'honda', 'ktm', 'moto guzzi', 'mv agusta', 'suzuki', 'triumph', 'yamaha'],
    currentWordIndex: (Math.floor(Math.random() * 10)),  // index of current word being guessed
    badGuess: [],      // array of guesses
    goodGuess: [],     // array of guesses that match our word
    numOfGuesses: 12,  // max guesses
    newImage: "",      // image of motorcycle to be displayed
    hasWon: false,     // flag for if we won
    numOfWins: 0,      // number of wins
    numOfLosses: 0,    // number of losses
    firstGame: true,   // check if first game

    // Main function which check if valid character and then call the other functions
    letsPlay: function() {
        if(!this.hasWon && this.numOfGuesses !=0){  // first check if the game 
            this.moto = "";
            kP = event.key.toLowerCase();  // key pushed

            if (this.firstGame) {
                document.getElementById("userguess").textContent = Array(this.words[this.currentWordIndex].length).fill("_").join(" ");
                this.firstGame = false;
                this.restart();
                return;
            }
    
            if(!this.isLetter(kP)){
                alert("Well.. that's not a letter now is it. Lets try again.");
                return false;
            }
    
    
            this.checkAlreadyPushed();
            this.buildWordReveal();
            this.printStatus();
            this.checkIfWon();
            this.checkIfMaxGuesses();
        }
    },

    // check if button has already been pushed then either count it as a guess (in badGuess) or as a matching character (in goodGuess)
    checkAlreadyPushed: function() {
        if (this.badGuess.indexOf(kP) == -1 && this.words[this.currentWordIndex].indexOf(kP) == -1) {
            this.badGuess.push(kP);
            this.numOfGuesses--;
        }
        else {
            this.goodGuess.push(kP);
        }
    },

    // function simply checks our current guesses against the current word and builds the output string
    buildWordReveal: function(){
        var moto = "";
        var wordArr = this.words[this.currentWordIndex].split("");
        for (var i = 0; i < wordArr.length; i++) {
            if (this.goodGuess.includes(wordArr[i]) || wordArr[i] === " ") {
                this.moto += wordArr[i];
            }
            else {
                this.moto += "_";
            }
        }
    },

    // update current guesses, current word (with correctly guessed characters) and number of guesses
    printStatus: function(){
        document.getElementById("currentguesses").textContent = this.badGuess.join(" ");
        document.getElementById("userguess").textContent = this.moto;
        document.getElementById("numOfGuessLeft").textContent = game.numOfGuesses;
    },

    // check if we won, increment wins, update images to corresponding motorcycle, update some text fields and play sound.  Also reset necessary variable
    checkIfWon: function() {
        if(this.moto === this.words[this.currentWordIndex]){
            this.hasWon = true;
            this.numOfWins++;
            this.imageName = "./assets/images/" + this.moto + ".png";
            document.getElementById("motopic").src = this.imageName;
            document.getElementById("numOfWins").textContent = this.numOfWins;
            document.getElementById("userguess").textContent = "Press any key to start!";
            var autoSelection = Math.ceil(Math.random() * 2);
            var audio = new Audio('./assets/audio/motosound' + autoSelection + '.mp3');
            audio.play();
            this.restart();
        }
    },

    // reset necessary variables to restart the game and select the next random word
    restart: function() {
        this.badGuess = [];
        this.goodGuess = [];
        this.currentWordIndex = Math.floor(Math.random() * 10);
        this.hasWon = false;
        this.numOfGuesses = 12;
        document.getElementById("currentguesses").textContent = "";
        document.getElementById("userguess").textContent = Array(this.words[this.currentWordIndex].length).fill("_").join(" ");
    },

    // check if we've maxed our guesses and then increment loss and reveal answer via prompt
    checkIfMaxGuesses: function() {
        if (!this.numOfGuesses) {
            alert("You're out of guesses! The answer was: " + this.words[this.currentWordIndex]);
            this.numOfLosses++;
            document.getElementById("numOfLosses").textContent = this.numOfLosses;
            this.restart();
        }
    },

    // helper function to check if key pressed was a letter
    isLetter: function(stringToCheck) {
        return stringToCheck.length === 1 && stringToCheck.match(/[a-z]/i);
    },

    // short cut helper function for console.log
    log: function(text) {
        console.log(test);
    }
};

document.onkeyup = function(event) {
    game.letsPlay();  // start the game
    console.log(game.words[game.currentWordIndex]);  // Log for TAs to cheat
}
