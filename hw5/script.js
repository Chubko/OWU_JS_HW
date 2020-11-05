//1 -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// function Tag(titleOfTag, actionOfTag, attrs){
//     this.titleOfTag = titleOfTag;
//     this.actionOfTag = actionOfTag;
//     this.attrs = attrs;
// }
// let a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{titleOfAttr: 'href',actionOfAttr: 'Задает адрес документа, на который следует перейти.'}, {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'}]);

// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{titleOfAttr: 'align', actionOfAttr:'Задает выравнивание содержимого тега <div>.'}, {titleOfAttr: 'title', actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);

// let h1 = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.', [{titleOfAttr: 'align', actionOfAttr:'Определяет выравнивание заголовка.'}, {titleOfAttr: 'class', actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {titleOfAttr: 'id', actionOfAttr:'Указывает имя стилевого идентификатора.'}]);

// let span = new Tag('span', 'Tег <span> предназначен для определения строчных элементов документа.', [{titleOfAttr: 'style', actionOfAttr:'Применяется для определения стиля элемента с помощью правил CSS.'}, {titleOfAttr: 'lang', actionOfAttr:'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'}]);

// let input = new Tag('input', 'Tег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{titleOfAttr: 'accept', actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr: 'form', actionOfAttr:'Связывает поле с формой по её идентификатору.'}]);

// let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [{titleOfAttr: 'action', actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'}, {titleOfAttr: 'method', actionOfAttr:'Метод протокола HTTP'}]);

// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{titleOfAttr: 'disabled', actionOfAttr:'Заблокировать для доступа элемент списка.'}, {titleOfAttr: 'label', actionOfAttr:'Указание метки пункта списка.'}]);

// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{titleOfAttr: 'accesskey', actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr: 'autofocus', actionOfAttr:'Устанавливает, что список получает фокус после загрузки страницы.'}]);

//2 -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити 
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// class Tag{
//     constructor(titleOfTag, actionOfTag, attrs){
//     this.titleOfTag = titleOfTag;
//     this.actionOfTag = actionOfTag;
//     this.attrs = attrs;
// }
// }
// let a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{titleOfAttr: 'href',actionOfAttr: 'Задает адрес документа, на который следует перейти.'}, {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'}]);

// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{titleOfAttr: 'align', actionOfAttr:'Задает выравнивание содержимого тега <div>.'}, {titleOfAttr: 'title', actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}]);

// let h1 = new Tag('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.', [{titleOfAttr: 'align', actionOfAttr:'Определяет выравнивание заголовка.'}, {titleOfAttr: 'class', actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {titleOfAttr: 'id', actionOfAttr:'Указывает имя стилевого идентификатора.'}]);

// let span = new Tag('span', 'Tег <span> предназначен для определения строчных элементов документа.', [{titleOfAttr: 'style', actionOfAttr:'Применяется для определения стиля элемента с помощью правил CSS.'}, {titleOfAttr: 'lang', actionOfAttr:'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'}]);

// let input = new Tag('input', 'Tег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{titleOfAttr: 'accept', actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr: 'form', actionOfAttr:'Связывает поле с формой по её идентификатору.'}]);

// let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [{titleOfAttr: 'action', actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'}, {titleOfAttr: 'method', actionOfAttr:'Метод протокола HTTP'}]);

// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{titleOfAttr: 'disabled', actionOfAttr:'Заблокировать для доступа элемент списка.'}, {titleOfAttr: 'label', actionOfAttr:'Указание метки пункта списка.'}]);

// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{titleOfAttr: 'accesskey', actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr: 'autofocus', actionOfAttr:'Устанавливает, что список получает фокус после загрузки страницы.'}]);
// console.log(select);

// 3 - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'A4',
//     manufacturer: 'Audi',
//     yearOfManufacture: 2014,
//     maxSpeed: 240,
//     engine: '2.0',
//     drive: ()=>{console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);},
//     info: ()=>{console.log('Інфо про авто: \n' + 'модель: ' + car.model + ", " + "виробник: " + car.manufacturer + ", " + "рік випуску: " + car.yearOfManufacture + ", " + "максимальна швидкість: " + car.maxSpeed + ", " + "двигун: " + car.engine );},
//     increaseMaxSpeed: (newSpeed)=> car.maxSpeed+=newSpeed,
//     changeYear: (newValue)=>car.yearOfManufacture=newValue,
//     addDriver: (driver)=>car.driver=driver
// };

// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2015);
// car.addDriver({name: 'Ivan', expirience: 5});
// console.log(car);

//4 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, manufacturer, yearOfManufacture, maxSpeed, engine){
//     this.model = model,
//     this.manufacturer = manufacturer,
//     this.yearOfManufacture = yearOfManufacture,
//     this.maxSpeed = maxSpeed,
//     this.engine = engine,
//     this.drive = ()=>{console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);},
//     this.info = ()=>{console.log('Інфо про авто: \n' + 'модель: ' + this.model + ", " + "виробник: " + this.manufacturer + ", " + "рік випуску: " + this.yearOfManufacture + ", " + "максимальна швидкість: " + this.maxSpeed + ", " + "двигун: " + this.engine );},
//     this.increaseMaxSpeed = (newSpeed)=> this.maxSpeed+=newSpeed,
//     this.changeYear = (newValue)=>this.yearOfManufacture=newValue,
//     this.addDriver = function (driver){this.driver=driver;};
// }

// let car = new Car('A6', 'Audi', 2012, 240, '2.0');
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2015);
// car.addDriver({name: 'Ivan', expirience: 5});
// console.log(car);

//5 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт
// class Car{
//     constructor(model, manufacturer, yearOfManufacture, maxSpeed, engine){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     }
//     drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
//     info(){console.log('Інфо про авто: \n' + 'модель: ' + this.model + ", " + "виробник: " + this.manufacturer + ", " + "рік випуску: " + this.yearOfManufacture + ", " + "максимальна швидкість: " + this.maxSpeed + ", " + "двигун: " + this.engine );}
//     increaseMaxSpeed(newSpeed){this.maxSpeed+=newSpeed;}
//     changeYear(newValue){this.yearOfManufacture=newValue;}
//     addDriver(driver){this.driver=driver;}
// }

// let car = new Car('A6', 'Audi', 2012, 240, '2.0');
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2015);
// car.addDriver({name: 'Ivan', expirience: 5});
// console.log(car);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popeliushka{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let popeliushky = [];
// popeliushky.push(new Popeliushka('Ira', 18, 36));
// popeliushky.push(new Popeliushka('Oksana', 19, 38));
// popeliushky.push(new Popeliushka('Ilona', 21, 40));
// popeliushky.push(new Popeliushka('Anna', 19, 38));
// popeliushky.push(new Popeliushka('Inna', 28, 37));
// popeliushky.push(new Popeliushka('Alina', 23, 35));
// popeliushky.push(new Popeliushka('Olena', 25, 36));
// popeliushky.push(new Popeliushka('Olga', 18, 38));
// popeliushky.push(new Popeliushka('Eva', 19, 36));
// popeliushky.push(new Popeliushka('Nadia', 22, 34));

// class Prince{
//     constructor(name, age, shoe){
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let prince = new Prince('Ivan', 24, 34);

// for (const popeliuska of popeliushky) {
//     if(popeliuska.footSize === prince.shoe){
//         console.log(`Твоя Попелюшка ${popeliuska.name}`);
//     }    
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function  Popeliushka(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let popeliushky = [];
popeliushky.push(new Popeliushka('Ira', 18, 36));
popeliushky.push(new Popeliushka('Oksana', 19, 38));
popeliushky.push(new Popeliushka('Ilona', 21, 40));
popeliushky.push(new Popeliushka('Anna', 19, 38));
popeliushky.push(new Popeliushka('Inna', 28, 37));
popeliushky.push(new Popeliushka('Alina', 23, 35));
popeliushky.push(new Popeliushka('Olena', 25, 36));
popeliushky.push(new Popeliushka('Olga', 18, 38));
popeliushky.push(new Popeliushka('Eva', 19, 36));
popeliushky.push(new Popeliushka('Nadia', 22, 34));

function Prince(name, age, shoe){
            this.name = name;
            this.age = age;
            this.shoe = shoe;
        }
    
let prince = new Prince('Ivan', 24, 34);
    
for (const popeliuska of popeliushky) {
    if(popeliuska.footSize === prince.shoe){
            console.log(`Твоя Попелюшка ${popeliuska.name}`);
    }    
    }

