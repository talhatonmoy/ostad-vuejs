numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterEvenNumbers(array) {
    return array.filter((num) => { return (num % 2 == 0) ?? num })
}

const evenNum = filterEvenNumbers(numbers);
console.log(evenNum);