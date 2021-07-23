var Button = document.querySelector("#button")
var userInput = document.querySelector("textarea")
var userOutput = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function transformUrl(text) {
    var lastUrl = serverUrl + "?" + "text=" + text;
    return lastUrl;
}

function errorhandler(error) {
console.log("error occured!!",error)
alert("There is some Issues with server Try Again after 1 Hour!!")
}

function clickhandler() {

    var takingUserInput = userInput.value //Input

    fetch(transformUrl(takingUserInput))
        .then(serverResponse => serverResponse.json())
        .then(modifiedResponse => {
            var finalOutput = modifiedResponse.contents.translated; //processing
            userOutput.innerText = finalOutput; //Output
        })
    .catch(errorhandler)
}

Button.addEventListener("click", clickhandler)