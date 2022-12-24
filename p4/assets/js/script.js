document.addEventListener('keydown', function (event){
    if(event.key === 'a') {
        cambiarColor = '#0000ff';
    } else if(event.key === 's') {
        cambiarColor = '#000000';
    } else if(event.key === 'd') {
        cambiarColor = '#f00000';
    }
})

document.querySelector('#alfa').addEventListener('click', () => {
    color1 = document.querySelector('#alfa');
    color1.style.backgroundColor = cambiarColor;
})

document.querySelector('#beta').addEventListener('click', () => {
    color2 = document.querySelector('#beta');
    color2.style.backgroundColor = cambiarColor;
})

document.querySelector('#gamma').addEventListener('click', () => {
    color3 = document.querySelector('#gamma');
    color3.style.backgroundColor = cambiarColor;
})

document.querySelector('#delta').addEventListener('click', () => {
    color4 = document.querySelector('#delta');
    color4.style.backgroundColor = cambiarColor;
})