const convertToCelsius = function(temp) {
  let calculation =5/9 * (temp - 32);
  let finalCalc = Number(calculation.toFixed(1));
  return finalCalc;
};

const convertToFahrenheit = function(temp) {
  let calculation =(9/5 * (temp))+32;
  let finalCalc = Number(calculation.toFixed(1));
  return finalCalc;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
