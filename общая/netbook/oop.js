/////////обьектно - ориентированное програмирование///// наука как правильно делать архитектуру

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

const Jonh = Object.create(soldier); //////создаем новый обьект Джон который прототипно наследуется от солдата

// const Jonh = {
//     health: 100
// };

// Jonh.__proto__ = soldier; ///////устаревший вариант
// //установили прототип для Джона от солдата
// Object.setPrototypeOf(Jonh, soldier);///////современный вариант//

Jonh.sayHello();

