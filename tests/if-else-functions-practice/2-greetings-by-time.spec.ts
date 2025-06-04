/*
2. Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- Якщо год < 12: "Доброго ранку!"
- Якщо год 12–18: "Доброго дня!"
- Якщо год > 18: "Доброго вечора!"
*/

import { test, expect } from "@playwright/test";

function greetingByTime(timeNow: number) {
    if (timeNow < 12) {
        return "Доброго ранку!";
    } else if (timeNow >= 12 && timeNow <= 18) {
        return "Доброго дня!";        
    } else if (timeNow > 18 && timeNow <= 24) {
        return "Доброго вечора, ми з України!";
    } else {
        return "Маємо лише 24 години у добі";
    }
};

test('the number is < 12', async () => {
    expect(greetingByTime(3)).toEqual("Доброго ранку!")
});

test('the number is in range 12-18', async () => {
    expect(greetingByTime(13)).toEqual("Доброго дня!")
});

test('the number is > 18', async () => {
    expect(greetingByTime(21)).toEqual("Доброго вечора, ми з України!");
});

test('the number is > 24', async () => {
    expect(greetingByTime(34)).toEqual("Маємо лише 24 години у добі");
});