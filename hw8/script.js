//1 - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const input = document.getElementById('task1');

// input.oninput = ()=>{
// localStorage.setItem('input', input.value);
// };
// input.value = localStorage.getItem('input');

//2 - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let form = document.forms.form;
// let checkboxAndRadio = [];

// for (let i = 0; i < form.length; i++) {
//   if(form[i].getAttribute('type') === 'checkbox' || form[i].getAttribute('type') === 'radio'){
//     checkboxAndRadio.push(form[i]);  
//   }
// }

// form.oninput=()=>{
//     for (const element in form) {
//       if(form[element].getAttribute('type') === 'checkbox' || form[element].getAttribute('type') === 'radio' || form[element].getAttribute('type') === 'submit'){
//         continue;
//       }
//       localStorage.setItem(`${form[element].getAttribute('name')}`, form[element].value);    
//     }
// };

//Не зберігає статус радіокнопок після редагування

// checkboxAndRadio.forEach((element)=>{
//     element.onclick = ()=>{
//       element.checked ? localStorage.setItem(`${element.getAttribute('id')}`, 'true') : localStorage.setItem(`${element.getAttribute('id')}`, 'false');          
//     };
// });

// for (const element in form) {
//     if(localStorage.getItem(`${form[element].getAttribute('id')}`) === 'true'){
//         form[element].setAttribute('checked','checked');
//     }
//     form[element].value = localStorage.getItem(`${form[element].getAttribute('name')}`);
// }

//3 -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const input = document.getElementById('task1');
// const btnSave = document.getElementById('button');
// const btnBack = document.getElementById('back');
// const btnForward = document.getElementById('forward');

// let id=0;

// btnSave.addEventListener('click', ()=>{
//     localStorage.setItem(`input${id}`, input.value);
//     id++;    
// });

// input.value = localStorage.getItem(`input${localStorage.length-1}`);

// btnBack.addEventListener('click', ()=>{
//     if(input.value === localStorage.getItem(`input${localStorage.length-1}`)){
//         id=localStorage.length-1;   
//     }
//     if(id>0){
//         input.value = localStorage.getItem(`input${id-1}`);
//         id--;
//     }else{
//         input.value = localStorage.getItem(`input${0}`);
//     }
// });

// btnForward.addEventListener('click', ()=>{
//     if(id<localStorage.length-1){
//         input.value = localStorage.getItem(`input${id+1}`);
//         id++;
//     }else{
//         input.value = localStorage.getItem(`input${localStorage.length-1}`);    
//     }
// });

//4 - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

const form = document.forms.form2;
const btn = document.getElementById('submit');
const contactList = document.createElement('div');
let newContact;
let id = 0;

document.body.appendChild(contactList);

class Contact{
  constructor(name, phone, email, company, department, birthday){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.company = company;
    this.department = department;
    this.birthday = birthday;
  } 
}

btn.addEventListener('click',()=>{
  newContact = new Contact(form.name.value, form.phone.value, form.email.value, form.company.value, form.department.value, form.birthday.value);
  newContact.id = id;
  localStorage.setItem(`newContact${id}`, JSON.stringify(newContact));
  id++;
  form.reset();

  const contactBlock = document.createElement('div');
  const btnRemove =  document.createElement('button');
  const btnEdit =  document.createElement('button');
            
  contactBlock.innerText = "";
  btnRemove.innerText = "REMOVE";
  btnEdit.innerText = "EDIT";

  for (const key in newContact) {
    contactBlock.innerText += ` ${key} - ${newContact[key]}\n`;
    contactBlock.setAttribute('id', newContact.id);
  }

  contactBlock.appendChild(btnRemove);
  contactBlock.appendChild(btnEdit);
  contactList.appendChild(contactBlock);

  btnRemove.addEventListener('click', (e)=>{ 
    e.target.parentElement.style.display = 'none';
    localStorage.removeItem(`newContact${e.target.parentElement.id}`);
    });
              
  btnEdit.addEventListener('click', (e)=>{
    if(newContact.id == e.target.parentElement.id){
      let index = e.target.parentElement.id;
      let contact = JSON.parse(localStorage.getItem(`newContact${index}`));
      let i = 0;
      for (const key in contact) {
        form[i].value = contact[key];                
        i++;                   
      }  
    }
});
});

