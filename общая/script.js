
/////async и defer - атрибуты тега <script>
///defer не блокирует страницу, запускает скрипт в фоновом режиме, и продолжает дальше строить ДОМ  структуру
////async означает что скрипт абсолютно независим/// никого не ждут// то что первое загрузится - запустится в первую очередь


const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src){
    const script = document.createElement('script');
script.src = 'test.js';
document.body.append(script);////динамически загружающийся скрипт, ведет себя как async
script.async = false;////сделает дин скрипт обычным как при defer.
};
loadScript('test.js');