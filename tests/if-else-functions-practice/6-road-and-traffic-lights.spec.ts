/*
6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")
*/

import { tr } from '@faker-js/faker';
import { test, expect } from '@playwright/test'

function trafficLightInstruction(trafficLightColor: string) {
    if (trafficLightColor === "зелений") {
        return "переходьте";
    } else if (trafficLightColor === "жовтий") {
        return "підготуйтеся";
    } else if (trafficLightColor === "червоний") {
        return "зачекайте";
    } else {
        return "немає такого кольору у світлофора";
    }
};

test('the color is green', async () => {
    expect(trafficLightInstruction("зелений")).toEqual("переходьте");
})

test('the color is yellow', async () => {
    expect(trafficLightInstruction("жовтий")).toEqual("підготуйтеся");
})

test('the color is red', async () => {
    expect(trafficLightInstruction("червоний")).toEqual("зачекайте");
})

test('some different color', async () => {
    expect(trafficLightInstruction("салатовий")).toEqual("немає такого кольору у світлофора");
})