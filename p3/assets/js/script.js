let pintar = (color) => {
    let ele1 = document.querySelector('#ele1');
    ele1.style.backgroundColor = color;
}

pintar('green');

ele1.addEventListener('click', () => {
    ele1.style.backgroundColor = 'yellow'
    })