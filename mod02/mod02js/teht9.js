function even(array) {
    return array.filter(num => num % 2 === 0)
}

const originalArray = [1,2,3,4,5,6,7,8,9,10]
const newArray = even(originalArray)

console.log(`Original array: ${originalArray}`)
console.log(`New array: ${newArray}`)