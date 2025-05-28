/*
7. Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
- "Число додатнє."
- "Число від’ємне."
- "Число дорівнює нулю."
*/

function numberType(number) {
    if (number > 0) {
        console.log("Число додатнє.");
    } else if (number < 0) {
        console.log("Число від’ємне.");
    } else if (number === 0) {
        console.log("Число дорівнює нулю.");
    }
};

numberType(45);
numberType(-98);
numberType(0);
numberType(-45.5667);