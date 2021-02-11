import { getTranslation, getLanguages } from './api.js'

const displayOptions = () => {
    const inputStage = document.querySelector("#searchInputs");
    const testText = document.createElement("h1")
    testText.textContent = "Work!"
    inputStage?.appendChild(testText)
    
}

displayOptions()
getTranslation("It was you who broke my mason plate", "ja", "en")
getLanguages()