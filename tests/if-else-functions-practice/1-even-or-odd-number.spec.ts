/*
1. Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
Вхід: Число (наприклад, 4)
Вихід:
- "Число парне."
- "Число непарне."
*/
import { test, expect } from '@playwright/test'

function evenOrOddNumber (number: number){
    if (number % 2 === 0){
        return 'Число парне';
    } else {
        return "Число непарне";
    }
};

test('the number is odd', async () => {
    expect(evenOrOddNumber(15)).toEqual("Число непарне");
});

test('the number is even', async () => {
    expect(evenOrOddNumber(24)).toEqual("Число парне");
});

test('the number is even when it is negative', async () => {
    expect(evenOrOddNumber(-26)).toEqual("Число парне")
});

test('when the number is zero(0)', async () => {
    expect(evenOrOddNumber(0)).toEqual("Число парне");
});