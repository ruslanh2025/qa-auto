/*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/

import { test, expect } from "@playwright/test";

function scoreChecking(scorePoint: number) {
    if (scorePoint >= 50) {
        return "Тест складено";
    } else {
        return "Тест не складено";
    }
};

test('score is >= 50', async () => {
    expect(scoreChecking(97)).toEqual("Тест складено");
});

test('score is < 50', async () => {
    expect(scoreChecking(23)).toEqual("Тест не складено");
});

test('score is 0', async () => {
    expect(scoreChecking(0)).toEqual("Тест не складено");
});