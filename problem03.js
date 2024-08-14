function runLengthEncode(str) {
    let encodedStr = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            encodedStr += str[i - 1] + count;
            count = 1;
        }
    }

    return encodedStr;
}

function runLengthDecode(str) {
    let decodedStr = '';
    let count = '';

    for (const element of str) {
        if (isNaN(element)) {
            decodedStr += element.repeat(parseInt(count));
            count = '';
        } else {
            count += element;
        }
    }

    return decodedStr;
}

console.log(runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx"));
