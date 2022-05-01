const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
    this.symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.matrix = genMatrix(this.symbols);
    function genMatrix(arr) {
      let squere = [];
      for (let i = 0; i < arr.length; i++) {
        squere[i] = arr.slice(i).concat(arr.slice(0, i));
      }
      return squere;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let newMesssage = [];
    for (let i = 0; i < message.length; i++) {
      if (this.symbols.includes(message[i].toUpperCase())) newMesssage.push(message[i]);
    }
    while (key.length < newMesssage.length) {
      key += key;
    }
    let newKey = key.split('').slice(0, newMesssage.length);
    let result = [];
    let indexM, indexK = 0;
    for (let i = 0; i < newMesssage.length; i++) {
      indexM = this.symbols.indexOf(newMesssage[i].toUpperCase());
      indexK = this.symbols.indexOf(newKey[i].toUpperCase());
      result.push(this.matrix[indexM][indexK]);
    }
    for (let i = 0; i < message.length; i++) {
      if (!this.symbols.includes(message[i].toUpperCase())) {
        result.splice(i, 0, message[i]);
      }
    }
    if (this.type) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }

  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let newMesssage = [];
    for (let i = 0; i < message.length; i++) {
      if (this.symbols.includes(message[i].toUpperCase())) newMesssage.push(message[i]);
    }
    while (key.length < newMesssage.length) {
      key += key;
    }
    let newKey = key.split('').slice(0, newMesssage.length);
    let result = [];
    let indexM, indexK = 0;
    for (let i = 0; i < newMesssage.length; i++) {
      indexK = this.symbols.indexOf(newKey[i].toUpperCase());
      indexM = this.matrix[indexK].indexOf(newMesssage[i]);
      result.push(this.symbols[indexM]);
    }
    for (let i = 0; i < message.length; i++) {
      if (!this.symbols.includes(message[i].toUpperCase())) {
        result.splice(i, 0, message[i]);
      }
    }
    if (this.type) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
