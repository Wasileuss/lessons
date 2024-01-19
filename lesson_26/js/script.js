// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо всі елементи з класом "item"
    const items = document.querySelectorAll('.item');

    // Додаємо обробник подій для кожного елемента
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            // Перевіряємо, чи є елемент з класом "item"
            if (item) {
                item.classList.toggle('active');
            }
        });
    });
    

    // Другий варіант

    // items.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //         // Перевіряємо, чи має елемент клас "active"
    //         if (item.classList.contains('active')) {
    //             // Якщо має, видаляємо його
    //             item.classList.remove('active');
    //         } else {
    //             // Якщо не має, додаємо його
    //             item.classList.add('active');
    //         }
    //     });
    // });

});

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.onload = function () {
    document.body.classList.add('loaded');
};

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const text = document.querySelector('.page__text');

header.addEventListener('mouseenter', function() {
    // Змінюємо фон footer при наведенні курсора на header
    footer.style.backgroundColor = '#40DDB6';
    text.style.display = 'none';
});
  
header.addEventListener('mouseleave', function() {
    // Повертаємо початковий фон footer, коли курсор відходить з header
    footer.style.backgroundColor = '#6B78E5';
});

footer.addEventListener('mouseenter', function() {
    text.style.display = 'block';
})

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

function startCounter(element) {
    const count = parseInt(element.getAttribute('data-count')) || 10;
    const delay = parseInt(element.getAttribute('data-delay')) || 1000;
    
    let countNumber = 1;
  
    const intervalId = setInterval(() => {
        if (countNumber > count) {
            clearInterval(intervalId);
        } else {
            element.innerText = countNumber;
            countNumber++;
        }
    }, delay);
}
  
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}
  
const itemElement = document.getElementById('item');
const observer = new IntersectionObserver(handleIntersection, {
        root: null, 
        threshold: 0.5 
    });

observer.observe(itemElement);