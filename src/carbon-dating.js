const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let k = 0.693/HALF_LIFE_PERIOD; 

module.exports = function dateSample(sampleActivity) {
  
  let input = parseFloat(sampleActivity);
  if(Number.isFinite(input)&&15>input>0&&typeof sampleActivity ==='string'){
  let output = Math.ceil(Math.log(MODERN_ACTIVITY/input)/k);
  return output;
  }else{
    return false;
  }
};
