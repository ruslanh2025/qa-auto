/*
Задача 2: Робота з циклом for
У тебе є масив з назвами кольорів: ["red", "green", "blue", "yellow", "purple"].
Використовуючи цикл for, виведи в консоль кожен колір у такому форматі:
Колір 1: red
Колір 2: green
Колір 3: blue
... і так далі
*/

const colors = ["red", "green", "blue", "yellow", "purple"];
for (let i = 0; i < colors.length; i++) {
    console.log('Колір ' + (i + 1) + ':' + colors[i])
}