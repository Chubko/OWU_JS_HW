//1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// const user = {
//     useName: 'Ivan',
//     userSurname: 'Boyko',
//     password: 111,
//     age: 20
// };

// const book = {
//     title: 'Garry Potter',
//     author: 'Johan Rolling',
//     genre: 'fantacy'
// };

// const smartphone ={
//     brand: 'Samsung',
//     model: 'Galaxy',
//     OS: 'Android'
// };

// const tent = {
//     capacity: 2,
//     construction: 'two-layer',
//     weight: '2.8 kg'
// };

// const ball ={
//     sort: 'basketball',
//     size: 5,
//     material: 'leather'
// };

//2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let computer = {
//     type: ['Desktops', 'Laptops', 'Tablets'],
//     price: {low: 'Under $100', middle: '$100 to $200', high: '$200 & Above'},
//     condition: ['new', 'used'],
//     availability: true
// };

// let bike = {
//     numberOfSpeeds: 21,
//     wheelSize: '29 Inches',
//     brakeType: ['disk', 'caliper', 'linear Pull'],
//     cyclingAccessories: {
//         isLight: true,
//         isBikeLock: false
//     }
// };

// let watch = {
//     style: ['Casual', 'Luxury', 'Sport'],
//     watchType: {
//         wristWatches: {shape: ['Oval', 'Rectangle', 'Round', 'Square'],
//         display: 'Digital'},
//         Smartwatches: {
//             healthAndFitnessFeatures: ['Activity Tracker', 'Heart Rate Monitor', 'Sleep Monitor', 'Pedometer', 'Distance Tracker', 'Multisport Tracker', 'Calorie Tracker'],
//             activityType: ['Running', 'Cycling', 'Swimming', 'Yoga']
//         }
//     },
//     seller: 'Amazon'
// };

// let digitalCamera = {
//     modelName : 'Panasonic Lumix FZ80',
//     shootingModes: 'manual',
//     lens: 'converter',
//     cameraColor: ['black', 'gray'],
//     additionalOptions:{
//         memoryCard: '64 GB',
//         bag: 'Large DSLR Camera Gadget Bag'
//     }
// };

// let shoes = {
//     shoeColor: 'black',
//     shoeSize: [35, 36, 37, 38, 39, 40],
//     shoeType: 'sandals',
//     shoePrice:{
//         forAll: 1300,
//         forClubMember: 1000
//     }
// };

//3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// console.log("Ключі об'єкта user:");
// for (const key in user) {
//     console.log(key);
// }

// console.log("Ключі об'єкта book:");
// for (const key in book) {
//     console.log(key);
// }

// console.log("Ключі об'єкта smartphone:");
// for (const key in smartphone) {
//     console.log(key);
// }

// console.log("Ключі об'єкта tent:");
// for (const key in tent) {
//     console.log(key);
// }

// console.log("Ключі об'єкта ball:");
// for (const key in ball) {
//     console.log(key);
// }

// console.log("Ключі об'єкта computer:");
// for (const key in computer) {
//     console.log(key);
// }

// console.log("Ключі об'єкта bike:");
// for (const key in bike) {
//     console.log(key);
// }

// console.log("Ключі об'єкта watch:");
// for (const key in watch) {
//     console.log(key);
// }

// console.log("Ключі об'єкта digitalCamera:");
// for (const key in digitalCamera) {
//     console.log(key);
// }

// console.log("Ключі об'єкта shoes:");
// for (const key in shoes) {
//     console.log(key);
// }

//4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(user));
// console.log(Object.keys(book));
// console.log(Object.keys(smartphone));
// console.log(Object.keys(tent));
// console.log(Object.keys(ball));
// console.log(Object.keys(computer));
// console.log(Object.keys(bike));
// console.log(Object.keys(watch));
// console.log(Object.keys(digitalCamera));
// console.log(Object.keys(shoes));

//5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [{model: 'Audi', yearOfManufacture: 2018, power: '2.0', color: 'gray'}, {model: 'BMV', yearOfManufacture: 2019, power: '2.2', color: 'red'}, {model: 'Citroen', yearOfManufacture: 2015, power: '1.6', color: 'white'}, {model: 'Reno', yearOfManufacture: 2010, power: '2.0', color: 'blue'}, {model: 'Seat', yearOfManufacture: 2018, power: '1.2', color: 'gray'}, {model: 'Jeep', yearOfManufacture: 2020, power: '2.5', color: 'black'}, {model: 'Mercedes', yearOfManufacture: 2018, power: '2.0', color: 'brown'}, {model: 'Ford', yearOfManufacture: 2028, power: '1.4', color: 'green'}, {model: 'Lanos', yearOfManufacture: 2008, power: '1.2', color: 'gray'}, {model: 'Skoda', yearOfManufacture: 2018, power: '2.0', color: 'red'}];

