// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
let text = "Hello World";
let textArr = text.split('');

function setTime(){
    return new Promise(resolve => {
        setTimeout(resolve, Math.round(Math.random() * (1000 - 100) + 100));
});
}
async function typeTextDelayed(array){
    for (const item of array) {
        await setTime();
        console.log(item);
    }
}
typeTextDelayed(textArr);
