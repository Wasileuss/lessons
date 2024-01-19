// Задача №1
// Отримати в константу елемент <body>

// Варіант 1
const bodyElement = document.querySelector('body');
console.log(bodyElement);

// Варіант 2
const bodyElement2 = document.body;
console.log(bodyElement2);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

const listPlace = document.querySelector('.page__container');
function addList(itemCount = 5) {
    // Створення елементів <ul> та <li>
    const ulElement = document.createElement('ul');

    for (let i = 1; i <= itemCount; i++) {
        const liElement = document.createElement('li');
        liElement.textContent = `Item ${i}`;
        ulElement.appendChild(liElement);
        liElement.classList.add('newItem');
    }
  
    // Додавання списку на сторінку
    listPlace.appendChild(ulElement);

    console.log(ulElement);
}
  
// Виклик функції зі значенням за замовченням (5 елементів)
addList();
  
// Виклик функції з вказаною кількістю елементів (наприклад, 9 елементів)
addList(9);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Додає клас "loaded" до <body>
document.body.classList.add('loaded');

// Перевіряє, чи є клас "loaded" і додає стиль кольору тексту зелений
if (document.body.classList.contains('loaded')) {
    listPlace.style.color = 'green';
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Отримуємо всі елементи з класом "item"
const items = document.querySelectorAll('.item');

// Проходимо по кожному елементу і виконуємо необхідні операції
items.forEach((item, index) => {
    // Додаємо клас "active"
    item.classList.add('active');

    // Змінюємо контент елемента
    item.textContent = `Element №${index + 1}`;
});

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.page__button');
function scrollToBlock(element) {
	
    // Затримка прокрутки
    setTimeout(function() {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }, 1000);
}

scrollToBlock(button);
// Покрутка сторінки до початку
document.addEventListener('DOMContentLoaded', function() {
    // Перевіряємо, чи кнопка була знайдена
    if (button) {
        // Додаємо обробник події на кнопку
        button.addEventListener('click', function() {
            // Прокручуємо сторінку до початку
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Отримання посилання за його класом
const linkElement = document.querySelector('.link');

// Додавання дата-атрибута
linkElement.setAttribute('data-value', '100');

// Отримання значення дата-атрибута
const dataValue = linkElement.getAttribute('data-value');

// Перевірка умови та зміна кольору тексту
if ((dataValue) && (parseInt(dataValue) < 200)) {
  linkElement.style.color = 'red';
}