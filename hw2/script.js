//1. - створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let numArray = [4,9,0,6,7];
// let strArray = ['qwe', 'rty', 'uiop', 'asdf', 'ffghj'];
// let randomArray = [2, 'jkiu', true, 'hjlkl', false];
// let array = [];

// array[0] = 1;
// array[1] = 10;
// array[2] = 15;
// array[3] = 18;
// array[4] = 13;

// console.log(numArray);
// console.log(strArray);
// console.log(randomArray);
// console.log(array);

//2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>zxcv</div>');
// }

//3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>'+ i + 'zxcv</div>');
// }

//4. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;

// while(i<20){
//     document.write('<h1>asdfghj</h1>');
//     i++;
// }

//5. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;

// while(i<20){
//     document.write('<h1>asdfghj' + i + '</h1>');
//     i++;
// }

//6. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numArray = [4, 6, 34, 67, 78, 0, 5, 89, 9, 22];

// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i]); 
// }

//7.Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strArray = ['aaa', 'sss', 'ddd', 'fff', 'ggg', 'hhh', 'jjj', 'kkk', 'lll', 'zzz'];

// for (let i = 0; i < strArray.length; i++) {
//     console.log(strArray[i]); 
// }

//8. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let randomArray = [2, 'jkiu', true, 'hjlkl', false, 66, 100, 'uu', false,'dfg'];

// for (let i = 0; i < randomArray.length; i++) {
//         console.log(randomArray[i]); 
// }

//9. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let randomArray = [2, 'jkiu', true, 'hjlkl', false, 66, 100, 'uu', false,'dfg'];

// for (let i = 0; i < randomArray.length; i++) {
//     if(typeof randomArray[i] === 'boolean'){
//         console.log(randomArray[i]);
//     } 
// }

//10. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let randomArray = [2, 'jkiu', true, 'hjlkl', false, 66, 100, 'uu', false,'dfg'];

// for (let i = 0; i < randomArray.length; i++) {
//     if(typeof randomArray[i] === 'number'){
//         console.log(randomArray[i]);
//     } 
// }

//11. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let randomArray = [2, 'jkiu', true, 'hjlkl', false, 66, 100, 'uu', false,'dfg'];

// for (let i = 0; i < randomArray.length; i++) {
//     if(typeof randomArray[i] === 'string'){
//         console.log(randomArray[i]);
//     } 
// }

//12. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];

// array[0] = 134;
// array[1] = true;
// array[2] = 'nmji';
// array[3] = 18;
// array[4] = false;
// array[5] = 'bnnm';
// array[6] = 548;
// array[7] = false;
// array[8] = 'cvb';
// array[9] = 322;

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//13. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
// }
    
//14. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }

//15. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

//16. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//         document.write(i);
//         }
//     }

//17. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 != 0){
//         console.log(i);
//         document.write(i);
//         }
//     }

//18. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j <=59; j++) {
//         console.log((i) + ':' + j);
//     }
// }

//19. Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j <=59; j++) {
//         if(i==2 && j==20){
//             break;
//         }
//         for (let k = 0; k <=59; k++) {
//             console.log((i) + ':' + j + ':' + k);  
//         }
//     }
// }

//20. Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let result ='';

// for (let i = 0; i < array.length; i++) {
// result+=array[i];
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let i = 0;
// let result ='';

// while(i<array.length){
//     result+=array[i];
//     i++;
// }
// console.log(result);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let result ='';

// for (let element of array) {
//     result+=element;
//     element++;
// }
// console.log(result);
