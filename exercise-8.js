
function doubleNumbers(array) {
    return array.map( (x)=> x*x )
}


numbers = [1, 2, 3, 4, 5]

const dn = doubleNumbers(numbers)
console.log(dn);