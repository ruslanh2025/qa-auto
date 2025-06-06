/*
Перевірка масиву  
Напиши функцію, яка перевіряє, чи є input масивом.  
Тестові дані:  
console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true

знайшов рішення тут - https://stackoverflow.com/questions/66347835/using-reusable-function-to-check-if-array-instead-of-array-isarray-in-typescript
*/

import { test, expect } from '@playwright/test'

// creating the function that checks if the input is Array or not
const isArray = (value: any) => Array.isArray(value);

// some random variables for running tests
const randomString = 'QA DOJO';
const randomArray = [1, 2, 3, 4]

// testing the "isArray" function works as expected
test('the input is an Array', async () => {
    expect(isArray(randomArray)).toEqual(true)
})

test('the input is NOT an Array', async () => {
    expect(isArray(randomString)).toEqual(false)
})