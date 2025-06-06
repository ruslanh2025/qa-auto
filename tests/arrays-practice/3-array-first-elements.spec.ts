/*
Перші елементи масиву  
Напиши функцію для отримання перших n елементів масиву.  
Тестові дані:  
console.log(first([7, 9, 0, -2])); // 7  
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    
*/

import { test, expect} from '@playwright/test'

function gettingArrayFirstElement(array: any[], elementNumber?: number) {
  if (elementNumber === undefined) {
    return array[0];
  } else {
    return array.slice(0, elementNumber);
  }
}

test.describe('gettingArrayFirstElement function', () => {
    test('should return first element when no count specified', async () => {
        const result = gettingArrayFirstElement([7, 9, 0, -2])
        expect(result).toBe(7)
    });

    test('should return array of first N elements when count specified', async () => {
        const result = gettingArrayFirstElement([7, 9, 0, -2], 3);
        expect(result).toEqual([7, 9, 0])
    });
})