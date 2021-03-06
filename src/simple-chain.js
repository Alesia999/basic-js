const CustomError = require("../extensions/custom-error");

const chainMaker = {
  length: 0,
  arr: [],
  getLength() {
  return this.length;
  },
  addLink(value) {
  this.length++;
  this.arr.push(`( ${value} )`);
  return this;
  },
  removeLink(position) {
    if (position > this.length||position <= 0||typeof position !== "number"){
      this.length=0;
      this.arr =[];
      throw new Error("");
    } else {
      position--;
      for (let i = position; i<this.length-1; i++) {
        this.arr[i] = this.arr[i+1];
      }
      this.arr.pop();
      this.length--;
    }
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
   return this.arr.join("~~");
  }
};
module.exports = chainMaker;
