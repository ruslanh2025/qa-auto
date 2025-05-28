/*
2. Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- Якщо год < 12: "Доброго ранку!"
- Якщо год 12–18: "Доброго дня!"
- Якщо год > 18: "Доброго вечора!"
*/

function greetingByTime(timeNow) {
    if (timeNow < 12) {
        console.log("Доброго ранку!");
    } else if (timeNow >= 12 && timeNow <= 18) {
        console.log("Доброго дня!");        
    } else if (timeNow > 18 && timeNow <= 24) {
        console.log("Доброго вечора, ми з України!");
    } else {
        console.log("Маємо лише 24 години у добі");
    }
};

greetingByTime(3);
greetingByTime(13);
greetingByTime(21);
greetingByTime(34);