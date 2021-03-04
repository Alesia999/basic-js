const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  
  // remove line with error and write your code here
let count = 0;

for(let i = 0; i < array.length; ++i){

    for (let j=0; j<array[i].length; ++j){
        if(array[i][j] == '^^')
        count++;
        };   
};

return count;
};