//6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [{name: 'Lviv', population: 1000000, country: 'Ukraine', region: 
// 'Lvivska  obl.'}, {name: 'Kyiv', population: 4000000, country: 'Ukraine', region: 
// 'Kyivska obl.'}, {name: 'Luck', population: 270000, country: 'Ukraine', region: 
// 'Volynska obl.'}, {name: 'Rivne', population: 290000, country: 'Ukraine', region: 
// 'Rivnenska obl.'}, {name: 'Ternopil', population: 250000, country: 'Ukraine', region: 
// 'Ternopilska obl.'}];

//7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars1 = [{model: 'Audi', yearOfManufacture: 2018, power: '2.0', color: 'gray', driver:{name: 'Ivan', age: 25, sex: 'male', experience: 6}}, {model: 'BMV', yearOfManufacture: 2019, power: '2.2', color: 'red', driver:{name: 'Ira', age: 35, sex: 'female', experience: 14}}, {model: 'Citroen', yearOfManufacture: 2015, power: '1.6', color: 'white', driver:{name: 'Taras', age: 38, sex: 'male', experience: 16}}, {model: 'Reno', yearOfManufacture: 2010, power: '2.0', color: 'blue', driver:{name: 'Inna', age: 28, sex: 'female', experience: 5}}, {model: 'Seat', yearOfManufacture: 2018, power: '1.2', color: 'gray', driver:{name: 'Anna', age: 21, sex: 'female', experience: 2}}, {model: 'Jeep', yearOfManufacture: 2020, power: '2.5', color: 'black', driver:{name: 'Igor', age: 35, sex: 'male', experience: 6}}, {model: 'Mercedes', yearOfManufacture: 2018, power: '2.0', color: 'brown', driver:{name: 'Davyd', age: 05, sex: 'male', experience: 1}}, {model: 'Ford', yearOfManufacture: 2028, power: '1.4', color: 'green', driver:{name: 'Oksana', age: 75, sex: 'female', experience: 3}}, {model: 'Lanos', yearOfManufacture: 2008, power: '1.2', color: 'gray', driver:{name: 'Makar', age: 21, sex: 'male', experience: 3}}, {model: 'Skoda', yearOfManufacture: 2018, power: '2.0', color: 'red', driver:{name: 'Mykhaylo', age: 30, sex: 'male', experience: 5}}];

//8 - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0;
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
// i=0;
// while(i<cities.length){
//     console.log(cities[i]);
//     i++;
// }
// i=0;
// while(i<cars1.length){
//     console.log(cars1[i]);
//     i++;
// }

//9 - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);    
// }
// for (let i = 0; i < cars1.length; i++) {
//     console.log(cars1[i]);
// }

//10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const value of cars) {
//     console.log(value);
// }
// for (const value of cities) {
//     console.log(value);
// }
// for (const value of cars1) {
//     console.log(value);
// }
//11 - взять объекты из задания 1 и превратить каждый в json.
// let userJson = JSON.stringify(user);
// let bookJson = JSON.stringify(book);
// let smartphoneJson = JSON.stringify(smartphone);
// let tentJson = JSON.stringify(tent);
// let ballJson = JSON.stringify(ball);
// console.log(userJson);
// console.log(bookJson);
// console.log(smartphoneJson);
// console.log(tentJson);
// console.log(ballJson);

//12 - взять json из задания 11 и превратить их обратно в объекты.
// let cloneUser = JSON.parse(userJson);
// let cloneBook = JSON.parse(bookJson);
// let cloneSmartphone = JSON.parse(smartphoneJson);
// let cloneTent = JSON.parse(tentJson);
// let cloneBall = JSON.parse(ballJson);
// console.log(cloneUser);
// console.log(cloneBook);
// console.log(cloneSmartphone);
// console.log(cloneTent);
// console.log(cloneBook);

//13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let element of cars) {
//     let carsJson = JSON.stringify(element);
//     console.log(carsJson);    
// }

//14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let element of cities) {
//     let citiesJson = JSON.stringify(element);
//     console.log(citiesJson);    
// }

//15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cloneCars1 = [];
// for (let element of cars1) {
//     let cars1Json = JSON.stringify(element);
//     cloneCars1.push(cars1Json);  
// }
// console.log('Новий масив: ' + cloneCars1);  
//16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'Petro', age: 27, skills:['html', 'css','js']}, {name: 'Olga', age: 31, skills:['html', 'css','js', 'nodeJS', 'java']}, {name: 'Igor', age: 97, skills:['html', 'css','js','ruby', 'MySql']}];
// for (const value of users) {
//     console.log(value);
//     console.log(value.skills);
// }

