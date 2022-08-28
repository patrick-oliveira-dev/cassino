const highBtn = document.getElementById("highBtn")
const lowBtn = document.getElementById("lowBtn")
const closeModalBtn = document.getElementById("closeModalbtn")
const modalWrapper = document.querySelector(".modal-wrapper")
let record = parseInt(document.getElementById("amount").textContent)
document.getElementById("record").innerHTML = record


highBtn.onclick = function () {
    //modalWrapper.classList.remove("invisible")
    let inputBet = parseInt(document.getElementById("inputBet").value)
    let amountCurrent = parseInt(document.getElementById("amount").textContent)
    let rollDice = getRandomIntInclusive(1, 6)
    document.getElementById("diceResult").innerHTML = rollDice

    if (rollDice > 3) {
        newAmount = amountCurrent + inputBet
        document.getElementById("diceResult").classList.add("bg-green-700")
        sleep(300).then(() => {
            document.getElementById("diceResult").classList.remove("bg-green-700")
        });
    } else {
        newAmount = amountCurrent - inputBet
        document.getElementById("diceResult").classList.add("bg-red-600")
        sleep(300).then(() => {
            document.getElementById("diceResult").classList.remove("bg-red-600")
        });
    }

    if(record < newAmount) {
        record = newAmount
        document.getElementById("record").innerHTML = record
    }

    loseConditionValidation(newAmount)
}

lowBtn.onclick = function () {
    //modalWrapper.classList.remove("invisible")
    let inputBet = parseInt(document.getElementById("inputBet").value)
    let amountCurrent = parseInt(document.getElementById("amount").textContent)
    let rollDice = getRandomIntInclusive(1, 6)
    document.getElementById("diceResult").innerHTML = rollDice

    if (rollDice < 4) {
        newAmount = amountCurrent + inputBet
        document.getElementById("diceResult").classList.add("bg-green-700")
        sleep(300).then(() => {
            document.getElementById("diceResult").classList.remove("bg-green-700")
        });
    } else {
        newAmount = amountCurrent - inputBet
        document.getElementById("diceResult").classList.add("bg-red-600")
        sleep(300).then(() => {
            document.getElementById("diceResult").classList.remove("bg-red-600")
        });
    }

    if(record < newAmount) {
        record = newAmount
        document.getElementById("record").innerHTML = record
    }

    loseConditionValidation(newAmount)

}

closeModalBtn.onclick = function () {
    document.getElementById("record").innerHTML = 50
    modalWrapper.classList.add("invisible")
}


document.addEventListener('keydown', function (event) {
    const isEscKey = event.key === "Escape"

    if(isEscKey) {
        document.getElementById("record").innerHTML = 50
        modalWrapper.classList.add("invisible")
    }
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function loseConditionValidation(newAmount) {
    if(newAmount == 0) {
        document.getElementById("amount").innerHTML = 50
        document.getElementById("inputBet").value = 10
        document.getElementById("diceResult").innerHTML = 0
        modalWrapper.classList.remove("invisible")
    } else {
        document.getElementById("amount").innerHTML = newAmount
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }