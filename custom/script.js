const meny = document.getElementById('buttonMenu');
const menu = document.getElementById('menu');
const separa = document.getElementById('separa');

function handleClick(){
    buttonMenu.classList.toggle('active');
    menu.classList.toggle('active'); 
    separa.classList.toggle('active');
}

function sobreMim(){
    document.getElementById('sobre_mim').style.display = "block";
    document.getElementById('curriculo').style.display = "none";
    document.getElementById('contato').style.display = "none";
}

function curriculo(){
    document.getElementById('sobre_mim').style.display = "none";
    document.getElementById('curriculo').style.display = "block";
    document.getElementById('contato').style.display = "none";
}

function contato(){
    document.getElementById('sobre_mim').style.display = "none";
    document.getElementById('curriculo').style.display = "none";
    document.getElementById('contato').style.display = "block";
}