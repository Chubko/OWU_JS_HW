//1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// let btn = document.createElement('button');

// div.setAttribute('id', 'text');
// div.style.backgroundColor = 'blue';
// div.style.width = '300px';
// div.style.height = '300px';
// div.style.textAlign = 'center';

// btn.classList.add('button');
// btn.innerText = 'REMOVE';

// div.appendChild(btn);
// document.body.appendChild(div);

// btn.addEventListener('click', ()=>{
// div.style.display = 'none';
// });

//2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.classList.add('button');
// button.innerText = 'REMOVE';

// document.body.appendChild(button);

// button.addEventListener('click', ()=>{
//     button.style.display = 'none';
//     });

//3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// let btn = document.createElement('button');

// btn.classList.add('button');
// btn.innerText = 'SUBMIT AGE';

// btn.addEventListener('click', (e)=>{
// if(input.value< 18){
//     alert('Ваш вік менший 18');
// }
// });

// document.body.appendChild(input);
// document.body.appendChild(btn);

//4 - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.createElement('ul');
// menu.innerText = 'Menu';

// for (let i = 1; i <= 5; i++) {
//     let li = document.createElement('li');
//     li.innerText = `пункт ${i}`;
//     li.classList.add('active');
//     menu.appendChild(li);   
// }
// document.body.appendChild(menu);

// let li = document.querySelectorAll('.active');

// menu.onclick = ()=>{   
//     li.forEach(el => {
//        el.classList.toggle('hidden');
//     });
// };

//5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments = [{title: 'koment 1', body: 'lorem'}, {title: 'koment 2', body: 'lorem'},{title: 'koment 3', body: 'lorem'}, {title: 'koment 4', body: 'lorem'}, {title: 'koment 5', body: 'lorem'}];

// coments.forEach((el)=>{
//     let div = document.createElement('div');
//     let btn = document.createElement('button');
//     let title = document.createElement('div');
//     let body = document.createElement('div');

//     div.style.margin = '30px';

//     title.innerText = `${el.title}`;
//     body.innerText = `${el.body}`;
//     btn.innerText = 'hide body';

//     body.classList.add('active');

//     div.appendChild(title);
//     div.appendChild(body);
//     div.appendChild(btn);
//     document.body.appendChild(div);

//     btn.onclick = ()=>{
//         body.classList.toggle('hidden');
//         btn.innerText = 'show body';
//     };
// });
   
//6 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement('form');
// let form2 = document.createElement('form');
// let btn = document.createElement('button');

// form1.setAttribute('name', 'form1');
// form2.setAttribute('name', 'form2');

// btn.classList.add('button');
// btn.innerText = 'Click me!';

// for (let i = 0; i < 2; i++) {
//     let input1 = document.createElement('input');
//     let input2 = document.createElement('input');
//     input1.setAttribute('name', 'input');
//     input2.setAttribute('name', 'input');
//     input1.style.margin = '30px';
//     input2.style.margin = '30px';
//     form1.appendChild(input1);
//     form2.appendChild(input2);    
// }

// document.body.appendChild(form1);
// document.body.appendChild(form2);
// document.body.appendChild(btn);

// let inputs1 = document.forms.form1.input;
// let inputs2 = document.forms.form2.input;

// btn.addEventListener('click', (e)=>{
//     inputs1.forEach(element => {
//         console.log(element.value);
//     });
//     inputs2.forEach(element => {
//         console.log(element.value);
//     });
// });

//7 - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let div = document.createElement('div');
// document.body.appendChild(div);

// function createTable(row, column, tag){
// let table = document.createElement('table');
// table.style.borderCollapse = 'collapse';

// for (let i = 0; i < row; i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < column; j++) {
//         let column = document.createElement('td');
//         column.classList.add('column');
//         row.appendChild(column);   
//     }
//     table.appendChild(row);
//     tag.appendChild(table);
// }
// }
// createTable(3,4,div);

//8 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement('form');
// let inputRow = document.createElement('input');
// let inputColumn = document.createElement('input');
// let inputText = document.createElement('input');
// let btn = document.createElement('button');

// btn.classList.add('button');
// btn.innerText = 'SUBMIT';

// form.setAttribute('name', 'form');
// inputRow.setAttribute('placeholder', 'Enter number of rows');
// inputRow.setAttribute('name', 'inputRows');
// inputColumn.setAttribute('placeholder', 'Enter number of columns');
// inputColumn.setAttribute('name', 'inputColumns');
// inputText.setAttribute('placeholder', 'Enter the text');
// inputText.setAttribute('name', 'inputText');

// form.appendChild(inputRow);
// form.appendChild(inputColumn);
// form.appendChild(inputText);
// form.appendChild(btn);
// document.body.appendChild(form);

// let row = document.forms.form.inputRows;
// let column = document.forms.form.inputColumns;
// let text = document.forms.form.inputText;

