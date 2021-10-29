/* task 1 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const sumArrs = arr1.concat(arr2);
console.log(sumArrs);

/* task 2 */

const arr = [1, 2, 3];
console.log(arr.reverse());

/* task 3 */

const arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

/* task 4 */

const arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

/* task 5 */

const arr = ["js", "css", "jq"];
alert(arr.shift());

/* task 6 */

const arr = ["js", "css", "jq"];
alert(arr.pop());

/* task 7 */

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(0, 3);
console.log(arr2);

/* task 8 */

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(3);
// const arr2 = arr.slice(-2); //второй вариант
console.log(arr2);

/* task 9 */

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

/* task 10 */

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(1, 4);
console.log(arr2);

/* task 11 */

const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, `a`, `b`, `c`);
console.log(arr);

/* task 12 */

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, `a`, `b`);
arr.splice(6, 0, `c`);
arr.splice(8, 0, `e`);
console.log(arr);

/* task 13 */

const arr = [3, 4, 1, 2, 7];
console.log(arr.sort());
/*для сравнения двузначных чисел нужно сравнить с помощью дополнительных
  условий, так как, по умолчанию, элементы сортируются, как строки, лексикографически -
  посимвольно. */
const arr = [3, 211, 4, 1, 111, 211, 7, 2];
function compareNumbers(x, y) {
  if (x > y) return 1;
  if (x < y) return -1;
  if (x === y) return 0;
}
console.log(arr.sort(compareNumbers));

/* task 14 */

const arr = [5, 6, 7, 8, 9];
console.log(arr.reduce((sumItems, currentItem) => sumItems + currentItem, 0));

/* task 15 */

const arr = [5, 6, 7, 8, 9];
arr.forEach((item, index, array) => (array[index] = Math.pow(item, 2)));
console.log(arr);

/* task 16 */

const arr = [1, -3, 5, 6, -7, 8, 9, -11];
console.log(arr.filter((item) => item < 0));

/* task 17 */

const arr = [1, -3, 5, 6, -7, 8, 9, -11];
console.log(arr.filter((item) => item % 2 === 0));

/* task 18 */

const arr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
console.log(arr.filter((item) => item.length > 5));

/* task 19 */

const arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter((item) => Array.isArray(item)));

/* task 20 */

const arr = [5, -3, 6, -5, 0, -7, 8, 9];
const negativeNumbArr = arr.filter((item) => item < 0);
const amountNegativeNumb = negativeNumbArr.length;
console.log(amountNegativeNumb);
