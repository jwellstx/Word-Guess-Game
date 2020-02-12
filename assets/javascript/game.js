var guesses = [];
var words = ['ruffio', 'nickel', 'lola'];
var foundLetters = [];
var status = [];


document.onkeyup = function(event) {
    var tmp = "";
    var currentWord = words[0];
    guesses.push(event.key.toLowerCase());

    var newArr = currentWord.split("");
    newArr.forEach(function(val){
        if (guesses.includes(val)) {
            log(val);
            tmp = tmp + val;
        }
        else {
            tmp = tmp + "_";
        }
    });

    

    log(tmp);
    
    log("HELDFLO");


};


function log(text) {
    console.log(text);
}