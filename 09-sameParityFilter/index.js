export const sameParityFilter = (arr = []) => {
    let resArr = [];
    let typeOfFirst = arr[0] % 2;
    
    if(typeOfFirst === 0) {
      for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] % 2 === 0) {
          resArr.push(arr[i]);
        }
      }
    } else {
      for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] % 2 !== 0) {
          resArr.push(arr[i]);
        }
      }
    }
    
    return resArr;
  }
  