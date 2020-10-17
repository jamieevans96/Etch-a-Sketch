const content = document.querySelector("#content");

const submitForm = document.querySelector('#submit')
const closeCover = document.querySelector('#close')
const inputCover = document.querySelector('.inputCover')

generateCanvas(256)

function generateCanvas(x) {
    for (let i = 0; i < x; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', e => {
            e.target.style.background = '#000';
        });
        content.appendChild(div);
    }
}

function openForm() {
    inputCover.style.display = 'flex'
}

function closeForm() {
    inputCover.style.display = 'none'
}

closeCover.addEventListener('click', e => {
    e.preventDefault();
    closeForm();
})

submitForm.addEventListener('click', e => {
    e.preventDefault();

    let value = document.querySelector('#inputValue')
    clearFunc(value.value);
    closeForm();
    value.value = '';
})

function clearFunc(val) {
    let count = content.childElementCount;

    for (i = 0; i < count; i++) {
        content.removeChild(content.childNodes[0]);
    }

    content.style.gridTemplateRows = `repeat(${val}, ${(100/val)}%)`;
    content.style.gridTemplateColumns = `repeat(${val}, ${(100/val)}%)`;

    generateCanvas(Math.pow(val, 2))
}

function multiColor() {
    generateRandom = () => Math.floor(Math.random()*256)

    let contentCount = document.querySelectorAll('#content > div')

    contentCount.forEach(item => item.addEventListener('mouseover', e => {
        e.target.style.background = `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`
    }))
}

function invisiblack() {
    let contentCount = document.querySelectorAll('#content > div')

    contentCount.forEach(item => {
        let value = 90;
        item.addEventListener('mouseover', e => {
            e.target.style.background = `rgb(${value}%, ${value}%, ${value}%)`
            value -= 10;
        })
    })   
}
