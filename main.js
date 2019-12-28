const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');
let size = 10;
const changeSize = () => {
    for (let i = 0; i < liItems.length; i++) {

        liItems[i].style.display = 'block';
        liItems[i].style.fontSize = size + 'px';

    }
    size++;
}
btn.addEventListener('click', changeSize);