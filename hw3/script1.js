// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
const dog = {
    name: 'Sharik',
    age: 2,
    color: 'brown',
    breed: 'spaniel',
    owner: 'Ivan'
};

// - людину
const person = {
    name: 'Petro',
    surname: 'Petrenko',
    age: 25,
    job: 'manager',
    isMarried: true
};

// - автомобіль
const car ={
    make: 'Audi',
    model: 'A4',
    type: 'sedan',
    engine: '2.0',
    fuel: 'petrol'
};

// - квартиру
const appartment ={
    location: 'city centre',
    typeOfBuilding: 'multi-storied buildings',
    floor: 8,
    numberOfRooms: 3,
    hasBalcony: true
};

// - книгу
const book={
    name: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'thriller',
    type: 'paper back',
    numberOfPages: 300
};

// -- Створити масив та вивести його в консоль:
// - з 5 собак
const dogArray = [dog, dog, dog, dog, dog];
console.log(dogArray);
for (const element of dogArray) {
    console.log(element);
}

// - 3 5 людей
const personArray = [person, person, person, person, person];
console.log(personArray);
for (const element of personArray) {
    console.log(element);
}

// - з 5 автомобілів
const carArray = [car, car, car, car, car];
console.log(carArray);
for (const element of carArray) {
    console.log(element);
}

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
const house = {
    typeOfBuilding: 'detached house',
    numberOfFloors: 2,
    rooms: ['bedroom', 'living room', 'hall', 'dining room', 'kitchen', 'bathroom'],
    address: {city: 'Lviv', stret: 'Chuprynky'},
    hasGarden: true
};

// - водій
const driver = {
    name: 'Denys',
    age: 37,
    drivingExperience: 15,
    canDrive: ['car', 'bus', 'lorry', 'minibus'],
    previousCompany: {companyName: 'Uber', job: 'taxiDriver'}
};

// - іграшку
const toy = {
    type: 'doll',
    model: 'Barbie',
    price: 250,
    madeIn: 'USA',
    accessories: ['bag', 'sunglasses', 'shoes'],
    packageSize:{width: 25, height: 40}
};

// - стіл
const table = {
    
    material: 'wood',
    color: ['black', 'brown', 'white'],
    madeIn: 'Ukraine',
    producer: 'Mebli-service'
};

// - сумка
const bag = {
    brand: 'Prada',
    material: 'leather',
    color: ['black', 'brown', 'white', 'red', 'blue', 'yellow'],
    pockets: {
        inner: 3,
        outer: 1
    },
    size: {width: 10, lenght: 30, height: 20},
    weight: '0.3 kg',
};

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log('Статус Андрія: ' + users[7].status);

// - статус Максима
console.log('Статус Максима: ' + users[4].status);
console.log('Статус Максима: ' + users[10].status);

// - ім'я передостаннього об'єкту
console.log("Ім'я передостаннього об'єкту: " + users[users.length-2].name);

// - ім'я третього об'єкта
console.log("Ім'я третього об'єкту: " + users[2].name);

// - вік Олега
console.log("вік Олега: " + users[6].age);

// - вік Олі
console.log("вік Олi: " + users[3].age);
console.log("вік Олi: " + users[9].age);

// - вік + ім'я 5го об'єкта
console.log("вік + ім'я 5го об'єкта: " + users[4].age + " " + users[4].name);

// - вік + сатус Анни
console.log("вік + сатус Анни: " + users[5].age + " " + users[5].status);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
const content = document.getElementById('content');

// - отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');

// - замініть текст параграфа з id 'content' на будь-який інший
content.innerText='Ти хочеш в Бійцівський клуб?';

// - замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText="Уважно запам'ятовуй правила:";

// - змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
content.style.color='blue';
rules.style.color='blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
const rulesClasses = document.getElementsByClassName('fc bp');
console.log(rulesClasses);

// - отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules');
for (const element of fcRules) {
    console.log(element);
}
console.log(fcRules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (const element of fcRules) {
    element.style.color='red';
}