//17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом поль зователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [{name: 'Petro', age: 27, skills:['html', 'css','js']}, {name: 'Olga', age: 31, skills:['html', 'css','js', 'nodeJS', 'java']}, {name: 'Igor', age: 97, skills:['html', 'css','js','ruby', 'MySql']}];
// let cloneUsers = [];
// for (const value of users) {
//     console.log(value);
//     console.log(value.skills);
//     cloneUsers.push(value.skills);
// }
// console.log(cloneUsers);

//18 - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//   let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

// for (const value of users) {
//         console.log(value);
//         for (const key in value.skills) {
//             console.log(value.skills[key]);
//         }
//     }

//19 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let usersAddress =[];

// for (const key of users) {
//     usersAddress.push(key.address);
// }
// console.log(usersAddress);

//20 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     div.innerText = user.name;
//     document.body.appendChild(div);
// }

//21 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const divName = document.createElement('div');
//     const divAge = document.createElement('div');
//     const divStatus = document.createElement('div');
//     const divAddress = document.createElement('div');
//     let address = '';

//     for (const key in user.address) {
//         address = address + " " + user.address[key];
//     }

//     divName.innerText = user.name;
//     divAge.innerText = user.age;
//     divStatus.innerText = user.status;
//     divAddress.innerText = address;

//     document.body.appendChild(div);
//     div.appendChild(divName);
//     div.appendChild(divAge);
//     div.appendChild(divStatus);
//     div.appendChild(divAddress);
// }
 
//22 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         const div = document.createElement('div');
//         const divName = document.createElement('div');
//         const divAge = document.createElement('div');
//         const divStatus = document.createElement('div');
//         const divAddress = document.createElement('div');
//         const divCity = document.createElement('div');
//         const divCountry = document.createElement('div');
//         const divStreet = document.createElement('div');
//         const divHouseNumber = document.createElement('div');
        
//         for (const key in user.address) {
//             divCity.innerText = user.address.city;
//             divCountry.innerText = user.address.country;
//             divStreet.innerText = user.address.street;
//             divHouseNumber.innerText = user.address.houseNumber;
//             divAddress.appendChild(divCity);
//             divAddress.appendChild(divCountry);
//             divAddress.appendChild(divStreet);
//             divAddress.appendChild(divHouseNumber);
//         }
    
//         divName.innerText = user.name;
//         divAge.innerText = user.age;
//         divStatus.innerText = user.status;
    
//         document.body.appendChild(div);
//         div.appendChild(divName);
//         div.appendChild(divAge);
//         div.appendChild(divStatus);
//         div.appendChild(divAddress);
//     }
                			

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

// let citiesWithId = [{userId: 3, country: 'USA', city: 'Portland'}, {userId: 1, country: 'Ukraine', city: 'Ternopil'}, {userId: 2, country: 'Poland', city: 'Krakow'}, {userId: 4, country: 'USA', city: 'Miami'},];

//23 З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities =[];

// for (let i = 0; i < usersWithId.length; i++) {
//     const elementUsers = usersWithId[i];
//     let user = {};
//     user = usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const elementCities = citiesWithId[j];
//         if(elementUsers.id == elementCities.userId){
//             user.address =  citiesWithId[j];
//             usersWithCities.push(user);
//         }
//     }
// }
// console.log(usersWithCities);

//24 - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// const content = document.getElementById('content');
// const main = document.getElementsByClassName('main');
// const div = document.getElementsByTagName('div');

// //25 - змінити цей текст використовуючи селектори id, class,  tag
// content.style.color = 'green';
// for (let i = 0; i < main.length; i++) {
//     main[i].style.backgroundColor = 'yellow';    
// }
// for (let i = 0; i < div.length; i++) {
//     div[i].style.fontSize = '20px';   
// }

//26 - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// content.style.width = '500px';
// content.style.height = '100px';

// for (let i = 0; i < main.length; i++) {
//     main[i].style.width = '500px';
//     main[i].style.height = '150px';
// }

// for (let i = 0; i < div.length; i++) {
//     div[i].style.width = '600px'; 
//     div[i].style.height = '200px'; 
// }

//27 - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table = document.createElement('table');
// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');
// document.body.appendChild(table);
// table.appendChild(tr);
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);      

//28 - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table');
// document.body.appendChild(table);
     
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     const td3 = document.createElement('td');
//     table.appendChild(tr);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);      
// }

//29 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table');
// document.body.appendChild(table);
     
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let j = 0; j < 5; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td); 
//     }    
// }

//30 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let row = +prompt('Ведіть кількість рядків');
// let column = +prompt('Ведіть кількість колонок');
// const table = document.createElement('table');
// document.body.appendChild(table);
     
// for (let i = 0; i < row; i++) {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let j = 0; j < column; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td); 
//     }    
// }

