/*
object
7+1
структура даних
Array/масив
*/

const arr = [0, 1, 2];
const arr1 = new Array(0, 1, 2);

// отримання елементу масиву
console.log(arr[1]);
console.log(arr1.at(0));

//довжина масиву
console.log(arr.length);

// перебирання масиву
for (let i = 0; i < arr.length; i++) {
  arr[i] = "Number: " + arr[i];
  console.log(arr[i]);
}

// додавання елементів у масив
arr.push(13, 14);
console.log(arr);

// видалення елементів із масиву
arr.pop();
console.log(arr);

// об'єдання масивів
const cssSelectors = [".tag", 'atrib = "X"'];
const xpathSelectors = ['//div[@class = "test"]'];
const newArrayLocators = cssSelectors.concat(xpathSelectors);
console.log(newArrayLocators);

// for(...of)
const items = ["iPhone", "iPad", "e-book"];
for (const item of items) {
  console.log(item);
}

// includes
const result = items.includes('iPhone')
console.log(result)

// map


// find
