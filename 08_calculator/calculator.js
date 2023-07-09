const add = function(num1, num2) {
      return num1+num2;
};

const subtract = function(num1, num2) {
      return num1-num2;
};

const sum = function(args) {
      let total = 0;
      args.forEach(num =>
            total += num
        )
    return total;
};

const multiply = function(...args) {
      let total = 1;
      args.forEach(num =>
            total *= num
        )
    return total;
};

const power = function(num, exponent) {
      let total = 1;
      for (let i = 0; i < exponent; i++)
        total *= num;
      return total;
};

const factorial = function(num) {
      if(num ===0)
         return 1;
    else{
        for(let i = num; i > 1; i--){
            num *= (i-1);
        }
        return num;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
