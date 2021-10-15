function isPalindrome (word) {
   
    let letterList = [];
    let reversedLetterList = [];
    let isFalse = 0;

    for (let i of word) {
        letterList.push(i);
    }

    for (let i of word) {
        reversedLetterList.unshift(i);
    }

    for (n = 0; n < letterList.length; n++) {
        if (letterList[n] !== reversedLetterList[n]) {
            isFalse++;
        }
    }
    if (!(isFalse > 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('araro'));