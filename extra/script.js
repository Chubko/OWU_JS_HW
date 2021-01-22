// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"
// function toString(number){
//     let arr = number.toString();
//     arr = arr.split('');
//     let end = '0';
//
//     let newArr = [];
//     newArr.push(arr[arr.length-1]);
//
//     for (let i = arr.length-2; i >=0  ; i--) {
//         arr[i] +=end;
//         newArr.unshift(arr[i]);
//         end += 0;
//     }
//     return newArr.join(' + ');
// }
// let str = toString(56789);
// console.log(str);

//2 Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

// let arr = [1,6,9,0,17,88,4,7];
// let maxValue = arr.reduce((acc, value)=>{
//     let max = acc;
//     if(acc<value){
//         max=value;
//     }
//     return max;
// },0);
// console.log(maxValue);

//3 Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3
// let arr = '2176491947586100'.split('');
// arr = arr.map(string => +string);
// console.log(countNumber(1,arr));

// function countNumber(number, array){
//     let count = 0;

//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === number){
//         count++;
//         }
//         if(array[i] === 0 && array[i-1] ===0){
//         break;
//         }    
//     }
//     return count;
// }

// 4 найти приопущенную букву в массиве:

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// function missedLetter(array){
//     for (let i = 1; i < array.length; i++) {
//         let previous = array[i-1].charCodeAt();
//         let current = array[i].charCodeAt();
//         if(current-previous!==1){
//             return String.fromCharCode(previous+1);
//         }   
//     }
// }
// console.log(missedLetter(["a","b","c","d","f"]));
// console.log(missedLetter(["O","Q","R","S"] ));
//
//5 сложить цифры числа:
//
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

// function sumDigits(number){
//     let arr = number.toString();
//     arr = arr.split('');
    //циклом
    // let sum = 0;
    // for (let element of arr) {
    //     element = +element;
    //     if(element){
    //         sum+=element;
    //     }else{
    //         continue;
    //     }  
    // }
    // reduce   
    // let sum = arr.reduce((acc, value)=>{
    //     value=+value;
    //     if(!value){
    //         value=0;
    //     }return acc+(+value);
    // },0);
//     console.log(sum);
//     return sum;
// }
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

//6 Проверьте, имеет ли строка одинаковое количество "" x "" и "" o "". Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любые символы.
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // потому что нет ни того ни другого
// XO("zzoo") => false
// function findXO(string){
//     let arr = string.toLowerCase().split('');
//     let countX = [];
//     let countO = [];
//     arr.forEach(value=>{
//         if(value ==='x'){
//             countX.push(value);
//         }
//         if(value ==='o'){
//             countO.push(value);
//         }
//     });
//     if(countX.length === countO.length ){
//     return true;
//     }return false;
// }
// console.log(findXO("ooxx")) ;
// console.log(findXO("xooxx")) ;
// console.log(findXO("ooxXm")) ;
// console.log(findXO("zpzpzpp")) ;
// console.log(findXO("zzoo")) ;

// Перебрати масив за допомогою колбеків
// function  showArray(callback){
//     callback();
// }
//
// let arr = [1,3,5,6,7,8];
//
// showArray(()=>{
//     let i = 0;
//     if(i < arr.length) {
//         console.log(arr[i]);
//         i++;
//         showArray(() => {
//             if (i < arr.length) {
//                 console.log(arr[i]);
//                 i++;
//                 showArray(() => {
//                     if (i < arr.length) {
//                         console.log(arr[i]);
//                         i++;
//                         showArray(() => {
//                             if (i < arr.length) {
//                                 console.log(arr[i]);
//                                 i++;
//                                 showArray(() => {
//                                     if (i < arr.length) {
//                                         console.log(arr[i]);
//                                         i++;
//                                         showArray(() => {
//                                             if (i < arr.length) {
//                                                 console.log(arr[i]);
//                                                 i++;
//                                                 showArray(() => {
//                                                     if (i < arr.length) {
//                                                         console.log(arr[i]);
//                                                         i++;
//                                                     }
//                                                 });
//                                             }
//                                         });
//
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

// Перебрати масив за допомогою рекурсії
// function recursion(array){
//     for (const element of array) {
//         if (Array.isArray(element)) {
//             recursion(element);
//         }else {
//             console.log(element);
//         }
//     }
// }
// let arr = [4,6,3,89,[1.2,6,8,90,[54,3,2]]];
// recursion(arr);

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }
//
// let counter = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2

function test() {
    return this;
}
let y = test();
console.log(y)


