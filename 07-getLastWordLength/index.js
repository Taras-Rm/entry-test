export const getLastWordLength = str => {
    let arrOfStr = str.split(' ');
 let arrOfWords = [];
 for(let i = 0; i < arrOfStr.length; i++) {
     if((arrOfStr[i] !== ' ') && (arrOfStr[i] !== '')) {
         arrOfWords.push(arrOfStr[i]);
     }
 }

 let lastWord = arrOfWords[arrOfWords.length - 1];

 return lastWord.length;

};