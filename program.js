var buttonTranslate = document.querySelector("#button-translate")
var userInput = document.querySelector("#textarea")
function callback(){
    console.log("CLicked")
    console.log("Input" , userInput.value)
}

var buttonclick = buttonTranslate.addEventListener("click", callback)

