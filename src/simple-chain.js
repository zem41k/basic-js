const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chainArray.push('');
    } else if (value === null) {
      this.chainArray.push('null');
    } else {
      this.chainArray.push(value.toString());
    }
    return this
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chainArray.length && Number.isInteger(position)) {
      this.chainArray.splice(position - 1, 1);
    } else {
      this.chainArray = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArray.join(' )~~( ');
    this.chainArray = [];
    return `( ${result} )`;
  }
};

module.exports = {
  chainMaker
};
