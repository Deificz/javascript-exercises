const fibonacci = function(num) {
    let initialNum1 = 1;
    let initialNum2 = 0;
    let nextVal = 0;
    
    if(num < 0)
    return `OOPS`;
    
    for(let i = 0; i < num; i++){
        nextVal += initialNum1;
        initialNum1 = initialNum2;
        initialNum2 = nextVal;
    }
    return nextVal;
};

// Do not edit below this line
module.exports = fibonacci;
