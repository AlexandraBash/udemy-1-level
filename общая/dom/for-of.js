


// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);//получили родителя родителя #current - wrapper
// console.log(document.querySelector('#current').parentElement); ///аналог верхнего  =  <div class="first">


// ////////data-атрибуты

// console.log(document.querySelector('[data-current="3"]').previousSibling);////получение предидущего соседа от дата атрибута
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);/////получение следующего ЕЛЕМЕНТА (не соседа)!!!/// <li>4</li>

// console.log(document.body.childNodes);////childNodes позволяет нам получить все узлы которые есть в данном дом дереве

for(let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;///этот оператор позволит остановить повторение цикла и позволяет начать его заново с новым элементом
    }
    console.log(node);
};////перебрали всех childNodes и избавились от всех текстовых Нод

