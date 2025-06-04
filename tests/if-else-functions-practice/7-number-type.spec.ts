/*
7. Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
- "Число додатнє."
- "Число від’ємне."
- "Число дорівнює нулю."
*/

import { test, expect } from '@playwright/test'

function numberType(number) {
    if (number > 0) {
        return "Число додатнє.";
    } else if (number < 0) {
        return "Число від’ємне.";
    } else if (number === 0) {
        return "Число дорівнює нулю.";
    }
};

test('the number is positive', async () => {
    expect(numberType(45)).toEqual("Число додатнє.");
})

test('the number is negative', async () => {
    expect(numberType(-98)).toEqual("Число від’ємне.");
})

test('the number is equal to 0', async () => {
    expect(numberType(0)).toEqual("Число дорівнює нулю.");
})