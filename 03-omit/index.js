/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  
    let arrOfFields = [...fields];
    let newObj = {};
    
    for(let prep in obj) {
      if(!arrOfFields.includes(prep)) {
        newObj[prep] = obj[prep];
      }
    }
  
   return newObj;
};