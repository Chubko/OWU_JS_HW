// 1 створити функцію яка виводить масив
// function showArray(array){
//     console.log(array);
// }
// showArray([1, 3, 54, true]);

// 2 створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let array = [];
// function fillArray(length){
//     for (let i = 0; i < length; i++) {
//         array[i] = (Math.round(Math.random() * 100));    
//     }
//     showArray(array);
// }
// fillArray(10);

// 3 створити функцію яка приймає три числа та виводить та повертає найменьше.
// function showMinimum(number1, number2, number3){
//     let min;
//     if(number1<=number2 && number1<=number3){
//         min = number1;
//     }else if (number2<=number1 && number2<=number3){
//         min = number2;
//     } else{
//         min = number3;
//     }
//     console.log('Найменше число: ' + min);
//     return min;
// }
// showMinimum(51, 90, 16);

// 4 створити функцію яка приймає три числа та виводить та повертає найбільше.
// function showMaximum(number1, number2, number3){
//     let max;
//     if(number1>=number2 && number1>=number3){
//         max = number1;
//     }else if (number2>=number1 && number2>=number3){
//         max = number2;
//     } else{
//         max = number3;
//     }
//     console.log('Найбільше число: ' + max);
//     return max;
// }
// showMaximum(55, 2, 190);

// 5 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function findMinimumMaximum(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if(min>arguments[i]){
//         min = arguments[i];
//         }
//         if(max<arguments[i]){
//             max = arguments[i];
//         }
//     }
//     console.log('Найбільше число: ' + max);
//     return min;
// }

// let min = findMinimumMaximum(3,6,45,67,34,2,1);
// console.log('Найменше число: ' + min);

