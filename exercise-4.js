function isEven(num) {
    let type = ''
    if (num % 2 == 0) {
        type = 'Even'
    } else {
        type = 'Odd'
    }
    return type
}

const type = isEven(634);
console.log(type)