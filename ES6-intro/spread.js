const max = Math.max(3, 5, 1, 8, 2, 58, 1);
// console.log(max);

const numbers = [3, 5, 1, 8, 2, 58, 1];
const max2 = Math.max(...numbers);
console.log(...numbers);

const params = [45, 12, 3];
function sum(x, y, z) {
    console.log(x, y, z);
    return x + y + z;
}
// const result = sum(...params)
// console.log(result);