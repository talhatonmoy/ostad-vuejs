numbers = [1, 8, 2, 9, 5, 80, 6, 73, 58, 19, 10]


function sortNumbers(num) {
    return num.sort((a, b) => {
       return a-b
   })
}

const sortedArray = sortNumbers(numbers)
console.log(sortedArray)