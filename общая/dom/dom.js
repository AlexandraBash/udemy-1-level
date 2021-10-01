
const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');/////обращение через точку к классу heart
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);/////выводит только один элемен/ первый эдемент по данному селектору

const wrapper = document.querySelector('.wrapper');//// вытянули wrapper для работы и изменении в js

//////////назначение или изменение инлайн стилей

// box.style.backgroundColor = 'blue';///смотреть два рядка ниже
// box.style.width = '500px';////смотреть на рядок ниже
box.style.cssText = 'background-color: blue; width: 500px'; /////////тоже самое что и два рядка сверху



btns[1].style.borderRadius = '100%';////изменение радиуса второй кнопки 'button'[1]
circles[0].style.backgroundColor = 'red';//////невозможно применить стиль ко всем кругам, так как это псевдомассив, данный способ только для одного элемента с псевдомассива.

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});/////метод написать/изменить стиль для каждого/всех элементов всевдомассива

const div = document.createElement('div'); ////создали элемент div который существует только внутри js
const text = document.createTextNode('Тут был я' );///создание элемента без оболочки тега//данный текст появится на странице


div.classList.add('black');///создали div-у класс black//
document.body.append(div);/////вставили созданный div в конец body используя append///

// wrapper.append(div);//////поместили созданный div с классом black в конец списка wrapper
// wrapper.prepend(div);////поместили созданный div с классом black в начало списка wrapper

hearts[1].before(div);///добавили div перед 2 сердцем
hearts[1].after(div);////добавили div после 2 сердца

// circles[0].remove();/////удалили 1 круг
hearts[1].replaceWith(circles[1]);////поменяли местами 2 сердце с 2 кругом


div.innerHTML = '<h1>Hello</h1>'; ///= Hello можно вставить как текст так и тег
// div.textContent = 'oops';///можно ввести только текст

div.insertAdjacentHTML('befor', '<h2>World</h2>');



