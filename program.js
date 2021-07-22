var buttonTranslate = document.querySelector("#button-translate")
var userInput = document.querySelector("#textarea")

var output = document.querySelector("#output")

function callback(){
    output.innerText = "Hello " + userInput.value
}

var buttonclick = buttonTranslate.addEventListener("click", callback)

