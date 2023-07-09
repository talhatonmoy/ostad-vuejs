
const address = {
    city: 'dhaka',
    street: 'mirpur',
    country: 'bangladesh'
}

function getAddressCity(obj) {
    return obj?.city ?? 'Unknown';
}

const city = getAddressCity(address);
console.log(city)