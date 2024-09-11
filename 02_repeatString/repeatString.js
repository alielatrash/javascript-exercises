const number = Math.floor(Math.random() * 1000);

const repeatString = function (word, num) {
    if (num < 0) {
        return "ERROR";
    } else {
    
    let string = "";
    for (i=0; i < num; i++) {
        string += word;
    }
        return string;   
    }

}
    
repeatString('',number);

// Do not edit below this line
module.exports = repeatString;
