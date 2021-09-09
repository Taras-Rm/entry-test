/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let max = 0;
    let min = 0;

    let arrOfNum = numbers.split(' ');
    arrOfNum.forEach(num => Number(num));

    max = arrOfNum[0];
    min = arrOfNum[0];

    for (let i = 1; i < arrOfNum.length; i++) {
        if (arrOfNum[i] > max) {
            max = arrOfNum[i];
        }
        if (arrOfNum[i] < min) {
            min = arrOfNum[i];
        }
    }

    return `${min} ${max}`;

}
