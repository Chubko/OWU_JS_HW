// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class Car{
    constructor(model, power, driver, price, yearOfManufacture){
        this.model=model;
        this.power=power;
        this.driver=driver;
        this.price=price;
        this.yearOfManufacture=yearOfManufacture;
    }
    fixEngine(){this.power = this.power*1.1;}   
}

class Driver{
    constructor(name, age, experience){
        this.name=name;
        this.age=age;
        this.experience=experience;
    }
    increaseExperience(){this.experience++;}
}

let cars = [];
cars.push(new Car('Mazda', 100, new Driver('Ivan', 25, 6), 15, 2015), new Car('Honda', 120, new Driver('Oleg', 29, 8), 16, 2017), new Car('Audi', 160, new Driver('Ira', 35, 10), 20, 2019), new Car('BMW', 180,new Driver('Oksana', 22, 1), 21, 2018), new Car('Reno', 110, new Driver('Petro', 39, 15), 13, 2016), new Car('Skoda', 100,new Driver('Oleksiy', 49, 10), 12, 2014),new Car('Lexus', 150,new Driver('Roksolana', 34, 7), 22, 2019), new Car('Lanos', 80,new Driver('Oleksa', 28, 3), 8, 2011), new Car('Citroen', 100,new Driver('Maksym', 26, 2), 13, 2017), new Car('Nissan', 120,new Driver('Olena', 23, 1), 14, 2018));

let newDrivers = [];
newDrivers.push(new Driver('Ostap', 29, 7), new Driver('Vlad', 30, 5), new Driver('Ivanna', 27, 4), new Driver('Borys', 46, 15), new Driver('Nazar', 28, 4));


for (let i = 0, j = 0; i < cars.length; i+=2, j++) {
    const element = cars[i];
    element.fixEngine();
    element.price*=1.05; 
    element.driver = newDrivers[j]; 
}

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    if(element.driver.experience<5 &&element.driver.age>25) {
        console.log(`${element.driver.name}, на курси підвищення кваліфікації!`);
        element.driver.experience++; 
    }else{
        console.log(`${element.driver.name} водій з досвідом!`);
    }
}
console.log(cars);

let sum = 0;
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    sum+=element.price;  
}

console.log(`Для покупки всіх авто потрібно ${sum} тис. дол.`);

