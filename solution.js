const inputArray = [
    110,
    120,
    130,
    280,
    301,
    780,
    510,
    505,
    605,
    720,
    300,
    230,
    210,
    275
];

/**
 * Sets in the map a number class for each element in the array, calculating the maximum between the old and new values,
 * if an element exists already for that number class. The number class can be 100, 200, etc.
 * @param {Array} array The array which is passed as input
 * @param {Number} numberOfDigitsPerElement The number of digits for each element. Default = 3.
 */
function setClassesToMap(array, numberOfDigitsPerElement = 3) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }
    // define a simple object as the map
    const classMap = {};

    array.forEach((element) => {
        // check if the element has the specified number of digits
        if (element.toString().length === numberOfDigitsPerElement) {
            const numberClass = findFirstDigit(element);
            const mapClassIndex = `${numberClass}00`;
            // go through each array element and create a class if it does not exist already
            if (!classMap[mapClassIndex]) {
                classMap[mapClassIndex] = element;
            } else {
                // otherwise calculate the maximum between the old and new element
                classMap[mapClassIndex] = Math.max(
                    classMap[mapClassIndex],
                    element
                );
            }
        }
    });

    return classMap;
}

/**
 * Retrieves the first digit of the passed number
 * @param {Number} number
 */
function findFirstDigit(number) {
    return String(number).charAt(0);
}

const classMap = setClassesToMap(inputArray);

// print the actual values of the map
console.log(Object.values(classMap));
