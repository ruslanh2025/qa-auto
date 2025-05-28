// 🧠 1 частина

// 1️⃣ Поставити IDE Visual Studio Code (знайти самостійно де поставити) ✅

// 2️⃣ Подивитись відео: https://www.youtube.com/watch?v=IREdc1FvRtU ✅

// 3️⃣ Написати програму, яка буде виводити в консоль Hello World
console.log("Hello World");

// 🧠 2 частина

// 🧩 Змінні:

// 1️⃣ Створи змінну name і присвой їй твоє ім’я. Виведи її в консоль.
const name = "Ruslan";
console.log(name);

// 2️⃣ Створи змінну birthYear і currentYear. Обчисли вік і записати це у третю змінну, результат вивести в консоль.
let birthYear = 1989;
let currentYear = 2025;
let age = currentYear - birthYear;
console.log(age);

// 3️⃣ Є дві змінні a = 5 і b = 10. Поміняй їх місцями, використовуючи третю змінну.
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log("a:", a); // 10
console.log("b:", b); // 5
// in modern JavaScript you could also use array destructuring to achieve the same result more concisely:
// [a, b] = [b, a];

// 📦 Типи даних:

// 1️⃣ Створи змінні з різними типами: число, рядок, булеве значення, null, undefined, об’єкт. Використай typeof, щоб вивести тип кожної.
let numValue = 36;
console.log(typeof number);
let string = "Hello everyone";
console.log(typeof string);
let boolTrue = true;
console.log(typeof boolTrue);
let boolFalse = false;
console.log(typeof boolFalse);
let nullValue = null;
console.log(typeof nullValue);
let undefinedValue;
console.log(typeof undefinedValue);
let objectValue = { name: "Ruslan", age: 36, language: "Ukrainian and English" };
console.log(typeof objectValue);

// 2️⃣ Створи змінні c = "5" і d = 3. Спробуй скласти їх (c + d). Як змінити c, щоб вийшла правильна математична сума?
let c = "5";
let d = 3;
console.log(c + d); // "53"
c = 5;
console.log(c + d); // 8

// 🔀 Умовні оператори:

// 1️⃣ Запитай у користувача число. Виведи, чи воно парне, чи непарне. 👉 Підказка: let number = prompt("Введи число:");
let number = prompt("Введи число:");
if (number % 2 === 0) {
  console.log("Парне число");
}
else {
  console.log("Непарне число");
}

// 2️⃣ Є змінна age. Якщо вік менше 18 — виведи “Доступ заборонено”, інакше — “Ласкаво просимо”.
let age2;
if (age2 < 18) {
    console.log("Доступ заборонено");
} else {
    console.log("Ласкаво просимо");
}

// 3️⃣ Є змінна password = "qwerty". Запитай у користувача пароль. Якщо він правильний — виведи “Успішний вхід”, інакше — “Невірний пароль”.
let password = "qwerty";
let userPassword = prompt("Введи пароль:");
if (userPassword === password) {
    console.log("Успішний вхід");
} else {
    console.log("Невірний пароль");
}

// логічні оператори

// 1: Чи має доступ користувач?
let isAdmin = true;
let isLoggedIn = false;
if (
  isAdmin === true ||
  isLoggedIn === true
) {
  alert("Доступ дозволено");
};

// 2: Вік для купівлі алкоголю

let ageForAlcohol = 17;
if (
  ageForAlcohol >= 18) {
  alert("Можна купити алкоголь");
  } else {
    alert ("Заборонено")
  }

// 3: Логін і пароль

let login = 'admin';
let adminPassword = '12345';
if (
  login === 'admin' &&
  adminPassword === '12345'
) {
  alert("Вхід дозволено");
} else {
  alert("Доступ заборонено");
}

// 4: Число в межах

let number2 = 15;
if (
  number2 >= 10 && number2 <= 20
) {
  alert ("У межах")
} else {
  alert ("Поза межами")
}

// 5: Не порожнє ім’я
let name2 = '';
if (name2 !== '') {
  alert ("Привіт, " + name2);
} else {
  alert ("Ім’я не вказано")
}

// 6: Перевірка на парність та додатність
let number3 = 6;
if (
  number3 % 2 === 0 &&
  number3 > 0
) {
  alert ("Число парне і додатне")
}

// 7: Чи сьогодні вихідний?
let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday') {
  alert ("Вихідний")
}

// 8: Не авторизований
let isLoggedIn2 = false;
if (isLoggedIn2 != true) {
  alert ("Будь ласка, увійдіть")
}