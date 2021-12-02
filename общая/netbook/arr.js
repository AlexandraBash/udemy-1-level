
// ////////ПЕРЕБИРАЕМ МАССИВ/////////
const arr = [2, 3, 6, 8, 10];

////////1 вариант////

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

///////2 вариант///////

for (let value of arr){
    console.log(value);
};

// /////3 вариант

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});
///4 вариант filter
 
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(name => {
    return name.length <5;
});
console.log(shortNames);//[ 'Ivan', 'Ann' ]

//5 map

let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLocaleLowerCase());
console.log(answers);

//6 every/some припереборе массива выводят булиновое значение (true/false)
const some = [2, 'dff', 'dfghj'];
console.log(some.some(item => typeof(item) === 'number'));//true
console.log(some.every(item => typeof(item) === 'number'));//false

//7 reduce
const arr = [3, 5, 6, 8, 9, 1];
const result = arr.reduce((sum, current) => sum + current);
console.log(result);// сумма всех чисел массива = 32

const arr = ['apple', 'pear', 'plum'];
const result = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result);
///вариант 2
function arrStr(par){
    return par.reduce((prev, item) => { 
     if(prev[item]) {
       prev[item]++;
     } else {
       prev[item] = 1;
     }
     return prev;
   }, {})
 
 }
 let arr = ['t-shirt', 'dress', 't-shirt', 'trousers', 't-shirt', 'dress'];
 console.log(arrStr(arr));///{ 't-shirt': 3, dress: 2, trousers: 1 }


//практика
 const obj = {
     ivan: 'persone',
     anna: 'persone',
     dog: 'animal',
     cat: 'animal'
 };
 const newArr = Object.entries(obj)
 .filter(item => item[1] === 'persone')
 .map(item => item[0]);
 console.log(newArr);

 ///new SET - найти уникальные значения

let a = [1, 2, 3];
let b = [5, 2, 1, 4];
let c = [2, 1];
let d = [6, 7, 8];
let con = a.concat(b, c, d);///склеить массивы в один
let result  = [...new Set(con)];///найти уникальные значения
console.log(result);


///////МЕТОДЫ МАССИВОВ////


const arr = [2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}; ////////сортировка чисел массива

const str = ['z', 'f', 'h', 'j', 'l', 'a'];
str.sort();
console.log(str);/////////сортировка строк по алфавиту

