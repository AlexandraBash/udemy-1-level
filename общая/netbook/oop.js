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

///инкапсуляция

class User{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }
    #surname = 'Basheva';
    say = () =>{
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }
    get age(){
        return this._age;
    }
    set age(age){
        if( typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        }else{
            console.log('Недопустимое значение');
        }
    }
}

const sasha = new User('Sasha', 27);
console.log(sasha.surname);
sasha.say();



