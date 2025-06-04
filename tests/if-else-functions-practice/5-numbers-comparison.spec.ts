/*
5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."
*/

import { test, expect } from '@playwright/test'

function numbersComparison(number1: number, number2: number) {
    if (number1 > number2) {
        return "Перше число більше.";
    } else if (number1 < number2) {
        return "Друге число більше.";
    } else if (number1 === number2) {
        return "Числа рівні.";
    }
};

test('first number is greater than second', async () => {
    expect(numbersComparison(10, 3)).toEqual("Перше число більше.");
})

test('second number is greater than first', async () => {
    expect(numbersComparison(100, 234)).toEqual("Друге число більше.");
})

test('both numbers are equal', async () => {
    expect(numbersComparison(56, 56)).toEqual("Числа рівні.");
})