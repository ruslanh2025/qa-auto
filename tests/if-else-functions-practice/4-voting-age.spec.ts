/*
4. Вік для голосування
Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
Вхід: Вік (наприклад, 17)
Вихід:
- Якщо >= 18: "Ви можете голосувати."
- Інакше: "Ви ще не можете голосувати."
*/

import { test, expect } from '@playwright/test'

function votingAge(voterAge: number) {
    if (voterAge >= 18) {
        return "Ви можете голосувати.";
    } else {
        return "Ви ще не можете голосувати.";
    }
};

test('voting age is > 18', async () => {
    expect(votingAge(21)).toEqual("Ви можете голосувати.");
})

test('voting age === 18', async () => {
    expect(votingAge(18)).toEqual("Ви можете голосувати.");
})

test('voting age < 18', async () => {
    expect(votingAge(16)).toEqual("Ви ще не можете голосувати.");
})