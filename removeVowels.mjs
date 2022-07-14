const vowelMap = {"a": true, "e": true, "i": true, "o":true, "u":true}

function removeVowels(sentence) {
    let newSentence = "";
    for (let i = 0; i<sentence.length; i++) {
        let ch = sentence.charAt(i).toLowerCase();
        if (!vowelMap[ch]) {
            newSentence = newSentence.concat(sentence.charAt(i));
        }
    }
    return newSentence;
}

export { removeVowels }
