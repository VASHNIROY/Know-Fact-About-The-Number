let userInputE1 = document.getElementById("userInput");
let factE1 = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function displayResults(fact) {
    factE1.textContent = fact;
}

function httpRequest(inputVal) {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + inputVal;

    let options = {
        method: "GET"
    }

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let {
                fact
            } = jsonData;
            displayResults(fact);
        })
}

function callback(event) {
    if (event.key === "Enter") {
        let inputVal = userInputE1.value;
        if (inputVal === "") {
            alert("Enter a number");
        } else {
            httpRequest(inputVal);
        }
    }
}
userInputE1.addEventListener("keydown", callback);