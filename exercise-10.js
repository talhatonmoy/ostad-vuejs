numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]

function sumArray(array) {
    return numbers.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }, 0)
}

const sum = sumArray(numbers)
console.log(sum)