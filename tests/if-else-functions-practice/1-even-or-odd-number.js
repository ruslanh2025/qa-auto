/*
1. Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
Вхід: Число (наприклад, 4)
Вихід:
- "Число парне."
- "Число непарне."
*/

function evenOrOddNumber (number){
    if (number % 2 === 0){
        console.log('Число парне')
    } else {
        console.log('Число непарне')
    }
};

evenOrOddNumber(15);
evenOrOddNumber(24);
evenOrOddNumber(0);
evenOrOddNumber(-26);