// 6 створити функцію яка повертає найбільше число з масиву
// function findMaximum(array){
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(max<array[i]){
//             max = array[i];
//         }
//     }
// return max;
// }
// let max = findMaximum([3,6,95,67,34,2,1]);
// console.log('Найбільше число: ' + max);

// 7 створити функцію яка повертає найменьше число з масиву
// function findMinimum(array){
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(min>array[i]){
//             min = array[i];
//         }
//     }
// return min;
// }
// let min = findMinimum([3,6,95,67,34,2,1]);
// console.log('Найменше число: ' + min);

// 8 створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumArray(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
// return sum;
// }
// let sum = sumArray([2, 4, 5, 0]);
// console.log('Результат: ' + sum);

// 9 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function findAverageArray(array){
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];
//         }
//         let average = sum / array.length;

//     return average;
//     }
//     let average = findAverageArray([2, 4, 5, 0]);
//     console.log('середнє арифметичне: ' + average);

// 10 Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function findArrayLength(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         for (const key in element) {
//             if (typeof element[key] == 'object') {
//                 count ++;
//                 findArrayLength(element[key]);          
//             }   
//         }    
//     }
//     return array.length + count;
// }
// let arrayLength = findArrayLength([{persone:{name: 'Ivan'},company:{name: 'Google'}}, {}, {}, {}]);
// console.log("Кількість об'єктів в масиві: " + arrayLength);

// 11 Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function findObjectKeys(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         count += (Object.keys(element)).length;
        
//         for (const key in element) {
//             if (typeof element[key] == 'object') {
//                 count+=(Object.keys(element[key])).length;        
//             }   
//         }    
//     }
//     return count;
// }

// let objectKeys = findObjectKeys([{persone:{name: 'Ivan'},company:{name: 'Google',job:'jun'}}, {name: 'Ira'}, {}, {}]);
// console.log("Кількість полів в об'єктів масиву: " + objectKeys);

// 12 створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function sumArrayElements(array1, array2){
//     let sumArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         sumArray[i] = array1[i] + array2[i];
//        }
//     return sumArray;   
// }

// let sumArray = sumArrayElements([1,2,3,4],[2,3,4,5]);
// console.log("результуючий масив: " + sumArray);

// 13 *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function replaceArrayElements(array, i){
//     let replacedArrayElements = array.splice(i+1,0,array.splice(i,1)[0]);
//     return array;
// }
// let replacedArrayElements = replaceArrayElements([{name: 'Ivan'}, {name: 'Ira'}, {name: 'Inna'}, {name: 'Ilona'}], 1);
// console.log(replacedArrayElements);

// 14 *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function replaceNullElements(array){
//     for (let i = 0; i < array.length; i++) {
//         let nullElement = array.splice(array.indexOf(0),1);
//         array.push(nullElement[0]);
//     }
//     console.log(array);
// }
// replaceNullElements([0,0,0,1,2,0,0,0,3,0,0,4,0,0,0,0,0,5,0,0,0]);

// Створити функцію яка :
// 15 Додає в боді блок з текстом "Hello owu"
// function addHello(){
//     let div = document.createElement('div');
//     div.innerText = "Hello owu";
//     document.body.appendChild(div);
// }
// addHello();

// 16 Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElementWithText(element, text){
//     let elem = document.createElement(element);
//     elem.innerText = text;
//     document.body.appendChild(elem);
// }
// addElementWithText('div', 'Hello world!');

// 17 приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function createElement(array, element){
//     let div = document.createElement(element);
//     for (let i = 0; i < array.length; i++) {
//         let object = array[i];
//         let divElement = document.createElement('div');
//         divElement.innerText = " ";
//         for (const key in object) {
//             divElement.innerText +=" " +  object[key];
//         }

//         div.appendChild(divElement);
//     }
//     document.body.appendChild(div);
// }
// let cars = [{model: 'Audi', yearOfManufacture: 2018, power: '2.0', color: 'gray'}, {model: 'BMV', yearOfManufacture: 2019, power: '2.2', color: 'red'}, {model: 'Citroen', yearOfManufacture: 2015, power: '1.6', color: 'white'}, {model: 'Reno', yearOfManufacture: 2010, power: '2.0', color: 'blue'}, {model: 'Seat', yearOfManufacture: 2018, power: '1.2', color: 'gray'}, {model: 'Jeep', yearOfManufacture: 2020, power: '2.5', color: 'black'}, {model: 'Mercedes', yearOfManufacture: 2018, power: '2.0', color: 'brown'}, {model: 'Ford', yearOfManufacture: 2028, power: '1.4', color: 'green'}, {model: 'Lanos', yearOfManufacture: 2008, power: '1.2', color: 'gray'}, {model: 'Skoda', yearOfManufacture: 2018, power: '2.0', color: 'red'}];

// createElement(cars, 'div');

// 18 приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.Для кожної властивості створити всередені блока автомоблія свій блок
// function createElement(array, element){
//     let div = document.createElement(element);
//     for (let i = 0; i < array.length; i++) {
//         let object = array[i];
//         let divElement = document.createElement('div');
        
//         for (const key in object) {
//             let divInner = document.createElement('div');
//             divInner.innerText = object[key];
//             divElement.appendChild(divInner);
//         }
        
//         div.appendChild(divElement);
//     }
//     document.body.appendChild(div);
// }
// let cars = [{model: 'Audi', yearOfManufacture: 2018, power: '2.0', color: 'gray'}, {model: 'BMV', yearOfManufacture: 2019, power: '2.2', color: 'red'}, {model: 'Citroen', yearOfManufacture: 2015, power: '1.6', color: 'white'}, {model: 'Reno', yearOfManufacture: 2010, power: '2.0', color: 'blue'}, {model: 'Seat', yearOfManufacture: 2018, power: '1.2', color: 'gray'}, {model: 'Jeep', yearOfManufacture: 2020, power: '2.5', color: 'black'}, {model: 'Mercedes', yearOfManufacture: 2018, power: '2.0', color: 'brown'}, {model: 'Ford', yearOfManufacture: 2028, power: '1.4', color: 'green'}, {model: 'Lanos', yearOfManufacture: 2008, power: '1.2', color: 'gray'}, {model: 'Skoda', yearOfManufacture: 2018, power: '2.0', color: 'red'}];

// createElement(cars, 'div');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{userId: 3, country: 'USA', city: 'Portland'}, {userId: 1, country: 'Ukraine', city: 'Ternopil'}, {userId: 2, country: 'Poland', city: 'Krakow'}, {userId: 4, country: 'USA', city: 'Miami'},];

// function joinArrays(array1, array2){
//     let usersWithCities =[];
//     for (let i = 0; i < array1.length; i++) {
//         const elementUsers = array1[i];
//         let user = {};
//         user = usersWithId[i];
//         for (let j = 0; j < array2.length; j++) {
//             const elementCities = array2[j];
//             if(elementUsers.id == elementCities.userId){
//                 user.address =  citiesWithId[j];
//                 usersWithCities.push(user);
//             }
//         }
//     }
// return usersWithCities;
// }

// let usersWithCities = joinArrays(usersWithId, citiesWithId);
// console.log(usersWithCities);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
// 	{
// 		title: 'Первое правило Бойцовского клуба.',
// 		body: 'Никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Второе правило Бойцовского клуба.',
// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Третье правило Бойцовского клуба.',
// 		body: 'В схватке участвуют только двое.'
// 	},
// 	{
// 		title: 'Четвертое правило Бойцовского клуба.',
// 		body: 'Не более одного поединка за один раз.'
// 		},
// 		{
// 		title: 'Пятое правило Бойцовского клуба.',
// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
// 		},
// 		{
// 			title: 'Шестое правило Бойцовского клуба.',
// 			body: 'Поединок продолжается столько, сколько потребуется.'
// 		},
// 		{
// 			title: 'Седьмое правило Бойцовского клуба.',
// 			body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 		},
// 		{
// 			title: 'Восьмое и последнее правило Бойцовского клуба.',
// 			body: 'Новичок обязан принять бой.'
// 		},
//     ];
    
// function createRules(array){
//     let wrap = document.createElement('div');

//     for (let i = 0; i < array.length; i++) {
//         let rule = document.createElement('div');
//         let title = document.createElement('h2');
//         let body = document.createElement('p');
    
//         title.innerText = array[i].title;
//         body.innerText = array[i].body;
    
//         rule.appendChild(title);
//         rule.appendChild(body);
    
//         wrap.appendChild(rule);
//     }            
//     document.body.appendChild(wrap);
// }

// createRules(rules);

    
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// function checkPow(number){
//     let i=1;
//     while (i<=number){
//         if(i===number){
//             console.log('YES');
//         }else{
//             console.log('NO');
//         }  
//         i*=2;
//     }   
// }
// checkPow(16);

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// const person = {
//         name: 'Ivan',
//         surname: 'Boyko',
//         age: 28,
//         wife:{
//             name: 'Oksana',
//             age: 24
//         },
//         job:{
//             company: 'XXX',
//             position: 'manager'
//         }
//     };
    
// const clonePerson = JSON.parse(JSON.stringify(person));
// console.log(clonePerson);    

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// let array = [1, 3, ['Hello', 'World', [9, 6, 1]], ['oops'], 9];
// console.log(array.flat(2));

