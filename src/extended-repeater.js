const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  function repeatStr(str = '', separator, repeatTimes = 1) {
    let tempArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      tempArray.push(String(str));
    }
    return tempArray.join(separator);
  }
  const fullAddition = repeatStr(options.addition, options.additionSeparator, options.additionRepeatTimes);
  options.separator = fullAddition + options.separator;
  return repeatStr(str, options.separator, options.repeatTimes) + fullAddition;
}

module.exports = {
  repeater
};
