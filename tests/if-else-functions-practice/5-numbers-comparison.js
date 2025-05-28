/*
5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."
*/

function numbersComparison(number1, number2) {
    if (number1 > number2) {
        console.log("Перше число більше.");
    } else if (number1 < number2) {
        console.log("Друге число більше.");
    } else if (number1 === number2) {
        console.log("Числа рівні.");
    }
};

numbersComparison(3, 10);
numbersComparison(234, 100);
numbersComparison(56, 56);
numbersComparison(5); // no result in console. Why?