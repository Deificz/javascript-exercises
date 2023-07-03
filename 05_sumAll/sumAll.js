const sumAll = function(arg1, arg2) {
    let max,min;
    let typeArg1 = typeof arg1;
    let typeArg2 = typeof arg2;
    
    if(typeArg1 == `number` && typeArg2 == `number` && arg1 > 0 && arg2 > 0){
        if(arg1>arg2){
            max=arg1;
            min=arg2;
        }
        else if(arg1<arg2){
            min=arg1;
            max=arg2;
        }

        let length = (max-min)+1;
        let total = 0;
        
        for(i = 0; i < length; i++){
            total += min;
            min++;
        }

        return total;
    }

    else
        return `ERROR`;
};

// Do not edit below this line
module.exports = sumAll;
