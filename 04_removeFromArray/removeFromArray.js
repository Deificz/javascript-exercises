const removeFromArray = function(array, ...args) {
  let newArray;
    
  newArray = array.filter(
        function filterArray (x){
            if (!args.includes(x))
                return x;
        }
    )

    return newArray;

}






// Do not edit below this line
module.exports = removeFromArray;
