/*
Задача 3: Функція з масивом
Створи функцію з назвою findLongestWord, яка:

Приймає масив слів (строк) як параметр
Знаходить найдовше слово в масиві
Повертає це найдовше слово

Після створення функції, протестуй її з таким масивом:
["cat", "elephant", "dog", "butterfly", "ant"]
І виведи результат в консоль.
*/

function findLongestWord(arr: string[]): string {
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}