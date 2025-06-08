/*
Максимальне число з двох
Напиши програму, яка знаходить найбільше ціле число з двох. Використай if для порівняння.

maxNumber(10, 20); // Вивід: 20  
maxNumber(5, 5); // Вивід: Обидва числа рівні  
maxNumber(-10, 0); // Вивід: 0  
*/

import { test, expect } from '@playwright/test'

function maxNumber(number1: number, number2: number) {
    if (number1 > number2) {
        return number1
    } else if (number1 < number2) {
        return number2
    } else {
        return 'Обидва числа рівні'
    }
}

test.describe('maxNumber definition', () => {
    test('first number is greater than second', async () => {
        const number1 = 20;
        const number2 = 10;
        expect(maxNumber(10, 20)).toEqual(20)
    })
    test('second number is greater than first', async () => {
        const number1 = 30;
        const number2 = 50;
        expect(maxNumber(30, 50)).toEqual(50)
    })
    test('numbers are equal', async () => {
        const number1 = 99;
        const number2 = 99;
        expect(maxNumber(99, 99)).toEqual("Обидва числа рівні");
    })
})