// let columns = document.getElementsByClassName('column');
// console.log(columns);

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     createTable(row.value,column.value,div);
//     for (let element of columns) {
//         element.innerText = text.value;    
//     }
// });

//9 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let images = ['http://foto.ua/uploads/photos/296/296749_2.jpeg', 'http://foto.ua/uploads/photos/296/296119_2.jpeg', 'http://foto.ua/uploads/photos/293/293932_2.jpeg', 'http://foto.ua/uploads/photos/286/286268_2.jpeg', 'http://foto.ua/uploads/photos/284/284024_2.jpeg'];
// let div = document.createElement('div');
// let btnRight = document.createElement('button');
// let btnLeft = document.createElement('button');
// let img = document.createElement('img');
// btnLeft.classList.add('arrow-left');
// btnRight.classList.add('arrow-right');
// div.classList.add('image');
// div.appendChild(btnLeft);
// div.appendChild(img);
// div.appendChild(btnRight);
// let index = 0; 
// img.setAttribute('src',images[index]);

// btnRight.onclick = ()=>{
//     if(index>=images.length-1){
//         index = 0;
//         img.setAttribute('src',images[index]);
//     }else{
//         img.setAttribute('src',`${images[index+1]}`);
//         index++;
//     }
// };

// btnLeft.onclick = ()=>{
//     if(index<=0){
//         index = images.length-1;
//         img.setAttribute('src',images[index]);
//     }else{
//         img.setAttribute('src',`${images[index-1]}`);
//         index--;
//     }
// };
    
// document.body.appendChild(div);

//10 - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['смішарік', 'мікімаус', 'покемон', 'казявка', 'ніндзя', 'шрек'];
// let form = document.createElement('form');
// let input = document.createElement('input');
// let btn = document.createElement('input');
// form.setAttribute('name', 'form');
// input.setAttribute('type', 'text');
// input.setAttribute('name', 'input');
// btn.setAttribute('type', 'submit');

// form.appendChild(input);
// form.appendChild(btn);
// document.body.appendChild(form);

// let inputValue = document.forms.form.input;

// btn.onclick = ()=>{
//     array.forEach(element =>{
//         if(element === inputValue.value.toLowerCase()){
//             alert('Ви ввели нецензурне слово!!!');
//         }
//     });
// };

//11 - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let array = ['смішарік', 'мікімаус', 'покемон', 'казявка', 'ніндзя', 'шрек'];
// let form = document.createElement('form');
// let input = document.createElement('input');
// let btn = document.createElement('input');
// form.setAttribute('name', 'form');
// input.setAttribute('type', 'text');
// input.setAttribute('name', 'input');
// btn.setAttribute('type', 'submit');

// form.appendChild(input);
// form.appendChild(btn);
// document.body.appendChild(form);

// let inputValue = document.forms.form.input;

// btn.onclick = ()=>{
//     array.forEach(element =>{
//         if(inputValue.value.toLowerCase().includes(element)){
//             alert('Ви ввели нецензурне слово!!!');
//         }
//     });
// };

//12 -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let wrap = document.getElementById('wrap');
// let titleMain = document.getElementsByTagName('h1');
// let titles = document.getElementsByTagName('h2');

// let wrapper = document.createElement('div');
// let menu = document.createElement('aside');
// let menuTitle = document.createElement('ul');


// menu.appendChild(menuTitle);
// wrapper.appendChild(menu);
// wrapper.appendChild(wrap);
// document.body.appendChild(wrapper);

// wrapper.classList.add('wrapper');
// for (let i = 0; i < titles.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.setAttribute('href', `#${i}`);
//     titles[i].setAttribute('id', i );
//     a.innerText = titles[i].textContent;
//     li.appendChild(a);
//     menuTitle.appendChild(li);
//     console.log(titles[i]);
// }


//13 -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let checkBox1 = document.createElement('input');
// let checkBox2 = document.createElement('input');
// let checkBox3 = document.createElement('input');
// let btn = document.createElement('input');

// checkBox1.setAttribute('type','checkbox');
// checkBox2.setAttribute('type','checkbox');
// checkBox3.setAttribute('type','checkbox');
// checkBox1.setAttribute('id','1');
// checkBox2.setAttribute('id','2');
// checkBox3.setAttribute('id','3');
// btn.setAttribute('type','submit');

// document.body.appendChild(checkBox1);
// document.body.appendChild(checkBox2);
// document.body.appendChild(checkBox3);
// document.body.appendChild(btn);

// btn.onclick = ()=>{
//     if(document.getElementById('1').checked){
//         console.log(usersWithAddress.filter(element => element.status === false));
//     }
//     if(document.getElementById('2').checked){
//         console.log(usersWithAddress.filter(element => element.age >= 29));        
//     }
//     if(document.getElementById('3').checked){
//         console.log(usersWithAddress.filter(element => element.address.city === 'Kyiv'));        
//     }
// };

