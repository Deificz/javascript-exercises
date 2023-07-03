const repeatString = (string, num) => {
    let compile = ``;

    if(num<0)
    return `ERROR`;
    
    else{
    for(let i = 0; i < num; i++)
        compile += string;
        
    return compile;
    }
};

// Do not edit below this line
module.exports = repeatString;
