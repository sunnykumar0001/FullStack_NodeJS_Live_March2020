function flipCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            if (str[i] === str[i].toLowerCase()) {
                newStr += str[i].toUpperCase();
            } else {
                newStr += str[i].toLowerCase();
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};


isLetter = function (char) {
    return char.toLowerCase() != char.toUpperCase();
}

module.exports = {
    flipCase,
    isLetter
};

