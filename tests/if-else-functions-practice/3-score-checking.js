/*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/

function scoreChecking(scorePoint) {
    if (scorePoint >= 50) {
        console.log("Тест складено");
    } else {
        console.log("Тест не складено");
    }
};

scoreChecking(97);
scoreChecking(23);
scoreChecking(0);