/* ----- Display contents ----- */
const wordsList = [
    'Developer!',
    'Programmer!',
    'Sportman!',
    'Crossfitter!',
];

/* ----- Declaration of Variables ----- */
const span = document.querySelector('span');

let wordIndex = 0;
let characterIndex = 0;
let skipUpdate = 0;
let reverseType = false;

/* ----- Function ----- */

function multitype(content, element) {
    const intervalID = setInterval(() => {
    if (skipUpdate) {
        skipUpdate--
        return
    }
    if (!reverseType) {
        skipUpdate = 2
        element.innerText += content[wordIndex][characterIndex]
        characterIndex++
    }
    else {
        element.innerText = element.innerText.slice(0, element.innerText.length - 1)
        characterIndex--
    }
    
    if (characterIndex === content[wordIndex].length) {
        skipUpdate = 5
        reverseType = true;
    }

    if (element.innerText.length === 0 && reverseType){
        reverseType = false;
        characterIndex = 0;
        wordIndex++
    }

    if (wordIndex === content.length) {
        wordIndex = 0;
    }
    }, 100)
}

multitype(wordsList, span)