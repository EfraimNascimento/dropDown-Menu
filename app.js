var btnDrop = document.getElementById('dropMenu'); 
var menu = document.getElementById('Menu');
var iconChange = document.getElementById('icon');

iconChange.classList.toggle('fa-caret-up');

btnDrop.addEventListener('click', function dropmenu(){
    iconChange.classList.toggle('fa-caret-up');
    menu.classList.toggle('actived');
    btnDrop.classList.toggle('clicked');
    iconChange.classList.toggle('fa-caret-down');
});



