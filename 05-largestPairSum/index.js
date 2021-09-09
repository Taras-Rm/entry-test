/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let max2 = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if ((numbers[i] !== max) && (numbers[i] > max2)) {
            max2 = numbers[i];
        }
    }

    return max + max2;

}
