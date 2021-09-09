export const getLastWordLength = str => {

    let lastWord = '';
    let oneWord = '';
    let refactorStrArr = [];
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== ' ' && str[i] !== '\t' && str[i] !== '') {
        oneWord += str[i];
      } else {
        refactorStrArr.push(oneWord);
        oneWord = '';
      }
    }
    
    refactorStrArr = refactorStrArr.filter( item => item !== '')
    lastWord = refactorStrArr.pop();
    return lastWord.length;

};