let inpCode = document.getElementById('inpCode');
let btnEncode = document.getElementById('btnEncode');
let btnEncrypt = document.getElementById('btnEncrypt');

let code = document.getElementById('code');

btnEncode.onclick = function () {
    let data = inpCode.value;
    data = btoa(data);
    code.value = data;
};

btnEncrypt.onclick = function () {
    let data = code.value;
    data = encryptData(data);
    code.value = data;
};

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
}

isLetter = function (char) {
    return char.toLowerCase() != char.toUpperCase();
};

function encryptData(rawData) {
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
    rawData = flipCase(rawData);
    return rawData;
}
