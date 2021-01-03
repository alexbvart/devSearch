/* Toogle menu hamburguesa */
document.querySelectorAll('.menu').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});



var btnOpenPopup = document.getElementById('btn-open-popup'),
    overley = document.getElementById('overley'),
    popup = document.getElementById('popup'),
    menu = document.querySelectorAll('.menu');
    input = document.getElementById('poppup__item__input');


btnOpenPopup.addEventListener('click',function(){
    overley.classList.toggle('active');
    popup.classList.toggle('active');
});
input.addEventListener('click',function(){
    overley.classList.toggle('active');
    popup.classList.toggle('active');
});


/* Seleccionar alguna de la secciones del menu */
/* document.getElementById('poppup__item__input').forEach(btn => {
    btn.addEventListener('click', e => {
        overley.classList.remove('active');
        popup.classList.remove('active');
        btnOpenPopup.classList.remove('active');
    });
});

 */