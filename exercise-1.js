const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40];

function destructureExample(obj, arr) {
    const { name, age } = obj
    const [zero, , two] = arr

    return { name, age, zero, two }
}

const destructure = destructureExample(obj, arr);
console.log(destructure)