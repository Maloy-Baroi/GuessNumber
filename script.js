const generatedNumber = Math.floor(Math.random() * 20 + 1);
const hints = document.getElementById('hintsId');
let count_How_many_tries = 1;
console.log(generatedNumber);

const judgeGuess = () => {
    let guessedNumber = document.getElementById("inputNumber").value;
    let resultContainer = document.getElementById("result_");
    console.log("Tries: ", count_How_many_tries);
    if (guessedNumber === "") {
        alert("Input is empty!!!");
    } else if (generatedNumber < guessedNumber) {
        if (count_How_many_tries === 3) {
            resultContainer.innerText = "You lose!";
            setTimeout("location.reload();", 2000);
        } else {
            resultContainer.innerText = ("Answer is smaller!");
        }
    } else if (generatedNumber > guessedNumber) {
        if (count_How_many_tries === 3) {
            resultContainer.innerText = "You lose!";
            setTimeout("location.reload();", 2000);
        } else {
            resultContainer.innerText = ("Answer is greater!");
        }
    } else {
        resultContainer.innerText = ("You win!");
        setTimeout("location.reload();", 2000);
    }
    count_How_many_tries++;
}

const hintsF = () => {
    if (generatedNumber <= 5) {
        hints.innerText = "The value is between: 1-5";
    }
    else if (generatedNumber > 5 && generatedNumber <= 10) {
        hints.innerText = "The value is between: 6-10";
    }
    else if (generatedNumber > 10 && generatedNumber <=15) {
        hints.innerText = "The value is between: 11-15";
    }
    else if (generatedNumber > 15 && generatedNumber <=20) {
        hints.innerText = "The value is between: 16-20";
    }
}


