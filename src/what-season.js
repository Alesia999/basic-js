const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (isNaN(date)){
  return 'Unable to determine the time of year!';
};

let month=date.getMonth();
let result=(month == 11 || month <=1)?'winter':
(month<=4)?'spring':
(month<=7)?'summer':
'autumn';
return result;
};
