/*
Клонування масиву  
Напиши функцію для створення копії масиву.  
Тестові дані:  
console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]  
console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]    
*/

import { test, expect } from '@playwright/test'

function makingArrayClone(originalArray: any[]) {
    const clonedArray: any[] = [];
    for (let arr of originalArray) {
        if (Array.isArray(arr)) {
            clonedArray.push(makingArrayClone(arr));
        } else {
            clonedArray.push(arr);
        }
    }
    return clonedArray
};

test.describe('makingArrayClone function', () => {

    test('clone simple array', async () => {
        const original = [1, 2, 4, 0];
        const cloned = makingArrayClone(original)
        expect(cloned).toEqual([1, 2, 4, 0]);
        expect(cloned).not.toBe(original);
    })

    test('clone array with nested arrays', async () => {
        const original = [1, 2, [4, 0]]
        const cloned = makingArrayClone(original)
        expect(cloned).toEqual([1, 2, [4, 0]]);
        expect(cloned).not.toBe(original)
        expect(cloned[2]).not.toBe(original[2])
    })

    test('cloned array should be independent from original', async () => {
        const original = [1, 2, [4, 0]]
        const cloned = makingArrayClone(original)
        original[2][0] = 777
        expect(original).toEqual([1, 2, [777, 0]])
        expect(cloned).toEqual([1, 2, [4, 0]]);
    })
})