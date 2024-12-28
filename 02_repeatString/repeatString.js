const repeatString = function(text, count) {
    if (count < 0) {
        return 'ERROR';
    }
    let newText = '';
    for (let i = 0; i < count; i++) {
        newText += text;
    }
    return newText;
};

// Do not edit below this line
module.exports = repeatString;
