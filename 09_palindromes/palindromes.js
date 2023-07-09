const palindromes = function (string) {
    let array = Array.from(string);
    const filteredArray = array.filter(  element => 
        element !== `,` && element !== ` ` && element !== `.` && element !== `!`
        )
    let formattedString = filteredArray.toString().toUpperCase();

    let oldArray = Array.from(formattedString);
    let initialArray = oldArray.filter(  element => 
        element !== `,` && element !== ` ` && element !== `.` && element !== `!`
        )
    let newArray = [];

    let length = initialArray.length - 1;

    for(let i = 0; length >= 0; i++, length--){
        newArray[i] = initialArray[length];
    }
 
    for(i = 0; i < newArray.length-1; i++){
            if(newArray[i] != initialArray[i]){
                return false;
            }
            else if (newArray[i] == initialArray[i]){
                if(newArray[i+1] == initialArray[i+1])
                    return true;
                else    
                    continue;
            }
    }
};

// Do not edit below this line
module.exports = palindromes;
