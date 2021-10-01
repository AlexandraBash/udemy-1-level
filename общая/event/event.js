

/////события и их обработчики////
// let i = 0;
const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');
const deletElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i ==1){
    //     btn.removeEventListener('click', deletElement);
    // }
};

// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);/////смотреть на рядок ниже
btns.forEach(btn => {
    btn.addEventListener('click', deletElement)
});


// btn.addEventListener('click', () => {
//     alert('Click');
// });


const link = document.querySelector('a');
link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e.target);
});


