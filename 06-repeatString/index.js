/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {

    let newStr = '';
    for(let i = 0; i < str.length; i++) {
      for(let j = 0; j < i + 1; j++) {
        if(j === 0) {
          newStr += str[i].toUpperCase();
        } else {
          newStr += str[i].toLowerCase();
        }
      }
      newStr += '-';
    }
    
    return newStr.slice(0, newStr.length-1);
  }