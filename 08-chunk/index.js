// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let arrCopy = arr;
    let newArr = [];
    let subArr = [];
    
    
    while(arrCopy.length) {
      newArr.push(arrCopy.slice(0, size));
      
      for(let i = 0; i < size; i++) {
        arrCopy.shift();
      }
    }
  
    return newArr;
  
  };
  