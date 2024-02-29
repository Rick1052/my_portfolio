const meny = document.getElementById('buttonMenu');
const menu = document.getElementById('menu');
const separa = document.getElementById('separa');

function handleClick(){
    buttonMenu.classList.toggle('active');
    menu.classList.toggle('active');
    separa.classList.toggle('active');
}