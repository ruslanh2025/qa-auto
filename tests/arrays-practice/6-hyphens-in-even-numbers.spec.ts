/*
Дефіси між парними числами   
Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:  
Ввід: 025468  
Вивід: 0-254-6-8  
*/

function addDash(str: string) {
    let output = '';
    for (let i; i < str.length; i++){
        if (parseInt(str[i]) % 2 === 0 && parseInt(str[i - 1]) % 2 === 0)
        {
            output += '-' + str[i]
        } else
        {
            output += str[i]
        }
    }
};