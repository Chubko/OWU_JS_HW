// 1 создать массив с 20 числами.
// let array = [5,7,89,45,32,1,3,5,11,54,67,8,90,114,34,2,58,89,0,22];
// -- при помощи метода sort и колбека  отсортировать массив.
// console.log(array.sort((a,b) => a-b));

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// console.log(array.sort((a,b) => b-a));

// -- при помощи filter получить числа кратные 3
// console.log(array.filter(value => value%3==0));

// -- при помощи filter получить числа кратные 10
// console.log(array.filter(value => value%10==0));

// -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach((value, index)=>{
//     console.log(`${index} - ${value}`);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = array.map((value)=>value*3);
// console.log(map);

// 2 - создать массив со словами на 15-20 элементов.
// let arrayString = ['apricot', 'melon', 'apple', 'pineapple', 'banana', 'bergamot', 'grape', 'grapefruit', 'pear', 'lemon', 'mandarin', 'peach', 'plum', 'lime', 'kiwi', 'mango', 'persimmon', 'pomelo', 'nut'];

// -- отсортировать его по алфавиту в восходящем порядке.
// console.log(arrayString.sort((a,b)=>{
//     if(a>b){
//         return 1;
//      }else{
//         return -1;}
//      }));

// -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(arrayString.sort((a,b)=>{
//     if(a>b){
//         return -1;
//      }else{
//         return 1;}
//      }));

// -- отфильтровать слова длиной менее 4х символов
// console.log(arrayString.filter((value)=>value.length<4));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = arrayString.map((value)=>value + '!');
// console.log(map);

// 3 Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort((a,b)=> a.age-b.age));
// console.log(users.sort((a,b)=> b.age-a.age));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a,b)=> a.name.length-b.name.length));
// console.log(users.sort((a,b)=> b.name.length-a.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersWithId =JSON.parse(JSON.stringify(users)).map((value, index) => {
//             value.id = ++index;
//             return value;
//         });

// console.log(users);
// console.log(usersWithId);

// - відсортувати його за індентифікатором
// console.log(usersWithId.sort((a,b)=>a.id-b.id));

// -- написать функцию калькулятора с 2мя числами и колбеком
// function calculator(a, b, callback){
//     let result = callback(a,b);
//     return result;
// }
// console.log(calculator(2,3,(a,b)=> a+b));

// -- написать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c, callback){
//     let result = callback(a,b,c);
//     return result;
// }
// console.log(calculator(2,3,4,(a,b,c)=> a+b-c));
    

let array = [5,7,89,45,32,1,3,5,11,54,67,8,90,114,34,2,58,89,0,22];
console.log(array);
array.reverse();
console.log(array);
