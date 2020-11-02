// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
let elements = document.getElementsByTagName('*');

for (let element of elements){
    if(element.getAttribute('class')){
    console.log(element);
    }
}

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let p = document.getElementsByTagName('p');
for (let element of p){
    element.innerText = 'hello oktenweb';
}

//  - знайти всі div та змінити ім колір на червоний
let divs = document.getElementsByTagName('div');
for (let element of divs){
    element.style.backgroundColor = 'red';
}