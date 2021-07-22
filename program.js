var buttonTranslate = document.querySelector("#btn-click")

var websiteInput = document.querySelector("#main-text")

var userOutput = document.querySelector("#user-output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function changedUrl(text) {
    return finalUrl = serverUrl + "?" + "text=" + text
}

function errorhandler(error){
    console.log("error occured" + error)
    alert ("Sorry!! Server is Down")
}
function clicked() {

    var userUrl = changedUrl(websiteInput.value)

    fetch(userUrl)
        .then(response => response.json())
        .then(function (modifiedJson){
           
           userOutput.innerText = modifiedJson.contents.translated
        })
 .catch (errorhandler)
}

buttonTranslate.addEventListener("click", clicked)