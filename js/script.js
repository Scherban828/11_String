"use strict";
//Особенности обратных скобок
let text = "Привет,";
let textHi = `${text} Толя `;
console.log(textHi);
function sum(a, b) {
    return a + b;
}
console.log(`Сумма ${sum(4, 7)}`);
let text1 = `Привет
Всем
и Тебе`;
console.log(text1);
console.log("Hi \nyou!");//\n - Перевод строки
console.log("Hi \n\tyou!");//\t - Отступ
//Вывод обратного слэша 
console.log("Hi \\you!");
//Вывод кавычек 
console.log("Hi \"you!\"");
//Длина строки
console.log(text.length);
console.log(text[2]);
console.log(text[text.length - 2]);
//Вывод каждого символа
for (const char of text) {
    console.log(char);
};
//Измение регистра
console.log(text.toUpperCase());
//Поиск фрагмента текста в строке
console.log(text.includes("рив"));
//Поиск значения в начале строки \
console.log(text.startsWith("П")); //True
console.log(text.endsWith("!"));//False
//Вытащить кусок текста (от, до)
console.log(text.slice(2, 5));
