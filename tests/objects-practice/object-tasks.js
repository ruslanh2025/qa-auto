/*
1. Створи обʼєкт book з властивостями title, author, pages. Виведи значення кожної з них.
*/

const book = {
    title: 'Some Random Title for the Book',
    author: 'Genri Preskot',
    pages: 205
}
console.log(book.title);
console.log(book.author);
console.log(book.pages);

/*
2. Додай у book нову властивість isAvailable, встанови значення true.
*/

book.isAvailable = true;
console.log(book);

/*
3. Напиши функцію, яка приймає обʼєкт і виводить усі ключі та значення. (гугліть як)
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#enumerating_properties

function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}  

/*
4. Створи вкладений обʼєкт user.profile, де profile має поле email.
*/

const user = {
    name: 'Ruslan',
    age: 36,
    profile: {
        email: 'ruslan.example@gmail2.com'
    }
}

/*
5. Перевір, чи існує поле role в обʼєкті user.
*/

console.log('role' in user)

/*
6. Використай Object.keys() для підрахунку кількості властивостей. (погугліть про Object.keys())
*/

const objPropertiesQuantity = Object.keys(user);
console.log(objPropertiesQuantity.length);

/*
7. Скопіюй обʼєкт settings у нову змінну settingsCopy.  (перед цим створіть обʼєкт settings) 
*/

const settings = {
  power: "off",
  volume: "max",
  brightness: "min level",
};

const settingsCopy = { ...settings };
settings.power = "on";
console.log(settings.power);
console.log(settingsCopy.power);

/*
8. Напиши функцію, яка приймає обʼєкт і повертає масив значень. (тобто масив зі значеннями обʼєкта)
*/

