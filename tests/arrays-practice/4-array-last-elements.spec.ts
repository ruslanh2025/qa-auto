/*
Останні елементи масиву  
Напиши функцію для отримання останніх n елементів масиву.  
Тестові дані:  
console.log(last([7, 9, 0, -2])); // -2  
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]    
*/

function last(arr: any[], numberOfElements: number = 1) {
    return arr.slice(-numberOfElements)
};