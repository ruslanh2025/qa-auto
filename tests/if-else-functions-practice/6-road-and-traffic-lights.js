/*
6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")
*/

function trafficLightInstruction(trafficLightColor) {
    if (trafficLightColor === "зелений") {
        console.log("переходьте");
    } else if (trafficLightColor === "жовтий") {
        console.log("підготуйтеся");
    } else if (trafficLightColor === "червоний") {
        console.log("зачекайте");
    } else {
        console.log("немає такого кольору у світлофора")
    }
};

trafficLightInstruction("зелений");
trafficLightInstruction("жовтий");
trafficLightInstruction("червоний");
trafficLightInstruction("салатовий");