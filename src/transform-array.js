const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) { newarr.push(arr[i + 1]) };
    } else if (arr[i] === '--discard-prev') {
      if (i > 0) {
        newarr.pop(arr[i - 1]);
      }

    } else if (arr[i] === '--double-prev') {
      if (i > 0) { newarr.push(arr[i - 1]) };
    }
    else {
      newarr.push(arr[i]);
    }

  }
  return newarr;
};
