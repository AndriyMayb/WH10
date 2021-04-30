// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const divka = document.querySelector('#TExt');
// const button = document.querySelector('#button')
// button.onclick = () => {
// divka.style.display = 'none'
// }
// console.log(divka)
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе
// let divka = document.querySelector('#button1')
// divka.onclick = () => {
//     divka.style.display = 'none'
// }
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const divclik = document.querySelector('#text1');
// const buttonclik = document.querySelector('#button2')
// buttonclik.onclick = () => {
//     if (divclik.value < 18 ) {
//         alert('Не зайдеш')
//     }
// }
// - Створіть меню, яке розгортається/згортається при клику
// const button3 = document.querySelector('#button3');
// const button4 = document.querySelector('#button4');
// const ol1 = document.querySelector('#ol01');
//
// button3.onclick = () => {
//     ol1.style.display = 'none'
// }
// button4.onclick = () => {
//     ol1.style.display = 'block'
// }
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

// let object = [
//     {Name : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {Name : 'Dsad', body:'lorem ipsum dolo sit ameti'},
//     {Name : 'Dsfddf', body:'lorem ipsum dolo sit ameti'},
//     {Name : 'Gdfdfds', body:'lorem ipsum dolo sit ameti'},
//     {Name : 'Rfsfds', body:'lorem ipsum dolo sit ameti'}
// ]
//
//
// for (let i = 0; i < object.length; i++) {
//     let divopper = document.createElement('div');
//     let divFullObject = document.createElement('div');
//     let divFullButton = document.createElement('div');
//     divopper.classList = 'general';
//     divFullObject.classList = 'content';
//     divFullObject.innerHTML = `<h2>${object[i].Name}</h2><p>${object[i].body}</p>`;
//     divFullButton.innerHTML = `<button class="One">Згорнути текст</button> <button class="two">розгорнути текст</button>`;
//     divopper.appendChild(divFullObject);
//     divopper.appendChild(divFullButton);
//     document.body.appendChild(divopper);
// }
// const elmentsDivppe = document.querySelectorAll('.content');
// const elementsClose = document.getElementsByClassName('One');
// const elementsVive = document.getElementsByClassName('two');
//
// for (let i = 0; i < elementsClose.length; i++) {
//     elementsClose[i].onclick = () => {
//         elmentsDivppe[i].style.display = 'none';
//     };
// }
// for (let i = 0; i < elementsVive.length; i++) {
//     elementsVive[i].onclick = () => {
//         elmentsDivppe[i].style.display = 'block';
//     };
//
// }







// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// const getFormElement1 = document.getElementById('form1');
// const getFormElement2 = document.getElementById('form2');
// const getClassElement1 = document.getElementsByClassName('button1')
//
// getClassElement1 [0].onclick = () =>{
//     console.log(getFormElement1.onetype.value)
//     console.log(getFormElement1.twotype.value)
//     console.log(getFormElement2.type1.value)
//     console.log(getFormElement2.type2.value)
// }
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function generalTable (lines, cell, table) {
// const addlines = document.querySelector(table)
//   const tables = document.createElement('table')
//     addlines.appendChild(tables)
//
//     for (let i = 0; i < lines; i++) {
//        const elementrTr = document.createElement('tr');
//
//        tables.appendChild(elementrTr);
//
//
//         for (let j = 0; j < cell; j++) {
//             const elementTd = document.createElement('td')
//              elementTd.style.border = '1px solid black'
//             elementTd.innerText = 'adasdasd'
//             tables.appendChild(elementTd)
//
//         }
//
//     }
//
// }
// generalTable(5,3,'#table1')




// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//Завдання 1
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

    // const speekMat = ['Сука', 'Блять', 'Єблан', 'Ідіот', 'Нахуй', 'Кончений' , 'Дебіл' , 'Стерва' ] ;
    // let speek = document.querySelector('.speek1')
    // let button = document.querySelector('.knopka')
    // button.onclick = () => {
    //     if (speekMat.includes(speek.value)) {
    //         alert('sory')
    //     }
    // }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const speekMat = ['Сука', 'Блять', 'Єблан', 'Ідіот', 'Нахуй', 'Кончений' , 'Дебіл' , 'Стерва' ]
let speek = document.querySelector('.speek1');
let batton = document.querySelector('.knopka');
batton.onclick = () => {
    let buttonMat = speek.value.split(' ')
    for (let buttonMatElement of speekMat) {
        if (buttonMat.includes(buttonMatElement)){
            alert()
        }
    }
}

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
const headers = document.getElementsByTagName('h2');
const menu = document.createElement('ul');
const divContent = document.getElementById('content');
divContent.appendChild(menu);

for (let i = 0; i < headers.length; i++) {
    const menuList = document.createElement('li');
    const menuListNav = document.createElement('a');
    const menuHeadersNav = document.createElement('a');
    menuListNav.innerHTML = headers[i].innerHTML;
    menuListNav.setAttribute('href', '#' + i);
    menuList.appendChild(menuListNav);
    menu.appendChild(menuList);
    headers[i].appendChild(menuHeadersNav);
    menuHeadersNav.setAttribute('id',  i);
}

// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