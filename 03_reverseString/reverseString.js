const reverseString = function(string) {
    let arrayString = string.split(``);
    let arrayLength = arrayString.length;
    let finalString = ``;
    let i;

    for (i = 0; i < arrayLength; arrayLength--){
    finalString += arrayString[arrayLength-1];
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;


