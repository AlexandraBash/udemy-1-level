
// ////////////// ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ///////////////////

// //копия по значению для примитивных типов данных
// let a = 5,
//     b = a;
//     b = b + 5;
//     console.log(b);
//     console.log(a);/////////копия по значению

// ////////////////копия по ссылке, для обьектов/массивов
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;///сылка, модифицируем изначальный обьект
// copy.a = 10;
// console.log(copy);
// console.log(obj);/////копия по ссылке, знаечение меняется и в копи и в обджект.


///////поверностное копирование обьекта через цикл/////////////
function copy(mainObj){
    let objCopy = {};////создаем пустой обьект в который будем копировать
    let key;///////создаем ключи, свойства
    for (key in mainObj){
        objCopy[key] = mainObj[key];////копируем в обджкопи свойства и значения с меинобдж
    }
    return objCopy//////запустить в работу созданную копию первого обьекта///
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};//////наш первоначальный обьект 
const newNumbers = copy(numbers);  ////используем функцию копирования 
newNumbers.a = 10; /////изменяем значение "а" в новой копии не трогая первоначальный вариант обьекта
console.log(newNumbers);/////модифицированная, измененная копия первого обьекта
console.log(numbers); ////первый обьект

/////////используем Object.assign для копирования нового обьекта с добавлением новых ключей/свойств
// const add = {
//     d: 17,
//     e: 20
// };
// console.log(Object.assign(numbers, add));/////обьедененная копия обьекта с двух обьектов


// ///////копия массива

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); ///////метод для копии массива 
// newArray[1] = 'basheva';
// console.log(newArray);
// console.log(oldArray);


/////SPREAD оператор/////4 способ копирования////

// const video = ['youtube', 'vimeo','rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);  /////интернет - копия массива включает первых два массива + вк, фейсбук


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    a: 1,
    b: 2
};
const neqObj = {...q};
