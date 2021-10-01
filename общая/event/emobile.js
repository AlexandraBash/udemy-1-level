

/////события на мобильных устройствах

///touchstart  //срабатывает при касании пальца по элементу на экране.
//touchmove ////Каждый раз, когда двигается один или несколько пальцев
///touchend ///Когда пользователь убирает палец с сенсорной поверхности
///touchenter  /////когда мы проводим пальцем по экрану и заходим на область с элементом, на который повешено событие.
//touchleave  /////когда палец покидает область с элементом
///touchcancel /////Если палец пользователя перемещается в интерфейс браузера или прикосновение должно быть отменено

window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });
});

////touches  ///количество пальце которые на мониторе 
////targetTouches ///все пальцы которые работают с данным элементом
///changedTouches //// список пальцев которые учавствуют в даном событии/совершили действия

